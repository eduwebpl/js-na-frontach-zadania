import { AuctionProduct, BuyNowProduct, FreeProduct } from "./Products";

type ProductTypes = BuyNowProduct | FreeProduct | AuctionProduct;

export class Cart<Product extends ProductTypes> {
  #products = new Map<string, Product>();

  getById(id: string) {
    return this.#products.get(id);
  }

  addProduct(product: Product) {
    if (this.#products.has(product.id)) {
      throw new Error("Product already exists");
    }
    this.#products.set(product.id, product);
  }

  updateProduct(product: Product) {
    if (!this.#products.has(product.id)) {
      throw new Error("Product does not exists");
    }
    this.#products.set(product.id, product);
  }

  removeProduct(id: string) {
    this.#products.delete(id);
  }

  get products() {
    return Array.from(this.#products.values());
  }

  get productCount() {
    return this.#products.size;
  }

  get productsSum() {
    let sum = 0;

    if (this.#products.size === 0) {
      return sum;
    }

    this.#products.forEach((product) => {
      if (!(product instanceof FreeProduct)) {
        sum += product.price * product.amount;
      }
    });

    return sum;
  }
}
