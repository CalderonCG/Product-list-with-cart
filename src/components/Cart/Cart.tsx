import "./Cart.scss";
import empty from "../../assets/illustration-empty-cart.svg";
import CartItem from "../CartItem/CartItem";
import Delivery from "../../assets/icon-carbon-neutral.svg";

function Cart() {
  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      {/* <div className="cart__figure">
        <img className="cart__empty" src={empty} alt="" />
        <p className="cart__label">Your added items will appear here</p>
      </div> */}
      <div className="cart__list">
        <CartItem />

        <CartItem />

        <CartItem />
      </div>
      <div className="cart__total">
        <p className="cart__total_label">Order Total</p>
        <p className="cart__total_price">$46.50</p>
      </div>

      <div className="cart__delivery">
        <img src={Delivery} alt="" />
        <p>This is a <span className="cart__carbon">carbon-neutral</span> delivery</p>
      </div>

      <button className="cart__confirm">Confirm Order</button>
    </div>
  );
}

export default Cart;
