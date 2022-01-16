import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { BiFootball } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingCartLine, RiHeartLine } from "react-icons/ri";
import { useData } from "../../context/dataContext";

export default function NavbarMobile() {
  const { state } = useData();
  const { cartItems } = state;

  return (
    <div className="mobile-nav disp-flex width-100">
      <div className="nav-1">
        <NavLink
          end
          to="/product-listing"
          className="nav-2 disp-flex flex-column justify-center align-center"
          activeClassName="active-nav"
        >
          <BiFootball className="nav-icon"></BiFootball>
          <p>Products</p>
        </NavLink>
      </div>
      <div className="nav-1">
        <NavLink
          end
          to="/wishlist"
          className="nav-2 disp-flex flex-column justify-center align-center"
          activeClassName="active-nav"
        >
          <RiHeartLine className="nav-icon"></RiHeartLine>
          <p>Wishlist</p>
        </NavLink>
      </div>
      <div className="nav-1">
        <NavLink
          end
          to="/cart"
          className="nav-2 disp-flex flex-column justify-center align-center"
          activeClassName="active-nav"
        >
          <RiShoppingCartLine className="nav-icon"></RiShoppingCartLine>
          <span className="label label-cart">{cartItems?.length}</span>
          <p>Cart</p>
        </NavLink>
      </div>
      <div className="nav-1">
        <NavLink
          end
          to="/login"
          className="nav-2 disp-flex flex-column justify-center align-center"
          activeClassName="active-nav"
        >
          <IoPersonOutline className="nav-icon"></IoPersonOutline>
          <p>Account</p>
        </NavLink>
      </div>
    </div>
  );
}
