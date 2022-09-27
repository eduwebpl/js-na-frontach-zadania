import { ICartItem } from "./types";

export class CartItem<Category> implements ICartItem<Category> {
  id;
  name;
  price;
  amount;
  unit;
  category;
  constructor({
    id,
    name,
    amount,
    unit,
    price: { currency, value },
    category,
  }: ICartItem<Category>) {
    this.id = id;
    this.name = name;
    this.price = {
      value,
      currency,
    };
    this.amount = amount;
    this.unit = unit;
    this.category = category;
  }
}
