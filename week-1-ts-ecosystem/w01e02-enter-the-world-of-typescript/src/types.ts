export type CartItem = {
  name: string;
  price: {
    value: number;
    currency: string;
  };
  amount: number;
  unit: string;
};
