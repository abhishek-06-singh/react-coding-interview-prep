import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./multi-select-input/Home";

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
