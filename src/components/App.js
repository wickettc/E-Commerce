import React, { useState } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Shop from './Shop';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  //get cart components from Shop and checks if it already exists in cart
  const addToCart = (item) => {
    const result = cart.map((cartItem) => cartItem.id).includes(item.id);
    //if item exists then increase count by 1
    if (result) {
      updateCount(item.id, 1);
    } else {
      // if item does not exist then add
      setCart([...cart, item]);
    }
  };

  const updateCount = (id, num) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + num }
          : cartItem
      )
    );
  };

  const removeItem = (id) => {
    setCart(
      //removes item from array that matches with id arg
      cart.filter((cartItem) => {
        return cartItem.id !== id;
      })
    );
  };

  const increaseCount = (id) => {
    setCart(
      cart.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            count: cartItem.count + 1,
          };
        }
        return { ...cartItem };
      })
    );
  };

  const decreaseCount = (id) => {
    setCart(
      cart.map((cartItem) => {
        if (cartItem.id === id) {
          if (cartItem.count === 1) {
            setCart(
              cart.filter((cItem) => {
                return cItem.id !== id;
              })
            );
          }
          return {
            ...cartItem,
            count: cartItem.count - 1,
          };
        }
        return { ...cartItem };
      })
    );
  };

  return (
    <div className="App">
      {console.log(cart, 'app render')}
      <Router>
        <Nav cart={cart} />
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
              cart={cart}
              removeItem={removeItem}
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
