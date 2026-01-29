import { useState } from "react";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full bg-green-200 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/Hero" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
