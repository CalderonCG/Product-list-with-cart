import { Suspense, useState } from "react";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import CardList from "./components/CardList/CardList";
import Loader from "./components/Loader/Loader";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  
  return (
    <Suspense fallback={<Loader/>}>
      <div className="container">
        <CardList />
        <div className="container__cart">
          <Cart showModal={setShowModal}/>
        </div>
        {showModal && <ConfirmModal showModal={setShowModal}/>}
      
      </div>
    </Suspense>
  );
}

export default App;
