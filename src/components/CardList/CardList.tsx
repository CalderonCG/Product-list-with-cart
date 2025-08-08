import { use } from "react"
import Card from "../Card/Card"
import './CardList.scss'
import { getDesserts, type Dessert } from "../../services/jsonService"


const dessertsPromise: Promise<Dessert[]> = getDesserts();

function CardList() {
    const desserts: Dessert[] = use(dessertsPromise);

  return (
    <div className="card-list">
      <h1>Desserts</h1>
      <div className="card-list__grid">
        {desserts.map(dessert => (
          <Card key={dessert.name} name={dessert.name} image={dessert.image} price={dessert.price} category={dessert.category}/>
        ))}
      </div>
    </div>
  )
}

export default CardList