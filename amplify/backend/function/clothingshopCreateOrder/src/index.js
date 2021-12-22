/* Amplify Params - DO NOT EDIT
	API_CLOTHINGSHOP_GRAPHQLAPIIDOUTPUT
	API_CLOTHINGSHOP_ORDERTABLE_ARN
	API_CLOTHINGSHOP_ORDERTABLE_NAME
	API_CLOTHINGSHOP_PRODUCTTABLE_ARN
	API_CLOTHINGSHOP_PRODUCTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = `${process.env.ORDER_TABLE_NAME}-${process.env.ENV}`;
const ORDER_TYPE = 'Order';
const ORDER_PRODUCT_TABLE = `${process.env.PRODUCT_ORDER_TABLE_NAME}-${process.env.ENV}`;
const PRODUCT_ORDER_TYPE = 'ProductOrder';

const createOrder = async (payload) => {
  const { order_id, cart, ...other } = payload;
  var params = {
    TableName: ORDER_TABLE,
    Item: {
      id: order_id,
      __typename: ORDER_TYPE,
      ...other,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  };
  console.log(params);
  await documentClient.put(params).promise();
};

const createOrderProduct = async (payload) => {
  let productOrders = [];
  for (let i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i];
    productOrders.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: PRODUCT_ORDER_TYPE,
          product_id: cartItem.id,
          order_id: payload.order_id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    });
  }
  let params = {
    RequestItems: {},
  };
  params['RequestItems'][ORDER_PRODUCT_TABLE] = productOrders;
  console.log(params);
  await documentClient.batchWrite(params).promise();
};

exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.order_id = uuidv4();

    await createOrder(payload);

    await createOrderProduct(payload);

    return 'SUCCESS';
  } catch (err) {
    console.log(err);
    return 'FAILED';
  }
};
