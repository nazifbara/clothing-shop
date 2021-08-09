import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from '@aws-amplify/datastore';

export enum OrderStatus {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export declare class Platform {
  readonly id: string;
  readonly name: string;
  readonly games?: (Game | null)[];
  readonly short_name?: string;
  constructor(init: ModelInit<Platform>);
  static copyOf(
    source: Platform,
    mutator: (draft: MutableModel<Platform>) => MutableModel<Platform> | void
  ): Platform;
}

export declare class Game {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly trailerURL?: string;
  readonly imageKey?: string;
  readonly price?: number;
  readonly recommended_age?: string;
  readonly release_date?: string;
  readonly types?: (GameType | null)[];
  readonly orders?: (GameOrder | null)[];
  readonly platform?: Platform;
  readonly publisher?: Publisher;
  constructor(init: ModelInit<Game>);
  static copyOf(
    source: Game,
    mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void
  ): Game;
}

export declare class GameType {
  readonly id: string;
  readonly game?: Game;
  readonly type?: Type;
  constructor(init: ModelInit<GameType>);
  static copyOf(
    source: GameType,
    mutator: (draft: MutableModel<GameType>) => MutableModel<GameType> | void
  ): GameType;
}

export declare class Type {
  readonly id: string;
  readonly name: string;
  readonly games?: (GameType | null)[];
  constructor(init: ModelInit<Type>);
  static copyOf(
    source: Type,
    mutator: (draft: MutableModel<Type>) => MutableModel<Type> | void
  ): Type;
}

export declare class GameOrder {
  readonly id: string;
  readonly game?: Game;
  readonly order?: Order;
  constructor(init: ModelInit<GameOrder>);
  static copyOf(
    source: GameOrder,
    mutator: (draft: MutableModel<GameOrder>) => MutableModel<GameOrder> | void
  ): GameOrder;
}

export declare class Order {
  readonly id: string;
  readonly user: string;
  readonly date?: string;
  readonly total?: number;
  readonly country?: string;
  readonly city?: string;
  readonly zipCode?: string;
  readonly address?: string;
  readonly games?: (GameOrder | null)[];
  constructor(init: ModelInit<Order>);
  static copyOf(
    source: Order,
    mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void
  ): Order;
}

export declare class Publisher {
  readonly id: string;
  readonly name: string;
  readonly games?: (Game | null)[];
  constructor(init: ModelInit<Publisher>);
  static copyOf(
    source: Publisher,
    mutator: (draft: MutableModel<Publisher>) => MutableModel<Publisher> | void
  ): Publisher;
}
