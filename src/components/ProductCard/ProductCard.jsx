import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  const title = item.attributes.title.slice(0, 40) + "...";
  const img =
    process.env.REACT_APP_UPLOAD_URL +
    item.attributes?.img?.data?.attributes?.url;
  const img2 =
    process.env.REACT_APP_UPLOAD_URL +
    item.attributes?.img2?.data?.attributes?.url;

  return (
    <Link to={`/product/${item.id}`}>
      <div className="product-card">
        <div className="images">
          <img src={img} alt="" className="mainImg" />
          <img src={img2} alt="" className="secondImg" />
        </div>

        <h2 className="title">{title}</h2>
        <div className="prices">
          <h3>${item.attributes.price} </h3>
          <h3 className="oldPrice">
            ${item.attributes.oldPrice || item.attributes.price + 20}{" "}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
