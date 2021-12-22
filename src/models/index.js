// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "SUCCESS": "SUCCESS",
  "FAILED": "FAILED"
};

const { Order, Product, ProductImage, ProductOrder } = initSchema(schema);

export {
  Order,
  Product,
  ProductImage,
  ProductOrder,
  OrderStatus
};