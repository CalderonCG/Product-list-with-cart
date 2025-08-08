import './CartItem.scss'
import remove from '../../assets/icon-remove-item.svg'
import type { CartItem } from '../../context';


function Item({name, quantity, price, removeItem}: CartItem & {removeItem: (name: string) => void;}) {
  return (
    <div className="item">
      <div className="item__data">
        <p className="item__name">{name}</p>
        <p className="item__quantity">
          {quantity}x <span className="item__price"><span className='item__at'>@ </span>${price}</span>
          <span className="item__total">${price * quantity}</span>
        </p>
      </div>
      <button className="item__button" onClick={()=> removeItem(name)}>
        <img className='item__icon' src={remove} alt="" />
      </button>
    </div>
  );
}

export default Item;
