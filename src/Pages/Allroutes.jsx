import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Puppy from "./Puppy";
import Search from "./Search";
import SignUp from "../components/Signup";
import Login from "../components/Login";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/puppy" element={<Puppy />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Allroutes;
