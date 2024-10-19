import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInAtom } from "../recoil";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { signUpToAPI } from "../lib/api";

export function useLogin() {
  const [loggedIn, setLogIn] = useRecoilState(loggedInAtom);
  const navigate = useNavigate();

  async function handleLogin(name, email, password, confirmPassword) {
    try {
      const res = await signUpToAPI(name, email, password, confirmPassword);
      setLogIn(res);
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
    }
  }
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return { handleLogin, loggedIn };
}
