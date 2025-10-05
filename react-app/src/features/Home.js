import React, { useState } from 'react';

import data from '../App/data';
import Product from '../features/Product';
import AddForm from '../features/Product/AddForm';

let currentProductId = 12;

export default function Home() {
  const [products, setProducts] = useState(data);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <div>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
      <AddForm addProduct={addProduct} />
    </div>
  );
}
