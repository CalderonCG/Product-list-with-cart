import CartIcon from "../../assets/icon-add-to-cart.svg?react";
import AddIcon from "../../assets/icon-increment-quantity.svg?react";
import SubstractIcon from "../../assets/icon-decrement-quantity.svg?react";
import "./CardButton.scss";

type Action = "add" | "substract";

type props = {
  counter: number;
  reducer: (action: Action) => number;
};

function CardButton({ counter, reducer }: props) {
  if (counter === 0) {
    return (
      <button className="button_empty" onClick={() => reducer("add")}>
        <CartIcon width={20} height={20} />
        <span>Add to cart</span>
      </button>
    );
  }
  return (
    <div className="button_added">
      <button className="button_action">
        <SubstractIcon width={10} onClick={() => reducer("substract")} />
      </button>
      <span>{counter}</span>
      <button className="button_action">
        <AddIcon width={10} onClick={() => reducer("add")} />
      </button>
    </div>
  );
}

export default CardButton;
