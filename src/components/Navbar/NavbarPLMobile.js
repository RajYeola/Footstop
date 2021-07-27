import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoHeartOutline, IoPersonOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { useData } from "../../context/data-context";

export default function NavbarPLMobile() {
  const { state } = useData();
  const { cartItems } = state;

  return (
    <div className="products-navbar width-100 disp-flex justify-between align-center">
      <div className="logo">
        <span>Footstop</span>
      </div>
      <div className="nav-icons disp-flex align-center">
        <div className="badge-icon">
          <NavLink end to="/login" className="nav-1">
            <IoPersonOutline />
          </NavLink>
        </div>
        <div className="badge-icon">
          <NavLink end to="/wishlist" className="nav-1">
            <IoHeartOutline />
          </NavLink>
        </div>
        <div className="badge-icon">
          <NavLink end to="/cart" className="nav-1">
            <RiShoppingCartLine />
            <span className="label label-cart disp-flex align-center justify-center">
              {cartItems.length}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
