import {assoc} from "../js/assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 16);

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);