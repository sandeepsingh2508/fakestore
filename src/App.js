import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import ProductView from "./ProductView";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="products/:id" element={<ProductView />} />
    </Routes>
  );
};

export default App;
