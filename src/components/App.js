import React, { useState, useEffect } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Shop from './Shop';
import Cart from './Cart';
import ItemPage from './ItemPage';
import Checkout from './Checkout';

function App() {
  const [cart, setCart] = useState([]);
  const [cartInfo, setCartInfo] = useState({ itemsCount: 0, totalPrice: 0 });

  useEffect(() => {
    const count = cart.reduce((acc, cur) => {
      return acc + cur.count;
    }, 0);
    const price = cart.reduce((acc, cur) => {
      return acc + cur.count * cur.price;
    }, 0);
    setCartInfo({
      itemsCount: count,
      totalPrice: price,
    });
  }, [cart]);

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
      //removes item from array that matches with id argument
      cart.filter((cartItem) => {
        return cartItem.id !== id;
      })
    );
  };

  const increaseCount = (id) => {
    setCart(
      cart.map((cartItem) => {
        return cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : { ...cartItem };
      })
    );
  };

  const decreaseCount = (id) => {
    setCart(
      cart.map((cartItem) => {
        //matches id to decrease correct cartItem, does not let item count be less than 1
        return cartItem.id === id && cartItem.count === 1
          ? { ...cartItem }
          : cartItem.id === id
          ? { ...cartItem, count: cartItem.count - 1 }
          : { ...cartItem };
      })
    );
  };

  return (
    <div className="App">
      <Router>
        <Nav cartInfo={cartInfo} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/shop"
            render={(props) => <Shop addToCart={addToCart} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart
                cart={cart}
                cartInfo={cartInfo}
                removeItem={removeItem}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
              />
            )}
          />
          <Route
            exact
            path="/shop/:id"
            render={({ props, match }) => (
              <ItemPage match={match} addToCart={addToCart} />
            )}
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
