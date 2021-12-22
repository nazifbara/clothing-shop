import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrderStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}



export declare class Order {
  readonly id: string;
  readonly country: string;
  readonly city: string;
  readonly address: string;
  readonly zipCode: string;
  readonly date: string;
  readonly total: number;
  readonly username: string;
  readonly products?: (ProductOrder | null)[];
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class ProductOrder {
  readonly id: string;
  readonly product: Product;
  readonly order: Order;
  constructor(init: ModelInit<ProductOrder>);
  static copyOf(source: ProductOrder, mutator: (draft: MutableModel<ProductOrder>) => MutableModel<ProductOrder> | void): ProductOrder;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly ProductImages?: (ProductImage | null)[];
  readonly ProductOrders?: (ProductOrder | null)[];
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

export declare class ProductImage {
  readonly id: string;
  readonly key?: string;
  readonly productID?: string;
  constructor(init: ModelInit<ProductImage>);
  static copyOf(source: ProductImage, mutator: (draft: MutableModel<ProductImage>) => MutableModel<ProductImage> | void): ProductImage;
}