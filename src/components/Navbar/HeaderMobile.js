import "./Navbar.css";
import { IoFootball } from "react-icons/io5";

export default function HeaderMobile() {
  return (
    <div className="navbar disp-flex justify-between align-center">
      <div className="logo disp-flex align-center">
        <IoFootball className="logo-football" />
        <span>Footstop</span>
      </div>
    </div>
  );
}
