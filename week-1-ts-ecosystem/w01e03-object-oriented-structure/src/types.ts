export type ProductCategory = "ShopNow" | "Auction" | "Free";

export type ICartItem<Category> = {
  id: string;
  name: string;
  price: {
    value: number;
    currency: string;
  };
  amount: number;
  unit: string;
  category: Category;
};
