 type UserAddress = {
    street: string;
    no: number;
}

export type User = {
    name: string;
    email: string;
    age: number;
    address: UserAddress
}
