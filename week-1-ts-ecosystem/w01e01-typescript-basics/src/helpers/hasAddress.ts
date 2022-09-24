import { UserType } from "../types";

export function hasAddress(user: UserType) {
  return Boolean(user.address);
}
