import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInAtom } from "../recoil";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginToAPI, signUpToAPI } from "../lib/api";

export function useLogin() {
  const [loggedIn, setLogIn] = useRecoilState(loggedInAtom);
  const navigate = useNavigate();

  async function handleLogin(email, password, confirmPassword?, name?) {
    // si tengo confirmPassword, vengo del signup
    if (confirmPassword) {
      try {
        const res = await signUpToAPI(name, email, password, confirmPassword);
        setLogIn(res);
      } catch (error) {
        console.error("Error en la llamada SignUp a la API :", error);
      }
    } else {
      // sino, del login
      try {
        const res = await loginToAPI(email, password);
        setLogIn(res);
      } catch (error) {
        console.error("Error en la llamada LogIn a la API:", error);
      }
    }
  }
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return { handleLogin, loggedIn };
}

export function useLogOut() {
  const [loggedIn, setLogIn] = useRecoilState(loggedInAtom);
  function handleLogOut() {
    setLogIn(null);
  }
  return { handleLogOut };
}
