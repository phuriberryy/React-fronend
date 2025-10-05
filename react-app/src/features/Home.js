import React, { useState } from "react";
import data from "../App/data";
import Product from "./Product/index";

function Home() {

  const [products, setProducts] = useState(data);

  return (
    <div>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
        
          <Product key={product.id} item={product} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
