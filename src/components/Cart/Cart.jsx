import Card from "../../Ui/Card";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalAmount = () => {
    let amount = 0;
    products.forEach((item) => (amount = +item.quantity * item.price));
    return amount.toFixed(2);
  };

  const checkoutHandler = () => {};

  return (
    <div className="cart">
      <div className="top"></div>
      <div className="bottom">
        <div className="left">
          <Card>
            {products.length === 0 ? (
              <h2>Your Cart is empty</h2>
            ) : (
              <h2>Cart (1)</h2>
            )}

            <div className="left__wrapper">
              {products.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    id={item.id}
                    img={item.img}
                    products={products}
                  />
                );
              })}

              <div
                className="bottom"
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                {products.length === 0 ? (
                  ""
                ) : (
                  <div className="remove">Clear all...</div>
                )}
              </div>
            </div>
          </Card>
        </div>
        <div className="right">
          <Card>
            <div className="top">
              <h2>Cart summary</h2>
            </div>
            <div className="center">
              <span>Subtotal</span>
              <p> {`$${totalAmount()}`} </p>
            </div>
            <div className="bottom">
              <Link to="/checkout">
                <button className="cartButton">
                  {" "}
                  {`CHECKOUT $${totalAmount()}`}
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
