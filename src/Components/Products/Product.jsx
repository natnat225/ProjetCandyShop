import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Data from "../../assets/data.json";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { add } from "../../Features/panierSlice";
import { compose } from "@reduxjs/toolkit";

function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier);
  const total = useSelector((state) => state.panier.total);
  const type = params.categorie;
  const [data, setData] = useState(Data);
  const [newData, setNewData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const filterProduct = data.filter((item) => item.categorie === type);
    setNewData(filterProduct);
  }, [params, data]);

  console.log(panier.panier);
  // console.log(data);
  console.log(total);

  return (
    <div className="w-full">
      <h1 className="flex justify-center text-5xl my-20 ms-5">
        Our
        {" " + type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() + " "}
        products
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
        {newData
          .filter((e) => e.nom.toLowerCase().includes(value.toLowerCase()))
          .map((item) => (
            <div className="box" key={item.id}>
              <Link to={`/${type}/${item.id}`}>
                <img src={item.image} alt="" />
              </Link>
              <div className="info_box">
                <h1>{item.nom}</h1>
                <p>{item.prix}$</p>
              </div>
              <div className="btn_buy">
                <button
                  onClick={() => dispatch(add(item))}
                  className="w-32 h-8 border border-green rounded-sm "
                >
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
