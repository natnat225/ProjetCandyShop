import React from "react";
import "./Home.css";

import data from "../../data.json";
function Home(props) {
  return (
    <>
      <div className="home_content">
        <div className="carousel_container"></div>
        <div className="title">
          <h1>
            Examine our <span id="creme">Ice cream</span>
          </h1>
          <p>
            Welcome to our product website, where we invite you to thoroughly
            examine our brand
          </p>
        </div>
        <div className="row">
          {data.map((item) => (
            <>
              {item.categorie === "glaces" && (
                <div key={item.id} className="box">
                  <img src={item.image} alt="" />
                  <div className="info_box">
                    <h1>{item.nom}</h1>
                    <p>{item.prix}$</p>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
