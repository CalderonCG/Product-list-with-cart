import './CartItem.scss'
import remove from '../../assets/icon-remove-item.svg'
import type { CartItem } from '../../context';



function CartItem({name, quantity, thumbnail, price}: CartItem) {
  return (
    <div className="item">
      <div className="item__data">
        <p className="item__name">{name}</p>
        <p className="item__quantity">
          {quantity}x <span className="item__price"><span className='item__at'>@ </span>${price}</span>
          <span className="item__total">${price * quantity}</span>
        </p>
      </div>
      <button className="item__button">
        <img className='item__icon' src={remove} alt="" />
      </button>
    </div>
  );
}

export default CartItem;
