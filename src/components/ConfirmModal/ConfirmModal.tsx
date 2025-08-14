import "./ConfirmModal.scss";
import IconComplete from "../../assets/icon-order-confirmed.svg?react";
import ConfirmItem from "../ConfirmItem/ConfirmItem";
import {useEffect, useState } from "react";
import { useCart } from "../../context";

function ConfirmModal({ showModal } : {showModal: (arg: boolean)=> void}) {

  const {cart, clearCart} = useCart()
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(item =>
      total +=  item.price * item.quantity
    )
    setTotal(total)
  }, [cart]);

  const handleConfirm = () => {
    showModal(false)
    clearCart()
  }
  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={() => showModal(false)}></div>
      <div className="modal__container">
        <IconComplete width={50} height={50} />
        <h1 className="modal__title">Order Confirmed</h1>
        <p className="modal__p">We hope you enjoy your food!</p>

        <div className="modal__list">

          {cart.map((item) => <ConfirmItem key={item.name}  item={item}/>)}
          <div className="modal__total">
            <p className="modal__total_label">Order Total</p>
            <p className="modal__total_price">${total}</p>
          </div>
        </div>

        <button className="modal__button" onClick={handleConfirm}>Start New Order</button>
      </div>
    </div>
  );
}

export default ConfirmModal;
