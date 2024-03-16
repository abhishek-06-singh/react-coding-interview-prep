import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./progress-bar/Home";
import AllProducts from "./breadcrumb/AllProducts";
import SingleProduct from "./breadcrumb/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
