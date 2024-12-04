import { useParams } from "react-router-dom";
import { atom, selector } from "recoil";

// atomo y selector para el token
export const loggedInAtom = atom({
  key: "loggedInAtom",
  default: null,
});

export const loggedInState = selector({
  key: "tokenState",
  get: ({ get }) => {
    const token = get(loggedInAtom);
    return token;
  },
});

// atomo y selector para la userData
export const userDataAtom = atom({
  key: "userDataAtom",
  default: null,
});

export const userDataState = selector({
  key: "userDataState",
  get: ({ get }) => {
    const userData = get(userDataAtom);
    if (userData) {
      return {
        name: userData.firstName,
        email: userData.email,
        city: userData.city,
      };
    }
  },
});
