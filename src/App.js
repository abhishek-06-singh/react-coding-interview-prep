import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./DarkModeQuerstions/components/store";
import Home from "./DarkModeQuerstions/components/Home";
import About from "./DarkModeQuerstions/components/About";
import Blog from "./DarkModeQuerstions/components/Blog";
import Navbar from "./DarkModeQuerstions/components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
