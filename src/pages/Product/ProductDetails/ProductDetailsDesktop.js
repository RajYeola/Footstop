import { useParams } from "react-router-dom";
import { useData } from "../../../context/data-context";
import { ToastContainer } from "react-toastify";
import {
  addToCartToast,
  addToWishlistToast,
} from "../../../utils/Toast/toasts";

export function ProductDetailsDesktop() {
  const { data, dispatch } = useData();
  const { productID } = useParams();

  function getProductDetails(products, productID) {
    return products.find((product) => product.id === productID);
  }

  const product = getProductDetails(data, productID);
  const { id, image, brand, price, discount, category, inStock } = product;

  return (
    <div className="product-details-container view-container py-2" key={id}>
      <div className="product-details-out-of-stock">
        <img
          src={image}
          className={`${inStock ? `` : `opacity-03`}`}
          alt={brand}
        />
        <p className={`${inStock ? `in-stock-text` : `out-of-stock-text`}`}>
          Out of Stock
        </p>
      </div>
      <div className="product-details-body px-5 py-1">
        <div className="product-details-title py-5 px-05">
          <h2>{brand}</h2>
          <p>{category}</p>
        </div>
        <div className="product-details-price py-5 px-05">
          <span className="discount-price">₹{Math.floor(price)}</span>
          <span className="original-price">
            ₹{Math.floor((price / (100 - discount)) * 100)}
          </span>
          <span className="discount">{discount}% off</span>
        </div>
        <div className="py-5 px-05">
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: product });
              addToCartToast();
            }}
            className={`btn btn-secondary text-uppercase py-1 mx-05 ${
              inStock ? `` : `opacity-06`
            }`}
            disabled={!inStock}
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_WISHLIST", payload: product });
              addToWishlistToast();
            }}
            className={`btn btn-outline-secondary text-uppercase py-1 mx-05 ${
              inStock ? `` : `opacity-06`
            }`}
            disabled={!inStock}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
