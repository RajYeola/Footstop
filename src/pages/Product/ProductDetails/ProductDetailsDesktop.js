import { Link, useParams } from "react-router-dom";
import { useData } from "../../../context/dataContext";
import { ToastContainer } from "react-toastify";
import {
  addToCartToast,
  addToWishlistToast,
} from "../../../utils/Toast/toasts";
import { addProductToCart, addProductToWishlist } from "../../../actions";
import { itemInCart, itemInWishlist } from "../../../utils/utils";
import { useAuth } from "../../../context/authContext";

export function ProductDetailsDesktop() {
  const { state, data, dispatch } = useData();
  const { cartItems, wishlistItems } = state;
  const { productID } = useParams();
  const { token } = useAuth();

  function getProductDetails(products, productID) {
    return products.find((product) => product._id === productID);
  }

  const product = getProductDetails(data, productID);

  if (product) {
    const { _id, image, brand, price, discount, category, inStock } = product;

    return (
      <div className="product-details-container view-container py-2" key={_id}>
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
            {token ? (
              itemInCart(product, cartItems) ? (
                <Link to="/cart">
                  <button className="btn btn-secondary text-uppercase py-1 mx-05">
                    Go to Cart
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    addProductToCart(product, dispatch);
                    addToCartToast();
                  }}
                  className={`btn btn-secondary text-uppercase py-1 mx-05 ${
                    inStock ? `` : `opacity-06`
                  }`}
                  disabled={!inStock}
                >
                  Add to Cart
                </button>
              )
            ) : (
              <Link to="/login">
                <button
                  className={`btn btn-secondary text-uppercase py-1 mx-05 ${
                    inStock ? `` : `opacity-06`
                  }`}
                  disabled={!inStock}
                >
                  Add to Cart
                </button>
              </Link>
            )}

            {token ? (
              itemInWishlist(product, wishlistItems) ? (
                <Link to="/wishlist">
                  <button className="btn btn-outline-secondary text-uppercase py-1 mx-05">
                    Go to Wishlist
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    addProductToWishlist(product, dispatch);
                    addToWishlistToast();
                  }}
                  className={`btn btn-outline-secondary text-uppercase py-1 mx-05 ${
                    inStock ? `` : `opacity-06`
                  }`}
                  disabled={!inStock}
                >
                  Add to Wishlist
                </button>
              )
            ) : (
              <Link to="/login">
                <button
                  className={`btn btn-outline-secondary text-uppercase py-1 mx-05 ${
                    inStock ? `` : `opacity-06`
                  }`}
                  disabled={!inStock}
                >
                  Add to Wishlist
                </button>
              </Link>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  } else {
    return <div className="product-details-container view-container"></div>;
  }
}
