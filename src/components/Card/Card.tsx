import "./Card.scss";
import type { Dessert } from "../../services/jsonService";
import { useContext, useReducer } from "react";
import CardButton from "../CardButton/CardButton";
import { CartContext } from "../../context";

type Action = "add" | "substract";

function Card({ image, name, category, price }: Dessert) {
  const updateCounter = (state: number, action: Action) => {
    if (action === "add") {
      return state + 1;
    }
    return state - 1;
  };
  const [counter, setCounter] = useReducer(updateCounter, 0);
  const cart = useContext(CartContext);
  console.log(cart)

  const handleClick = (action: Action) => {
    setCounter(action);
    console.log(counter);
    if (action === "add") {
      cart?.addItem({
        name: name,
        thumbnail: image.thumbnail,
        quantity: counter+1,
        price: price
      });
    } else {
      cart?.addItem({
        name: name,
        thumbnail: image.thumbnail,
        quantity: counter-1,
        price: price
      });
    }
  };
  return (
    <div className="card">
      <img className="card__image" src={image.desktop} alt="" />
      <CardButton counter={counter} reducer={handleClick} />

      <div className="card__body">
        <p className="card__tag">{category}</p>
        <h1 className="card__name">{name}</h1>
        <p className="card__price">${price}</p>
      </div>
    </div>
  );
}

export default Card;
