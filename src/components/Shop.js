import React, { useState, useEffect } from 'react';
import '../css/Shop.css';
import ShopItem from './ShopItem';

const Shop = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const items = await data.json();
    setItems(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="item-container">
      {items.length !== 0 ? (
        items.map((item) => {
          return (
            <ShopItem
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              //pass cart back up to app componment
              addToCart={() => addToCart({ ...item, count: 1 })}
            />
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Shop;
