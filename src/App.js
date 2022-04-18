import React, { useState } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ItemList from './components/item-list/ItemList';
import CartBadge from './components/cart-badge/CartBadge';
import CartView from './components/cart-view/CartView';

function App() {

  const [cart, setCart] = useState({})

  const addToCart = (item, qty = 1) => {

    let { id } = item;
    let itemLine = cart[id]
    if (!itemLine) {
      itemLine = { item, qty: 1 }
    } else {
      itemLine = { item, qty: itemLine.qty + qty }
    }

    if (itemLine.qty === 0) {
      delete cart[item.id]
      setCart({ ...cart })
    } else {
      setCart({ ...cart, [id]: itemLine })
    }
  }
  let totalqty =0;
  let totalsum =0;

  let keys = Object.keys(cart)
       keys.map(key => {
            let cartLine = cart[key]
            let { item,qty } = cartLine;
            let {price} = item;
            totalqty = totalqty+qty;
            totalsum = totalsum+(qty*price);
        });
  return (
    <div className="ml-4 mr-4">

      <Router>
        <Navbar title="ManiKart" />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/items" render={props => <ItemList {...props} cart={cart} onBuy={(item, qty) => addToCart(item, qty)} />} />
            <Route path="/cart" render={props => <CartView {...props} value={cart} totalqty={totalqty} totalsum={totalsum} onBuy={(item, qty) => addToCart(item, qty)} />} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
