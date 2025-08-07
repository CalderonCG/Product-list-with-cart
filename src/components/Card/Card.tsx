
import "./Card.scss";
import add from "../../assets/icon-add-to-cart.svg";

function Card() {
  return (
    <div className="card">
      <img
        className="card__image"
        src="/src/assets/image-baklava-desktop.jpg"
        alt=""
      />
      <button className="card__button">
        <img src={add} alt="" />
        <span>Add to cart</span>
      </button>

      <div className="card__body">
        <p className="card__tag">Waffle</p>
        <h1 className="card__name">Waffle with berries</h1>
        <p className="card__price">$6.50</p>
      </div>
    </div>
  );
}

export default Card;
