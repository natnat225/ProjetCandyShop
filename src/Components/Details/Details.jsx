import { useParams } from "react-router-dom";
import Data from "../../Assets/data.json";
import { useState, useEffect } from "react";

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

  return (
    <div>
      <div>
        <p>{newData.nom}</p>
        <p>{newData.description}</p>
        <img src={newData.image} alt="" />
      </div>
    </div>
  );
}

export default Details;
