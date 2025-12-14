import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Home from "./pages/home.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Kids from "./pages/Kids.jsx";
import Lifestyle from "./pages/Lifestyle.jsx"
import Football from "./pages/Football.jsx"
import Basketball from "./pages/Basketball.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/football" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
   
  );
}
export default App;


