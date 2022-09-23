export interface Address {
  street: string;
  no: number;
}

export interface User {
  name: string;
  age: number;
  email: string;
  address: Address;
}
