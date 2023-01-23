import React from "react";
import Category from "../../components/Category/Category";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Contact from "../../components/Contact/Contact";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Trending" comment="The best of the best" />
      <Category />
      <FeaturedProducts type="Featured" comment="Incredible Prices" />
      <Products />
      <Contact />
    </div>
  );
};

export default Home;
