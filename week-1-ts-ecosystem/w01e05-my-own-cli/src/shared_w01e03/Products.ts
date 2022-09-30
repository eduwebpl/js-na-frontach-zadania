export enum ProductType {
  "BuyNow" = "Buy Now",
  "Auction" = "Auction",
  "Free" = "Free",
}

export abstract class Product {
  #id: string;
  #name: string;
  #amount: number;
  #type: ProductType;

  constructor(id: string, name: string, type: ProductType, amount: number) {
    this.#id = id;
    this.#name = name;
    this.#type = type;
    this.#amount = amount;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get amount() {
    return this.#amount;
  }

  toString() {
    return `${this.#type}: ${this.#id}, Name: ${this.#name}, Amount: ${
      this.#amount
    }`;
  }
}

export class BuyNowProduct extends Product {
  #price: number;

  constructor(id: string, name: string, amount: number, price: number) {
    super(id, name, ProductType.BuyNow, amount);
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  toString() {
    return `${this.type}: ${this.id}, Name: ${this.name}, Amount: ${this.amount} Price: ${this.price}`;
  }
}

export class AuctionProduct extends Product {
  #price: number;

  constructor(id: string, name: string, amount: number, price: number) {
    super(id, name, ProductType.Auction, amount);
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  toString() {
    return `${this.type}: ${this.id}, Name: ${this.name}, Amount: ${this.amount} Price: ${this.price}`;
  }
}

export class FreeProduct extends Product {
  constructor(id: string, name: string, amount: number) {
    super(id, name, ProductType.Free, amount);
  }
}
