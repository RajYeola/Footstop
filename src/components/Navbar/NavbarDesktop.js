import "./Navbar.css";
import { useData } from "../../context/dataContext";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoHeartOutline, IoPersonOutline, IoFootball } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BiFootball } from "react-icons/bi";

export default function NavbarDesktop() {
  const { state } = useData();
  const { cartItems } = state;

  return (
    <div className="navbar width-100 disp-flex justify-between align-center">
      <NavLink to="/">
        <div className="logo disp-flex align-center">
          <IoFootball className="logo-football" />
          <span>Footstop</span>
        </div>
      </NavLink>
      <div className="nav-icons disp-flex justify-between">
        <div className="badge-icon">
          <NavLink
            end
            to="/product-listing"
            className="nav-1 disp-flex flex-column align-center justify-center"
            activeClassName="active-nav"
          >
            <BiFootball />
            <span className="icon-name">Products</span>
          </NavLink>
        </div>
        <div className="badge-icon">
          <NavLink
            end
            to="/wishlist"
            className="nav-1 disp-flex flex-column align-center justify-center"
            activeClassName="active-nav"
          >
            <IoHeartOutline />
            <span className="icon-name">Wishlist</span>
          </NavLink>
        </div>
        <div className="badge-icon">
          <NavLink
            end
            to="/cart"
            className="nav-1 disp-flex flex-column align-center justify-center"
            activeClassName="active-nav"
          >
            <RiShoppingCartLine />
            <span className="label label-cart">{cartItems?.length}</span>
            <span className="icon-name">Cart</span>
          </NavLink>
        </div>
        <div className="badge-icon">
          <NavLink
            end
            to="/login"
            className="nav-1 disp-flex flex-column align-center justify-center"
            activeClassName="active-nav"
          >
            <IoPersonOutline />
            <span className="icon-name">Account</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
