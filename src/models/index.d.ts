import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductOrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Order {
  readonly id: string;
  readonly country: string;
  readonly city: string;
  readonly address: string;
  readonly zipCode: string;
  readonly total: number;
  readonly username: string;
  readonly date: string;
  readonly products?: (ProductOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly ProductImages?: (ProductImage | null)[];
  readonly Orders?: (ProductOrder | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class ProductImage {
  readonly id: string;
  readonly key: string;
  readonly productID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProductImage, ProductImageMetaData>);
  static copyOf(source: ProductImage, mutator: (draft: MutableModel<ProductImage, ProductImageMetaData>) => MutableModel<ProductImage, ProductImageMetaData> | void): ProductImage;
}

export declare class ProductOrder {
  readonly id: string;
  readonly order: Order;
  readonly product: Product;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProductOrder, ProductOrderMetaData>);
  static copyOf(source: ProductOrder, mutator: (draft: MutableModel<ProductOrder, ProductOrderMetaData>) => MutableModel<ProductOrder, ProductOrderMetaData> | void): ProductOrder;
}