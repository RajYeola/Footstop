import "./Navbar.css";
import logo from "../../assets/football(32).png";

export default function HeaderMobile() {
  return (
    <div className="navbar disp-flex justify-between align-center">
      <div className="logo disp-flex align-center">
        <img src={logo} alt="logo" />
        <span>Footstop</span>
      </div>
    </div>
  );
}
