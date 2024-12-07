import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import MainLayout from "./components/mainlayout/MainLayout";

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#191919";
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
