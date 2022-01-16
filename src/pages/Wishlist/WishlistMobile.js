import { useData } from "../../context/dataContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { moveProductToCart, removeProductFromWishlist } from "../../actions";
import { itemInCart } from "../../utils/utils";

export function WishlistMobile() {
  const { state, dispatch } = useData();
  const { wishlistItems, cartItems } = state;

  return (
    <div>
      <div className="view-container">
        {wishlistItems?.length !== 0 ? (
          <div className="disp-flex">
            {wishlistItems.map(({ _id: item }) => (
              <div className="card" key={item._id}>
                <img
                  src={item.image}
                  alt="card-product"
                  className="card-product-header"
                />
                <div className="card-body">
                  <div className="card-heading">{item.brand.toUpperCase()}</div>
                  <div className="card-price">
                    <span className="card-discount-price">
                      ₹ {Math.floor(item.price)}
                    </span>
                    <span className="card-original-price">
                      ₹ {Math.floor((item.price / (100 - item.discount)) * 100)}
                    </span>
                    <span className="card-discount">{item.discount}% off</span>
                  </div>
                </div>
                <div
                  onClick={() => removeProductFromWishlist(item, dispatch)}
                  className="card-dismiss"
                >
                  <AiOutlineCloseCircle />
                </div>

                {itemInCart(item, cartItems) ? (
                  <Link to="/cart">
                    {" "}
                    <button className="btn btn-icon btn-secondary my-1 mx-05">
                      Go to Cart
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => moveProductToCart(item, dispatch)}
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
      </div>
    </div>
  );
}
