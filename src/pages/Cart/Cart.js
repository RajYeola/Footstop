import "./Cart.css";
import MediaQuery from "react-responsive";
import NavbarMobile from "../../components/Navbar/NavbarMobile";
import HeaderMobile from "../../components/Navbar/HeaderMobile";
import CartDesktop from "./CartDesktop";
import CartMobile from "./CartMobile";

export default function Cart() {
  return (
    <div>
      <MediaQuery maxDeviceWidth={768}>
        <HeaderMobile />
        <CartMobile />
      </MediaQuery>
      <MediaQuery minDeviceWidth={769}>
        <CartDesktop />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <NavbarMobile />
      </MediaQuery>
    </div>
  );
}
