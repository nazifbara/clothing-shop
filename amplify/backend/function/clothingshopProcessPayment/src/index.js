/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_PRIVATE_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	AUTH_CLOTHINGSHOP_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { CognitoIdentityServiceProvider, SSM } = require('aws-sdk');
const stripe = require('stripe');

const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = process.env.AUTH_CLOTHINGSHOP_USERPOOLID;

const getStripePrivateKey = async () => {
  const { Parameters } = await new SSM()
    .getParameters({
      Names: ['STRIPE_PRIVATE_KEY'].map(
        (secretName) => process.env[secretName]
      ),
      WithDecryption: true,
    })
    .promise();
  return Parameters[0].Value;
};

const getUserInfo = async (event) => {
  console.log({ event });

  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username,
  };
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise();

  if (!user) {
    throw new Error('User not found');
  }

  console.log({ user });

  const userInfo = user.UserAttributes.reduce(
    (userInfo, { Name, Value }) => ({ ...userInfo, [Name]: [Value] }),
    { username: user.Username }
  );

  console.log({ userInfo });

  return userInfo;
};

exports.handler = async (event) => {
  console.log(event);

  try {
    const stripePrivateKey = await getStripePrivateKey();
    const _stripe = stripe(stripePrivateKey);
    const { cart, total, token, country, zipCode, address } =
      event.arguments.input;
    const { email, username } = await getUserInfo(event);

    await _stripe.charges.create({
      amount: total,
      currency: 'usd',
      source: token,
      description: `Order ${new Date()} by ${username} with ${email} email`,
    });
    return { cart, total, address, username, country, zipCode };
  } catch (err) {
    throw new Error(err);
  }
};
