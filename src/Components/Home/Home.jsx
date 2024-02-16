import React from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../Assets/data.json";
import { useState } from "react";



function Home() {
  const getRandomImages = () => {
    const randomImages = [];
    const shuffledData = data.sort(() => 0.5 - Math.random());
    for (let i = 0; i < 4; i++) {
      randomImages.push(<div><img src={shuffledData[i].image} alt="" /></div>);
    }
    return randomImages;
  };

  const carouselItems = getRandomImages();


  const carouselConfig = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // Number of slides to slide at once
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // Number of slides to slide at once
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // Number of slides to slide at once
      }
    },
    arrows: true,
    swipeable: true,
    draggable: true,
    showDots: true,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    customTransition: "all .5s",
    transitionDuration: 500,
    containerClass: "carousel-container",
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px"
  };


import data from "../../data.json";
function Home(props) {
  return (
    <div>
      <div className="home_content">
        <div className="flex justify-center">

        <Carousel {...carouselConfig} className="w-1/2 h-1/3 mt-32 ">{carouselItems}</Carousel>
        </div>

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
    </div>
  );
}

export default Home;
