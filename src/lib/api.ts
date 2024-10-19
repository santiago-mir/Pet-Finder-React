export async function signUpToAPI(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): Promise<any> {
  const signUpRes = await fetch(
    "https://pet-finder-app-uuds.onrender.com/auth",
    {
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
    }
  );
  const loginResponse = await loginToAPI(email, password);
  return loginResponse;
}

export async function loginToAPI(
  email: string,
  password: string
): Promise<any> {
  const response = await fetch(
    "https://pet-finder-app-uuds.onrender.com/auth/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  return response.json();
}
