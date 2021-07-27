import "./home.css";
import MediaQuery from "react-responsive";
import NavbarMobile from "../../components/Navbar/NavbarMobile";
import HeaderMobile from "../../components/Navbar/HeaderMobile";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-container view-container width-100">
        <MediaQuery maxDeviceWidth={769}>
          <HeaderMobile />
        </MediaQuery>
        <div className="overlay-text disp-flex flex-column align-center justify-center">
          <h1 className="slide-in-left">Welcome to Footstop</h1>
          <h2 className="slide-in-right pb-05">
            One stop store for all the football lovers out there!
          </h2>
          <button
            className="btn text-uppercase slide-in-bottom py-1 px-5"
            onClick={() => navigate("/product-listing")}
          >
            Shop Now
          </button>
        </div>
        <MediaQuery maxDeviceWidth={768}>
          <NavbarMobile />
        </MediaQuery>
      </div>
    </div>
  );
}
