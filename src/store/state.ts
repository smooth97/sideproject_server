import { atom } from "recoil";
import { User } from "../schemas/types";


// User Atom {id, firstName, lastName, email, thumbnail}
export const userState = atom<User|null>({
  key: 'userState',
  default: null, 
});