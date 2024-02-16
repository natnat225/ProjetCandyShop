import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Products/Product";
import Details from "./Components/Details/Details";
import Panier from "./Components/Panier/Panier";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categorie" element={<Product />} />
          <Route path="/:categorie/:id" element={<Details />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
