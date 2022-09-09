import React, { useEffect } from "react";
import Create from "./Create";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
