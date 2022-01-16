import { Link, useParams } from "react-router-dom";
import { useData } from "../../../context/dataContext";
import NavbarPLMobile from "../../../components/Navbar/NavbarPLMobile";
import { RiHeartLine, RiShoppingCartLine } from "react-icons/ri";
import { addProductToCart, addProductToWishlist } from "../../../actions";
import { itemInCart, itemInWishlist } from "../../../utils/utils";
import { useAuth } from "../../../context/authContext";

export function ProductDetailsMobile() {
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
      <div>
        <NavbarPLMobile />
        <div className="product-details" key={_id}>
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
            {token ? (
              itemInWishlist(product, wishlistItems) ? (
                <button className="btn btn-outline-secondary disp-flex align-center justify-center">
                  <Link to="/wishlist" className="color-secondary">
                    <RiHeartLine />
                    <span className="pl-05">Go to Wishlist</span>
                  </Link>
                </button>
              ) : (
                <button
                  onClick={() => {
                    addProductToWishlist(product, dispatch);
                  }}
                  className={`btn btn-outline-secondary disp-flex align-center justify-center ${
                    inStock ? `` : `opacity-06`
                  }`}
                  disabled={!inStock}
                >
                  <RiHeartLine />
                  <span className="pl-05">Wishlist</span>
                </button>
              )
            ) : (
              <button
                className={`btn btn-outline-secondary  ${
                  inStock ? `` : `opacity-06`
                }`}
                disabled={!inStock}
              >
                <Link
                  to="/login"
                  className="color-secondary disp-flex align-center justify-center"
                >
                  <RiHeartLine />
                  <span className="pl-05">Wishlist</span>
                </Link>
              </button>
            )}
            {token ? (
              itemInCart(product, cartItems) ? (
                <button className="btn btn-secondary disp-flex align-center justify-center">
                  <Link to="/cart" style={{ color: "white" }}>
                    <RiShoppingCartLine />
                    <span className="pl-05">Go to Cart</span>
                  </Link>
                </button>
              ) : (
                <button
                  onClick={() => {
                    addProductToCart(product, dispatch);
                  }}
                  className={`btn btn-secondary  ${
                    inStock ? `` : `opacity-06`
                  }`}
                  disabled={!inStock}
                >
                  <RiShoppingCartLine />
                  <span className="pl-05">Add to Cart</span>
                </button>
              )
            ) : (
              <button
                className={`btn btn-secondary  ${inStock ? `` : `opacity-06`}`}
              >
                <Link
                  to="/login"
                  className="disp-flex align-center justify-center"
                  style={{ color: "white" }}
                >
                  <RiShoppingCartLine />
                  <span className="pl-05">Add to Cart</span>
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
