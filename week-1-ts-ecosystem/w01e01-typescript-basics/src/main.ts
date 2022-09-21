/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */

import { userClass } from "./user/userClass"
import { userType } from "./user/userType"

const userT: userType = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address: {
    street: 'Strange Alley',
    no: 23,
  },
}

const user: userClass = new userClass(userT)



function hasAddress(user: userType): boolean {
  return (typeof user.address !== undefined)
}

function hasGivenAge(requiredAge: number): any {
  return (user: userType) => user.age >= requiredAge
}


console.log(`User ${user.user.name} is ${user.isAdult(18) ? 'adult' : 'minor'}`)
console.log(`and has${user.hasAddress() ? '' : ' no'} address`)
