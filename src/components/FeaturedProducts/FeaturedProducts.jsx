import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Ui/Card";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.scss";
import EastIcon from "@mui/icons-material/East";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import Section from "../../Ui/Section";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../Ui/Spinner";

const FeaturedProducts = ({ type, comment }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // scroll right animation
  const [size, setSize] = useState(40);

  let sizeInterval;
  const animate = true;

  const animateSize = () => {
    setSize((size) => {
      return size === 40 ? 35 : 40;
    });
  };

  // this is what is responsible for the animation
  useEffect(() => {
    if (animate) {
      sizeInterval = setInterval(animateSize, 1000);
    }
    return () => clearInterval(sizeInterval);
  }, [size]);
  ///////////////////////////////////////////

  return (
    <Section>
      <div className="app-container">
        <Card>
          <div className="wrapper">
            <div className="top">
              <div className="left">
                <h3>
                  <p>{type}</p> <span>Collection</span>
                </h3>
              </div>

              <div className="center">
                <p>{comment}</p>
              </div>

              <div className="right">
                <Link to="/store">
                  <span>View more</span>
                  <EastIcon className="east" />
                </Link>
              </div>
            </div>

            <div className="bottom">
              {error ? (
                "Something went wrong"
              ) : loading ? (
                <Spinner />
              ) : (
                data.map((item) => {
                  return <ProductCard item={item} key={item.id} />;
                })
              )}
            </div>
            <SwipeRightAltIcon
              className="slideRight"
              style={{ fontSize: `${size}px` }}
            />
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default FeaturedProducts;
