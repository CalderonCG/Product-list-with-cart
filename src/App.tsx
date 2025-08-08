import { Suspense, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
import CardList from "./components/CardList/CardList";
import Loader from "./components/Loader/Loader";

function App() {
  const [Desserts, setDesserts] = useState<dessert[]>([]);

  type dessert = {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };

  const getData = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    console.log(data);
    setDesserts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Suspense fallback={<Loader/>}>
      <div className="container">
        <CardList />
        <div className="container__cart">
          <Cart />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
