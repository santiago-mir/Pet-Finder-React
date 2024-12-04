export async function signUpToAPI(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): Promise<any> {
  const signUpRes = await fetch("http://localhost:3002/auth", {
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
  const response = await fetch("http://localhost:3002/auth/token", {
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
  const response = await fetch("http://localhost:3002/menu/update-data", {
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
  const response = await fetch("http://localhost:3002/menu/update-password", {
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
