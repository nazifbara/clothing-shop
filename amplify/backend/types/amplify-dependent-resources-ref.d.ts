export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "onlinegamestored9698489": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "AppClientSecret": "string"
        }
    },
    "storage": {
        "GameImages": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "onlinegamestore": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "processPayment": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "createOrder": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}