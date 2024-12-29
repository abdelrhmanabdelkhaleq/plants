import React, { useState } from 'react';
const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 39.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <div className="container">
      <h1 className="my-4">E-Commerce</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>Products</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h2>Cart</h2>
          <ul className="list-group">
            {cart.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                {product.name}
                <span>
                  ${product.price}
                  <button className="btn btn-danger btn-sm ml-2" onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <h3 className="mt-4">
            Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
