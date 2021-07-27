import MediaQuery from "react-responsive";
import HeaderMobile from "../components/Navbar/HeaderMobile";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import NavbarDesktop from "../components/Navbar/NavbarDesktop";

export default function NotFound() {
  return (
    <div>
      <MediaQuery maxDeviceWidth={768}>
        <HeaderMobile />
        <NavbarMobile />
      </MediaQuery>
      <MediaQuery minDeviceWidth={769}>
        <NavbarDesktop />
      </MediaQuery>
      <div className="view-container width-100 disp-flex justify-center">
        <h1 className="my-5">Oops! Page not found!</h1>
      </div>
    </div>
  );
}
