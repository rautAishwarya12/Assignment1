import React, { useState, useEffect } from 'react';

const ProductComponent = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json()) 
      .then((data) => {
        setProducts(data.products); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>; 
  }

  return (
    <div>
      <h2>List Of Product</h2>
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComponent;