import { useState, useEffect } from "react";
import "./app.css";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "../hooks/hooks";

function App() {
  const { data:products, isPending, error } = useFetch(
    `http://localhost:8000/api/products`
  );

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <section className="products">
              {isPending && !error && <p>Loading...</p>}
              {error && <p>{error}</p>}

              {!isPending &&
                products &&
                products.map((product, index) => {
                  return <ProductCard key={index} data={product} />;
                })}
            </section>
          }
        />
        <Route path="/about" element={<h1>Welcome to About Page</h1>} />
        <Route path="/products/:productID" element={<ProductDetail/>} />
        <Route path="*" element={<h1>Sorry, Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
