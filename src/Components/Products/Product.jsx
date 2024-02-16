import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Data from "../../assets/data.json";
import "./Product.css";
function Product(props) {
  const params = useParams();
  const type = params.categorie;
  const [data, setData] = useState(Data);
  const [newData, setNewData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const filterProduct = data.filter((item) => item.categorie === type);
    setNewData(filterProduct);
  }, [params, data]);
//   useEffect(() => {
//     const searchFilter = newData.filter((item) => item.nom.includes(value));
//     setSearchData(searchFilter);
//   }, [value, newData]);

  return (
    <div className="w-full">
      <h1 className="flex justify-center text-5xl my-20 ms-5">
        {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
      </h1>
      <div className="pl-14">
        {/* <h1>{value}</h1> */}
        <input
          type="text"
          className="border border-black rounded-md w-52 h-7 py-4 pl-1"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="row">
        {newData.filter((e) => e.nom.includes(value)).map((item) => (
          <div className="box">
            <Link to={`/${type}/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
            <div className="info_box">
              <h1>{item.nom}</h1>
              <p>{item.prix}$</p>
            </div>
            <div className="btn_buy">
              <button className="w-32 h-8 border border-green rounded-sm ">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
