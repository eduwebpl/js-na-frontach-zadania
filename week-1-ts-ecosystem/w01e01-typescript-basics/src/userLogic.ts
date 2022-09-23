import {User} from "./type";

export const hasAddress =(address: User["address"]): boolean => {
    return !!address
}

export const hasGivenAge = (requiredAge: User["age"]): (userAge: User["age"]) => boolean => {
    return (userAge: User["age"]): boolean => userAge >= requiredAge
}