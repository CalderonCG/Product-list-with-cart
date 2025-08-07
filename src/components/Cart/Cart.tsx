import "./Cart.scss";
import empty from "../../assets/illustration-empty-cart.svg";

function Cart() {
  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      <div className="cart__figure">
        <img className="cart__empty" src={empty} alt="" />
        <p className="cart__label">Your added items will appear here</p>
      </div>
    </div>
  );
}

export default Cart;
