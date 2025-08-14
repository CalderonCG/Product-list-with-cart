import "./Cart.scss";
import empty from "../../assets/illustration-empty-cart.svg";
import Delivery from "../../assets/icon-carbon-neutral.svg";
import {useEffect, useState } from "react";
import { useCart } from "../../context";
import Item from "../CartItem/CartItem";

function Cart({showModal}:{showModal: (arg: boolean)=> void}) {
  const {cart, removeItem} = useCart()
  const [Total, setTotal] = useState(0);

  useEffect(() => {
      let cartTotal = 0
      cart.forEach(item => {
        cartTotal += item.price * item.quantity
        setTotal(cartTotal)
      });
  },[cart])

  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      {cart.length === 0? <div className="cart__figure">
        <img className="cart__empty" src={empty} alt="" />
        <p className="cart__label">Your added items will appear here</p>
      </div>  : <>
      <div className="cart__list">
        {cart.map(item => (
          <Item key={item.name} removeItem={removeItem}
           thumbnail={item.thumbnail} name={item.name} price={item.price} quantity={item.quantity}/>
        ))  }
      </div>
      <div className="cart__total">
        <p className="cart__total_label">Order Total</p>
        <p className="cart__total_price">${Total}</p>
      </div>

      <div className="cart__delivery">
        <img src={Delivery} alt="" />
        <p>This is a <span className="cart__carbon">carbon-neutral</span> delivery</p>
      </div>

      <button className="cart__confirm" onClick={()=>showModal(true)}>Confirm Order</button>
      </> }

    </div>
  );
}

export default Cart;
