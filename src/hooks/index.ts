import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInAtom, userDataAtom } from "../recoil";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginToAPI, signUpToAPI, updateDataAPI } from "../lib/api";

export function useLogin() {
  const [token, setToken] = useRecoilState(loggedInAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const navigate = useNavigate();

  async function handleLogin(email, password, confirmPassword?, name?) {
    // si tengo confirmPassword, vengo del signup
    if (confirmPassword) {
      try {
        const res = await signUpToAPI(name, email, password, confirmPassword);
        setToken(res.token);
        setUserData(res.user);
      } catch (error) {
        console.error("Error en la llamada SignUp a la API :", error);
      }
    } else {
      // sino, del login
      try {
        const res = await loginToAPI(email, password);
        setToken(res.token);
        setUserData(res.user);
      } catch (error) {
        console.error("Error en la llamada LogIn a la API:", error);
      }
    }
  }
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return { handleLogin, token };
}

export function useLogOut() {
  const [loggedIn, setLogIn] = useRecoilState(loggedInAtom);
  function handleLogOut() {
    setLogIn(null);
  }
  return { handleLogOut };
}

export function useUpdateData() {
  const [loggedIn, setLogIn] = useRecoilState(loggedInAtom);
  async function handleUpdateData(name, city, token) {
    try {
      const res = updateDataAPI(name, city, token);
    } catch {}
  }
  return { handleUpdateData };
}
