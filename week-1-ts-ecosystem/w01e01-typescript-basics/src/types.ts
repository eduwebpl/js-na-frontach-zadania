export type UserAdress = {
  street: string;
  no: number;
};

export type User = {
  name: string;
  age: number;
  email: string;
  address?: UserAdress;
};

export type AgeChecker = (user: User) => boolean;
