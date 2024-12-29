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
      };
    }
  },
});
// atomo y selector para la userLocation (geodata)
export const userLocationAtom = atom({
  key: "userLocationAtom",
  default: null,
});

export const userLocationState = selector({
  key: "userLocationState",
  get: ({ get }) => {
    const userLocation = get(userLocationAtom);
    if (userLocation) {
      return {
        lat: userLocation.lat,
        lng: userLocation.lng,
        city: userLocation.cityName,
      };
    }
  },
});

// atomo y selector para la accion de reportar un pet (flag)

export const reportPetFlag = atom({
  key: "reportPetFlag",
  default: null,
});

export const reportPetFlagState = selector({
  key: "reportState",
  get: ({ get }) => {
    const status = get(reportPetFlag);
    return status;
  },
});

// atomo y selector para los reportes del usuario

export const userReportsAtom = atom({
  key: "userReports",
  default: null,
});

export const userReportsState = selector({
  key: "userReportsState",
  get: ({ get }) => {
    const userReports = get(userReportsAtom);
    if (userReports) {
      return userReports;
    } else {
      return null;
    }
  },
});

// atomo y selector para mascotas perdidas cerca de la zona del user

export const lostPetsAtom = atom({
  key: "lostPets",
  default: null,
});

export const lostPetsState = selector({
  key: "lostPetsState",
  get: ({ get }) => {
    const lostPets = get(lostPetsAtom);
    if (lostPets) {
      return lostPets;
    } else {
      return null;
    }
  },
});
