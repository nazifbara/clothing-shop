// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "SUCCESS": "SUCCESS",
  "FAILED": "FAILED"
};

const { Order, ProductOrder, Product, ProductImage } = initSchema(schema);

export {
  Order,
  ProductOrder,
  Product,
  ProductImage,
  OrderStatus
};