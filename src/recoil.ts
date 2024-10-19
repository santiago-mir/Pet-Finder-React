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

export const loggedInAtom = atom({
  key: "loggedInState",
  default: null,
});

export const loggedInState = selector({
  key: "userNameState",
  get: ({ get }) => {
    const loggedInData = get(loggedInAtom);
    return loggedInData;
  },
});
