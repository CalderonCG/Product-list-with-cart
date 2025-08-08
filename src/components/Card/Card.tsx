import "./Card.scss";
import add from "../../assets/icon-add-to-cart.svg";
import type { Dessert } from "../../services/jsonService";
import { useReducer } from "react";
import CardButton from "../CardButton/CardButton";

type Action = 'add' | 'substract'

function Card({ image, name, category, price }: Dessert) {
  

  const updateCounter = (state: number, action: Action) => {
    if(action === 'add'){
      return state + 1
    }

    return state-1
  };
  const [counter, setCounter] = useReducer(updateCounter, 0);

  console.log(counter)
  return (
    <div className="card">
      <img className="card__image" src={image.desktop} alt="" />
      <CardButton counter={counter} reducer={setCounter}/>

      <div className="card__body">
        <p className="card__tag">{category}</p>
        <h1 className="card__name">{name}</h1>
        <p className="card__price">${price}</p>
      </div>
    </div>
  );
}

export default Card;
