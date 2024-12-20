import { useRecoilState, useRecoilValue } from "recoil";
import {
  loggedInAtom,
  userDataAtom,
  userDataState,
  reportPetFlag,
  userReportsAtom,
} from "../recoil";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  getUserLocationMapbox,
  loginToAPI,
  signUpToAPI,
  updateDataAPI,
  updatePasswordAPI,
  reportLostPetAPI,
  getUserReportsAPI,
} from "../lib/api";

export function useLogin() {
  const [token, setToken] = useRecoilState(loggedInAtom);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const navigate = useNavigate();

  async function handleLogin(
    email: string,
    password: string,
    confirmPassword?: string,
    name?: string
  ) {
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
  const navigate = useNavigate();
  const isInitialMount = useRef(true);
  const [userData, setUserData] = useRecoilState(userDataAtom);
  async function handleUpdateData(name: string, city: string, token: string) {
    try {
      const res = await updateDataAPI(name, city, token);
      setUserData(res);
    } catch (error) {
      console.error("Error en la llamada updateData a la API:", error);
    }
  }
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (userData) {
      navigate("/");
    }
  }, [userData]);
  return { handleUpdateData };
}
export function useUpdatePassword() {
  const navigate = useNavigate();
  const isInitialMount = useRef(true);
  const [userState, setUserData] = useRecoilState(userDataAtom);
  const [token, setToken] = useRecoilState(loggedInAtom);
  const userData = useRecoilValue(userDataState);
  async function handleUpdatePassword(
    password: string,
    confirmPassword: string,
    token: string
  ) {
    try {
      const resPassword = await updatePasswordAPI(
        password,
        confirmPassword,
        token
      );
      //relogueo a la API
      const resLogin = await loginToAPI(userData.email, password);
      setToken(resLogin.token);
      setUserData(resLogin.user);
    } catch (error) {
      console.error("Error en la llamada updateData a la API:", error);
    }
  }
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (userState) {
      navigate("/");
    }
  }, [userState]);
  return { handleUpdatePassword };
}

export function useUserLocation() {
  async function handleUserLocation(lat: number, lng: number) {
    const res = await getUserLocationMapbox(lat, lng);
    console.log(res.features[2].text);
  }
  return { handleUserLocation };
}

export function useReportPet() {
  const [status, setReportStatus] = useRecoilState(reportPetFlag);
  async function handleReportPet(
    name: string,
    dataURL: string,
    lat: number,
    lng: number,
    token: string
  ) {
    const res = await reportLostPetAPI(name, dataURL, lat, lng, token);
    setReportStatus(res);
  }
  return { handleReportPet };
}

export function useUserReports() {
  const [userReports, setUserReports] = useRecoilState(userReportsAtom);
  async function handleUpdateUserReports(token: string) {
    const res = await getUserReportsAPI(token);
    setUserReports(res);
  }

  return { handleUpdateUserReports };
}
