export async function signUpToAPI(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): Promise<any> {
  const response = await fetch(
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
  return response.json(); // Retorna la respuesta en formato JSON
}
