import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import Dashboard from "./components/Dashboard";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBs0-994tF5RJO1qT8Qs4Br6YSJZXpiYRs",
    authDomain: "apprecial-be044.firebaseapp.com",
    projectId: "apprecial-be044",
    storageBucket: "apprecial-be044.appspot.com",
    messagingSenderId: "1015323762692",
    appId: "1:1015323762692:web:e39f5de18020f0724a5551",
    measurementId: "G-8XBXF2TK1E",
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  const [user, setUser] = useState({ email: "", uid: "" });
  useEffect(() => {
    onAuthStateChanged(firebase.auth(), (user) => {
      // console.log(user);
      setUser({ email: user.email, uid: user.uid });
    });
  });

  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              isLoggedIn === "true" ? <Dashboard user={user} /> : <Home />
            }
          />
          <Route path="/login" element={<Login auth={firebase.auth()} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
