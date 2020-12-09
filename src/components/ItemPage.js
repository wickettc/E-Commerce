import React, { useEffect, useState } from 'react';
import '../css/ItemPage.css';

const ItemPage = ({ match, addToCart }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const data = await fetch(
        `https://fakestoreapi.com/products/${match.params.id}`
      );
      const item = await data.json();
      setItem(item);
    };
    fetchItem();
  }, [match.params.id]);

  return (
    <div className="item-page-container">
      {item.title ? (
        <div>
          <h2>{item.title}</h2>
          <img className="item-page-img" src={item.image} alt={item.title} />
          <p>{item.description}</p>
          <h3>${item.price.toFixed(2)}</h3>
          <button onClick={() => addToCart({ ...item, count: 1 })}>
            Add to Cart
          </button>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default ItemPage;
