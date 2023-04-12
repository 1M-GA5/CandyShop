import React, { useState } from 'react';
import '../src/CandyShop.css';

const CandyShop = () => {
  const [candies, setCandies] = useState([]);
  const [candyName, setCandyName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [cart, setCart] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCandies([...candies, { candyName, price, description }]);
    setCandyName('');
    setPrice('');
    setDescription('');
  };

  const handleBuy = (num) => {
    setCart(cart + num);
  };

  return (
    <div className="candy-shop">
      <div className="candy-shop-header">
        <h1>Welcome to Candy Shop</h1>
        <div className="cart">Cart: {cart}</div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Candy Name:
          <input
            type="text"
            placeholder="Enter candy name"
            value={candyName}
            onChange={(e) => setCandyName(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Candy</button>
      </form>
      <ul className="candy-list">
        {candies.map((candy, index) => (
          <li key={index}>
            <h3>{candy.candyName}</h3>
            <p>Price: {candy.price}</p>
            <p>{candy.description}</p>
            <div className="buy-buttons">
              <button onClick={() => handleBuy(1)}>Buy 1</button>
              <button onClick={() => handleBuy(2)}>Buy 2</button>
              <button onClick={() => handleBuy(3)}>Buy 3</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandyShop;
