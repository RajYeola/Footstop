import "../Products.css";
import NavbarPLMobile from "../../../components/Navbar/NavbarPLMobile";
import ProductListingDesktop from "./ProductListingDesktop";
import ProductListingMobile from "./ProductListingMobile";
import SortFilterMobile from "../../../components/SortFilterMobile/SortFilterMobile";
import MediaQuery from "react-responsive";

export default function ProductListing() {
  return (
    <div>
      <MediaQuery maxDeviceWidth={768}>
        <NavbarPLMobile />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <ProductListingMobile />
      </MediaQuery>
      <MediaQuery minDeviceWidth={769}>
        <ProductListingDesktop />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <SortFilterMobile />
      </MediaQuery>
    </div>
  );
}
