import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./breadcrumb/Home";
import AllProducts from "./breadcrumb/AllProducts";
import SingleProduct from "./breadcrumb/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/allProducts/Single/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
