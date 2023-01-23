import { useState, useEffect, React, useMemo, useRef } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./Product.scss";

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`products/${id}?populate=*`);

  const img = `${process.env.REACT_APP_UPLOAD_URL}${data.attributes?.img?.data?.attributes?.url}`;

  const img2 = `${process.env.REACT_APP_UPLOAD_URL}${data.attributes?.img2?.data?.attributes?.url}`;

  const [selectedImg, setSelectedImg] = useState(img);
  const [loadImage, setloadImage] = useState(null);

  const [quantity, setQuantity] = useState(1);

  // add item to cart handler
  // const addToCart = () => {
  //   dispatch(addToCart({}));
  // };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <a
            onClick={() => {
              setSelectedImg(img);
              setloadImage(1);
            }}
          >
            <img src={img} alt={img} />
          </a>

          <a
            onClick={() => {
              setSelectedImg(img2);
              setloadImage(1);
            }}
          >
            <img src={img2} alt={img2} />
          </a>
        </div>
        <div className="mainImg">
          <img src={loadImage ? selectedImg : img} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data.attributes?.title}</h1>
        <span className="price">${data.attributes?.price}</span>
        <p>{data.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span> {quantity} </span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          onClick={() => {
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes?.title,
                desc: data.attributes?.desc,
                price: data.attributes?.price,
                img: img,
                quantity: quantity,
              })
            );
          }}
        >
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="link">
          <FavoriteBorderIcon /> ADD TO WISH LIST
        </div>
      </div>
    </div>
  );
};

export default Product;
