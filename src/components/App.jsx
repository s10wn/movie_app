import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "../routes/Details";
import { Home } from "../routes/Home";

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<Details/>}/>

    </Routes>
  </BrowserRouter>;
};
