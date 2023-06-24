import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./useLocalStorage"
import Navbar from "./Routes/Navbar"
import Routes from "./Routes/Routes"
import './App.css';
import EasyGptApi from "./api/api";
import UserContext from "./UserContext";
import {decodeToken} from "react-jwt"

export const TOKEN_STORAGE_ID = "jobly-token";





function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));


  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = decodeToken(token);
          
          EasyGptApi.token = token;
          let currentUser = await EasyGptApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  async function login(loginData) {
    try {
      let token = await EasyGptApi.login(loginData);
      setToken(token);

      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await EasyGptApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  return (
    <>
    
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser}}>
        <Navbar logout={logout}/>
        <Routes login={login} signup={signup}/>
      </UserContext.Provider>
    </BrowserRouter>
    
    </>

  );
}

export default App;
