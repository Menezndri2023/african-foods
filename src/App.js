import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Pub from "./Components/pub";
import Panier from "./Components/panier";
import Connexion from "./Components/Connexion";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pub" element={<Pub />} />
      <Route path="/panier" element={<Panier />} />
      <Route path="/Connexion" element={<Connexion />} />
      
    </Routes>
  );
}

export default App;
