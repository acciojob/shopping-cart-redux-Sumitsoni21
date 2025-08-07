
import React from "react";
import './../styles/App.css';
import Products from "./Products";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Coupon from "./Coupon";

const App = () => {
  return (
    <div className="app">
      {/* Do not remove the main div */}
      <Products />
      <Wishlist />
      <Cart />
      {/* <Coupon /> */}
    </div>
  )
}

export default App
