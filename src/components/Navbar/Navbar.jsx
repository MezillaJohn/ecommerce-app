import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import "./Navbar.scss";

const Navbar = () => {
  const items = useSelector((state) => state.cart.products);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowNavMenu((showNavMenu) => !showNavMenu);
  };

  const hideNaveMenu = () => {
    setShowNavMenu(false);
  };

  const quantity = () => {
    let totalQuantity = 0;
    items.forEach((item) => (totalQuantity += item.quantity));
    return totalQuantity;
  };

  return (
    <div className="navbar">
      <div className={showNavMenu ? "wrapper show" : "wrapper"}>
        <div className="left nav-menu">
          <div className="item" onClick={hideNaveMenu}>
            <Link className="link" to="/products/women">
              Women
            </Link>
          </div>

          <div className="item" onClick={hideNaveMenu}>
            <Link className="link" to="/products/men">
              Men
            </Link>
          </div>

          <div className="item" onClick={hideNaveMenu}>
            <Link className="link" to="/products/children">
              Children
            </Link>
          </div>
        </div>
        <div className="center" onClick={hideNaveMenu}>
          <Link className="link" to="/">
            DRESSCODE
          </Link>
        </div>
        <div className="right nav-menu">
          {/* <div className="item">
            <Link className="link" to="store">
              Store
            </Link>
          </div> */}
          <div className="item" onClick={hideNaveMenu}>
            <Link className="link" to="about">
              About
            </Link>
          </div>
          <div className="item item-last" onClick={hideNaveMenu}>
            <Link className="link" to="contact">
              Contact
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderIcon />
            <Link to="/cart">
              <div className="cartIcon" onClick={hideNaveMenu}>
                <ShoppingCartOutlinedIcon />

                <span>{quantity()}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenuHandler}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
