import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import Product from './Product';
import AddForm from './Product/AddForm';

let currentProductId = 9;

function Home({ className }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://68e9fe40f1eeb3f856e5b14f.mockapi.io/api/vi/product/product'
      );
      setProducts(products.data);
    }
    getProducts();
  }, []);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <div className={className}>
      <h1>New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
      <AddForm addProduct={addProduct} />
    </div>
  );
}


Home.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledHome = styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;

// export ตัว styled component
export default StyledHome;
