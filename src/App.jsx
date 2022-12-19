import React from "react";
import './App.css'
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
