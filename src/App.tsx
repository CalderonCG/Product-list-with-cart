import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="container">
      <div className="container__dessert">
        <h1>Desserts</h1>
        <div className="container__list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="container__cart">
        <Cart/>
      </div>
    </div>
  );
}

export default App;
