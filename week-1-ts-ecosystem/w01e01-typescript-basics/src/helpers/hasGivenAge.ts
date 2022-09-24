import { UserType } from "../types";

export function hasGivenAge(requiredAge: number) {
  return (user: UserType) => user.age >= requiredAge;
}
