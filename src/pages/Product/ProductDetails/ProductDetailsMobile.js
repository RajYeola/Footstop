import { useParams } from "react-router-dom";
import { useData } from "../../../context/data-context";
import NavbarPLMobile from "../../../components/Navbar/NavbarPLMobile";
import { RiHeartLine, RiShoppingCartLine } from "react-icons/ri";

export function ProductDetailsMobile() {
  const { data, dispatch } = useData();
  const { productID } = useParams();

  function getProductDetails(products, productID) {
    return products.find((product) => product.id === productID);
  }

  const product = getProductDetails(data, productID);
  const { id, image, brand, price, discount, category, inStock } = product;

  return (
    <div>
      <NavbarPLMobile />
      <div className="product-details" key={id}>
        <div className="product-details-out-of-stock">
          <img
            className={`width-100 ${inStock ? `` : `opacity-03`}`}
            src={image}
            alt={brand}
          />
          <p className={inStock ? `in-stock-text` : `out-of-stock-text`}>
            Out of Stock
          </p>
        </div>
        <div className="product-details-body px-1 py-05">
          <h2>{brand}</h2>
          <p>{category}</p>
        </div>
        <div className="product-details-price px-1 py-05">
          <span className="discount-price text-bold pr-05">
            ₹ {Math.floor(price)}
          </span>
          <span className="original-price pr-05">
            ₹ {Math.floor((price / (100 - discount)) * 100)}
          </span>
          <span className="discount text-bold">{discount}% off</span>
        </div>
        <div className="product-details-actions width-100 disp-flex justify-between">
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_WISHLIST", payload: product });
            }}
            className={`btn btn-outline-secondary disp-flex align-center justify-center ${
              inStock ? `` : `opacity-06`
            }`}
            disabled={!inStock}
          >
            <RiHeartLine />
            <span className="pl-05">Wishlist</span>
          </button>
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: product });
            }}
            className={`btn btn-secondary disp-flex align-center justify-center ${
              inStock ? `` : `opacity-06`
            }`}
            disabled={!inStock}
          >
            <RiShoppingCartLine />
            <span className="pl-05">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
