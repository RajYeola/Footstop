import { useData } from "../../context/data-context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export function WishlistMobile() {
  const { state, dispatch } = useData();
  const { wishlistItems } = state;
  return (
    <div>
      <div className="view-container">
        {wishlistItems.length !== 0 ? (
          <div className="disp-flex">
            {wishlistItems.map((item) => (
              <div className="card" key={item.id}>
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
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
                  }
                  className="card-dismiss"
                >
                  <AiOutlineCloseCircle />
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: "MOVE_TO_CART", payload: item })
                  }
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
      </div>
    </div>
  );
}
