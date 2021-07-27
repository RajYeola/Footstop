import MediaQuery from "react-responsive";
import { ProductListingDesktop } from "./ProductDetailsDesktop";
import { ProductListingMobile } from "./ProductDetailsMobile";
import "../Products.css";

export default function ProductDetails() {
  return (
    <div>
      <div>
        <MediaQuery maxDeviceWidth={768}>
          <ProductListingMobile />
        </MediaQuery>
        <MediaQuery minDeviceWidth={769}>
          <ProductListingDesktop />
        </MediaQuery>
      </div>
    </div>
  );
}
