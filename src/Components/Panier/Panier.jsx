import "./Panier.css";

import { useDispatch, useSelector } from "react-redux";
// const counter = useSelector((state) => state.panier);
// const dispatch = useDispatch();
import { delet } from "../../Features/panierSlice";
function Panier(props) {
  const panier = useSelector((state) => state.panier.panier);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>Mon Panier</h1>
        {panier.map((item) => (
          <div key={item.id} className="box">
            <img src={item.image} alt="" />
            <div className="info_box">
              <h1>{item.nom}</h1>
              <p>{item.prix}$</p>
              <p>{item.qt}</p>
              <button onClick={() => dispatch(delet(item))}>decrease 1</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Panier;
