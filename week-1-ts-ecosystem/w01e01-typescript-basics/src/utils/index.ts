import { User } from "../types";

export function hasAddress(user: User): boolean {
  return Boolean(user.address);
}

export function hasGivenAge(requiredAge: number) {
  return (user: User): boolean => user.age >= requiredAge;
}
