import type { CartItem } from "../../context";
import "./ConfirmItem.scss";

function ConfirmItem({ item }: { item: CartItem }) {
  return (
    <div className="modal__item">
      <div className="modal__item__details">
        <img
          className="modal__item__image"
          src={item.thumbnail}
          alt="thumbnail"
        />
        <div className="modal__item__order">
          <p className="modal__item__name">{item.name}</p>
          <p className="modal__item__quantity">
            {item.quantity}x
            <span className="modal__item__at"> @</span>
            <span className="modal__item__price">${item.price}</span>
          </p>
        </div>
      </div>

      <p className="modal__item__total">${item.price * item.quantity}</p>
    </div>
  );
}

export default ConfirmItem;
