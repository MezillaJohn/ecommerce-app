import { useState, useEffect } from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import Container from "../../Ui/Container";
import img1 from "./SliderData/dress2.jpg";
import img2 from "./SliderData/dress4.jpg";
import img3 from "./SliderData/dress3.jpg";
import img4 from "./SliderData/dress1.jpg";
import "./Slider.scss";

const sliderData = [img1, img2, img3, img4];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((currentSlide) => {
      return currentSlide === 0 ? 3 : currentSlide - 1;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide) => {
      return currentSlide === 3 ? 0 : currentSlide + 1;
    });
  };

  // auto scroll variable
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 3000;

  // render first page on browser load
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  //autoscroll animation
  const scroll = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      scroll();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide, autoScroll, slideInterval]);

  return (
    <div className="slider">
      <Container>
        <div className="slider-content">
          <h1>THE NEW WORLD OF FASHION</h1>
          <p>25% Off On All Products</p>
          <button className="btn btn--orange">Shop Now</button>
        </div>
      </Container>
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="overlay"></div>
        <img src={sliderData[0]} alt="" />
        <img src={sliderData[1]} alt="" />
        <img src={sliderData[2]} alt="" />
        <img src={sliderData[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
