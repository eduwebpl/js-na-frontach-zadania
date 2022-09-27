import { CartItem } from "./CartItem";
import { ProductCategory } from "./types";

export class Cart<Category extends ProductCategory> {
  #products: CartItem<Category>[] = [];

  addProduct(product: CartItem<Category>) {
    this.#products.push(product);
  }

  getAllProducts() {
    return this.#products;
  }

  getProductById(id: string) {
    return this.#products.find((product) => product.id === id);
  }

  removeProductById(id: string) {
    this.#products = this.#products.filter((product) => product.id !== id);
  }

  updateProduct(id: string, product: CartItem<Category>) {
    const index = this.#products.findIndex((product) => product.id === id);
    this.#products[index] = product;
  }

  getProductCount() {
    return this.#products.length;
  }

  getTotalPrice() {
    return this.#products.reduce(
      (sum, product) => sum + product.price.value,
      0
    );
  }
}
