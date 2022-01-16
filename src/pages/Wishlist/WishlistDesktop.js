import { useData } from "../../context/dataContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  moveToCartToast,
  removeFromWishlistToast,
} from "../../utils/Toast/toasts";
import { moveProductToCart, removeProductFromWishlist } from "../../actions";
import { itemInCart } from "../../utils/utils";

export default function WishlistDesktop() {
  const { state, dispatch } = useData();
  const { cartItems, wishlistItems } = state;

  return (
    <div className="view-container">
      {wishlistItems?.length !== 0 ? (
        <div className="wishlist-container">
          {wishlistItems.map(({ _id: item }) => (
            <div className="card mx-2 my-1" key={item._id}>
              <Link to={`/product/${item._id}`}>
                <img
                  src={item.image}
                  alt="card-product"
                  className="card-product-header"
                />
                <div className="card-body">
                  <div className="card-heading">{item.brand.toUpperCase()}</div>
                  <div className="card-price">
                    <span className="card-discount-price color-primary">
                      ₹{Math.floor(item.price)}
                    </span>
                    <span className="card-original-price">
                      ₹{Math.floor((item.price / (100 - item.discount)) * 100)}
                    </span>
                    <span className="card-discount">{item.discount}% off</span>
                  </div>
                </div>
              </Link>
              <i
                onClick={() => {
                  removeProductFromWishlist(item, dispatch);
                  removeFromWishlistToast();
                }}
                className="card-dismiss"
              >
                <AiOutlineCloseCircle />
              </i>
              {itemInCart(item, cartItems) ? (
                <button className="btn btn-icon btn-secondary my-1 mx-05">
                  <Link
                    to="/cart"
                    className="btn-go-to-cart"
                    style={{ color: "white" }}
                  >
                    Go to Cart
                  </Link>
                </button>
              ) : (
                <button
                  onClick={() => {
                    moveProductToCart(item, dispatch);
                    moveToCartToast();
                  }}
                  className="btn btn-icon btn-secondary my-1 mx-05"
                >
                  Move to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="disp-flex flex-column align-center pt-10">
          <h2>Add Items to wishlist</h2>
          <NavLink to="/product-listing">
            <button className="btn my-05">Go to Products Page</button>
          </NavLink>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
