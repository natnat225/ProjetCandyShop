import { useParams } from "react-router-dom";
import Data from "../../data.json";
import { useState, useEffect } from "react";
import panier from "../../assets/Panier.svg";
import "./Details.css"

function Details() {
  const params = useParams();
  const id = params.id;
  console.log(params);
  const [data, setData] = useState(Data);
  const [newData, setNewData] = useState("");
  useEffect(() => {
    const detailsProducts = data.filter((item) => item.id == id);
    setNewData(detailsProducts[0]);
  }, [params, data]);
  console.log(newData);
//   console.log(process.env);

  return (
    <div>
      <div className="container_product">
        <div className="img_product">
          <img src={newData.image} alt="" />
        </div>
        <div className="product_info">
          <p>{newData.categorie}</p>
          <p className="desc">{newData.description}</p>
          <p className="prix">{newData.prix} USD</p>
          <small>in stock ({newData.stock})</small>
          <div className="btn_panier">
            <img src={panier} width="30" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
