import { userType } from "./userType";

export class userClass{
  constructor(public user: userType){
    this.user = user
  }

  hasAddress(): boolean {
    return (typeof this.user.address !== undefined)
  }
  isAdult(requiredAge: number): boolean {
    return (this.user.age >= requiredAge)

  }
}