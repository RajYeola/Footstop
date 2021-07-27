import "./Wishlist.css";
import MediaQuery from "react-responsive";
import NavbarMobile from "../../components/Navbar/NavbarMobile";
import HeaderMobile from "../../components/Navbar/HeaderMobile";
import WishlistDesktop from "./WishlistDesktop";
import { WishlistMobile } from "./WishlistMobile";

export default function Wishlist() {
  return (
    <div>
      <MediaQuery maxDeviceWidth={768}>
        <HeaderMobile />
        <WishlistMobile />
      </MediaQuery>
      <MediaQuery minDeviceWidth={769}>
        <WishlistDesktop />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <NavbarMobile />
      </MediaQuery>
    </div>
  );
}
