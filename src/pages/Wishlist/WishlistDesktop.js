import { useData } from "../../context/data-context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  moveToCartToast,
  removeFromWishlistToast,
} from "../../utils/Toast/toasts";

export default function WishlistDesktop() {
  const { state, dispatch } = useData();
  const { wishlistItems } = state;

  return (
    <div className="view-container">
      {wishlistItems.length !== 0 ? (
        <div className="wishlist-container">
          {wishlistItems.map((item) => (
            <div className="card mx-2 my-1" key={item.id}>
              <img
                src={item.image}
                alt="card-product"
                className="card-product-header"
              />
              <div className="card-body">
                <div className="card-heading">{item.brand.toUpperCase()}</div>
                <div className="card-price">
                  <span className="card-discount-price">
                    ₹{Math.floor(item.price)}
                  </span>
                  <span className="card-original-price">
                    ₹{Math.floor((item.price / (100 - item.discount)) * 100)}
                  </span>
                  <span className="card-discount">{item.discount}% off</span>
                </div>
              </div>
              <i
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
                  removeFromWishlistToast();
                }}
                className="card-dismiss"
              >
                <AiOutlineCloseCircle />
              </i>
              <button
                onClick={() => {
                  dispatch({ type: "MOVE_TO_CART", payload: item });
                  moveToCartToast();
                }}
                className="btn btn-icon btn-secondary my-1 mx-05"
              >
                Move to Cart
              </button>
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
