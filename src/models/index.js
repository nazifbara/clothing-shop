// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "SUCCESS": "SUCCESS",
  "FAILED": "FAILED"
};

const { Platform, Game, GameType, Type, GameOrder, Order, Publisher } = initSchema(schema);

export {
  Platform,
  Game,
  GameType,
  Type,
  GameOrder,
  Order,
  Publisher,
  OrderStatus
};