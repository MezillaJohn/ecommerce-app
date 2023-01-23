import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({ title, price, id, quantity, img }) => {
  const dispatch = useDispatch();
  return (
    <div key={id} className="top">
      <div className="cartItem">
        <img src={img} alt="" />
        <span> {title} </span>
      </div>

      <div className="price">
        {" "}
        <p> {`${quantity} x $${price}`} </p>
      </div>
      <div
        className="delete"
        onClick={() => {
          dispatch(removeItemFromCart(id));
        }}
      >
        <DeleteOutlineIcon />
      </div>
    </div>
  );
};

export default CartItem;
