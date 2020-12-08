import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Shop from './Shop';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [countedCart, setCountedCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  //get cart components from Shop
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const increaseCount = (id) => {
    const result = [
      ...countedCart[0].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return {
          ...item,
        };
      }),
    ];
    setCountedCart([result]);
  };

  const decreaseCount = (id) => {
    const result = [
      ...countedCart[0].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return {
          ...item,
        };
      }),
    ];
    setCountedCart([result]);
  };

  useEffect(() => {
    //tallies count of each item and adds to countedCart
    const result = [
      ...cart
        .reduce((acc, cur) => {
          if (!acc.has(cur.id)) acc.set(cur.id, { ...cur, count: 0 });
          acc.get(cur.id).count++;
          return acc;
        }, new Map())
        .values(),
    ];
    setCountedCart([result]);
  }, [cart]);

  useEffect(() => {
    let counter = 0;
    countedCart.forEach((item) => {
      item.forEach((element) => {
        console.log('element render');
        counter += element.count;
      });
    });
    setTotalItems(counter);
  }, [countedCart]);

  return (
    <div className="App">
      {console.log(countedCart, 'app render')}
      <Router>
        <Nav totalItems={totalItems} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/shop">
            {/* get cart components from Shop */}
            <Shop addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              countedCart={countedCart[0]}
              setCountedCart={setCountedCart}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
