const API_BASE_URL = "https://back-pet-production.up.railway.app";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFyY29zcmV1cXVlbiIsImEiOiJja3UxbXBzbHQzejJvMnBwcW4yN3pqemZuIn0.z65srWhOb5sS3GilPljOpw";
export async function signUpToAPI(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): Promise<any> {
  const signUpRes = await fetch(API_BASE_URL + "/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      confirmPassword,
    }),
  });
  const loginResponse = await loginToAPI(email, password);
  return loginResponse;
}

export async function loginToAPI(
  email: string,
  password: string
): Promise<any> {
  const response = await fetch(API_BASE_URL + "/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return response.json();
}

export async function updateDataAPI(
  name: string,
  city: string,
  token: string
): Promise<any> {
  const response = await fetch(API_BASE_URL + "/menu/update-data", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "bearer " + token,
    },
    body: JSON.stringify({
      name,
      city,
    }),
  });
  return response.json();
}

export async function updatePasswordAPI(
  password: string,
  confirmPassword: string,
  token: string
): Promise<any> {
  const response = await fetch(API_BASE_URL + "/menu/update-password", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "bearer " + token,
    },
    body: JSON.stringify({
      password,
      confirmPassword,
    }),
  });
  return response.json();
}

export async function getUserLocationMapbox(lat: number, lng: number) {
  const response = await fetch(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      lng +
      "," +
      lat +
      ".json?access_token=" +
      MAPBOX_TOKEN,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

async function getCityName(lat: number, lng: number) {
  const responseMapbox = await fetch(
    // busco el name de la ciudad
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      lng +
      "," +
      lat +
      ".json?access_token=" +
      MAPBOX_TOKEN,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const resJSON = await responseMapbox.json();
  const cityName = resJSON.features[2].text;
  return cityName;
}

export async function reportLostPetAPI(
  petName: string,
  imgURL: string,
  lat: number,
  lng: number,
  token: string
) {
  const cityName = await getCityName(lat, lng);
  const responseReport = await fetch(API_BASE_URL + "/report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "bearer " + token,
    },
    body: JSON.stringify({ petName, imgURL, lat, lng, cityName }),
  });
  return responseReport.json();
}

export async function editReportPetAPI(
  petName: string,
  imgURL: string,
  lat: number,
  lng: number,
  reportId: number,
  token: string
) {
  const cityName = await getCityName(lat, lng);
  const responseEditReport = await fetch(API_BASE_URL + "/edit-report", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: "bearer " + token,
    },
    body: JSON.stringify({ petName, imgURL, lat, lng, cityName, reportId }),
  });
  return responseEditReport.json();
}

export async function getUserReportsAPI(token: string) {
  const res = await fetch(API_BASE_URL + "/user-reports", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: "bearer " + token,
    },
  });
  return res.json();
}

export async function getLostPetsAPI(lat: number, lng: number) {
  const res = await fetch(
    API_BASE_URL + "/lost-pets/" + "?lat=" + lat + "&lng=" + lng,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return res.json();
}
export async function reportSeenPetAPI(
  reporterName: string,
  reporterPhone: number,
  information: string,
  petName: string,
  ownerId: number
) {
  const res = await fetch(API_BASE_URL + "/report-seen-pet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "bearer " + "",
    },
    body: JSON.stringify({
      information,
      reporterPhone,
      reporterName,
      petName,
      ownerId,
    }),
  });
  return res.json();
}
