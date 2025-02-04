import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import foto1 from "../../assets/fotomenu1.png";
import foto2 from "../../assets/fotomenu2.jpg";
import foto3 from "../../assets/fotomenu4.png";
import foto4 from "../../assets/fotomenu4.png";
import fotoMenu from "../../assets/imgtextcontainer.jpg";
import fotoContainer from "../../assets/papel-de-parede-patinhas.jpg";
import React, { useState } from "react";

const images = [foto1, foto2, foto3, foto4, fotoMenu, fotoContainer];

function Carrossel3d() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imgIndex, setImgIndex] = useState(0);

  const settings = {
    infinite: true, //to allow the slides to show infinitely
    lazyLoad: true,
    speed: 250, //this is the speed of slider in ms
    slidesToShow: 4, //number of slides to show up on screen
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />, //imported from 'react-icons'
    prevArrow: <PrevArrow />, //imported from 'react-icons'
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className="flex flex-col object-center ">
      <h1 className="inline-block text-3xl from-indigo-950 sm:text-3xl">
        Conheça nossa equipe:
      </h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrossel3d;
