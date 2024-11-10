import { useParams } from "react-router-dom";
import { atom, selector } from "recoil";

export const queryAtom = atom({
  key: "resultsSearch",
  default: "", // query
});

export const resultsState = selector({
  key: "resultsState",
  get: async ({ get }) => {
    const query = get(queryAtom);
    if (query) {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + query
      );
      const data = await res.json();
      return data.results;
    } else {
      return [];
    }
  },
});
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
