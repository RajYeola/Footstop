import MediaQuery from "react-responsive";
import { ProductDetailsDesktop } from "./ProductDetailsDesktop";
import { ProductDetailsMobile } from "./ProductDetailsMobile";
import "../Products.css";

export default function ProductDetails() {
  return (
    <div>
      <div>
        <MediaQuery maxDeviceWidth={768}>
          <ProductDetailsMobile />
        </MediaQuery>
        <MediaQuery minDeviceWidth={769}>
          <ProductDetailsDesktop />
        </MediaQuery>
      </div>
    </div>
  );
}
