import './CartItem.scss'
import remove from '../../assets/icon-remove-item.svg'

function CartItem() {
  return (
    <div className="item">
      <div className="item__data">
        <p className="item__name">Classic Tiramisu</p>
        <p className="item__quantity">
          1x <span className="item__price"><span className='item__at'>@ </span>$5.50</span>
          <span className="item__total">$5.50</span>
        </p>
      </div>
      <button className="item__button">
        <img className='item__icon' src={remove} alt="" />
      </button>
    </div>
  );
}

export default CartItem;
