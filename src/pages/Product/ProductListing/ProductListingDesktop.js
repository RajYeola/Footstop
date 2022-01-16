import { useData } from "../../../context/dataContext";
import { useAuth } from "../../../context/authContext";
import { ProductSidebar } from "./ProductSidebar/ProductSidebar";
import { RiShoppingCartLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  addToCartToast,
  addToWishlistToast,
  removeFromWishlistToast,
} from "../../../utils/Toast/toasts";
import {
  addProductToCart,
  addProductToWishlist,
  removeProductFromWishlist,
} from "../../../actions/index";
import { itemInCart, itemInWishlist } from "../../../utils/utils";

export default function ProductListingDesktop() {
  // const navigate = useNavigate();
  const { state, dispatch, data } = useData();
  const { token } = useAuth();
  const {
    sortBy,
    showFastDelivery,
    showInventoryAll,
    priceSlider,
    categoryFilter,
    brandFilter,
    wishlistItems,
    cartItems,
  } = state;

  const getSortedData = (products, sortBy) => {
    const productList = [...products];

    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
  };

  const getFilteredData = (
    products,
    {
      showInventoryAll,
      showFastDelivery,
      priceSlider,
      categoryFilter,
      brandFilter,
    }
  ) => {
    products = products
      .filter(({ inStock }) => (showInventoryAll ? true : inStock))
      .filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true))
      .filter(({ price }) => price <= Number(priceSlider));
    if (categoryFilter?.length > 0) {
      products = products.filter(({ category }) =>
        categoryFilter.includes(category)
      );
    }
    if (brandFilter?.length > 0) {
      products = products.filter(({ brand }) => brandFilter.includes(brand));
    }
    return products;
  };

  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showInventoryAll,
    showFastDelivery,
    priceSlider,
    categoryFilter,
    brandFilter,
  });

  return (
    <div>
      {filteredData?.length === 0 ? (
        <div className="products-page-container disp-flex width-100">
          <ProductSidebar />
          <div className="disp-flex flex-column unavailable-text text-center">
            <h2>No products available</h2>
            <h3>Please change the filters</h3>
          </div>
        </div>
      ) : (
        <div className="products-page-container disp-flex width-100">
          <ProductSidebar />
          <div className="products-container">
            {filteredData.map((item) => (
              <div className="card mx-1 my-1" key={item._id}>
                <div className={`${item.inStock ? `` : `card-out-of-stock`}`}>
                  <Link to={`/product/${item._id}`}>
                    <div key={item._id}>
                      <img
                        src={item.image}
                        alt="card-product"
                        className="card-product-header"
                      />
                      <div className="card-body">
                        <div className="card-heading">
                          {item.brand.toUpperCase()}
                        </div>
                        <div className="card-description">{item.category}</div>
                        <div className="card-price">
                          <span className="card-discount-price">
                            ₹{Math.floor(item.price)}
                          </span>
                          <span className="card-original-price">
                            ₹
                            {Math.floor(
                              (item.price / (100 - item.discount)) * 100
                            )}
                          </span>
                          <span className="card-discount">
                            {item.discount}% off
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {wishlistItems && itemInWishlist(item, wishlistItems) ? (
                    <RiHeartFill
                      className="card-wishlist"
                      onClick={() => {
                        removeProductFromWishlist(item, dispatch);
                        removeFromWishlistToast();
                      }}
                    />
                  ) : token ? (
                    <button className="card-wishlist" disabled={!item.inStock}>
                      <RiHeartLine
                        onClick={() => {
                          if (item.inStock) {
                            addProductToWishlist(item, dispatch);
                            addToWishlistToast();
                          }
                        }}
                      />
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="card-wishlist">
                        <RiHeartLine />
                      </button>
                    </Link>
                  )}
                  {/* {console.log(item.inStock)} */}
                  {cartItems && itemInCart(item, cartItems) ? (
                    <Link to="/cart">
                      <button className="btn btn-icon btn-secondary my-1 mx-05 btn-go-to-cart">
                        <RiShoppingCartLine />
                        <span>Go to Cart</span>
                      </button>
                    </Link>
                  ) : token ? (
                    <button
                      onClick={() => {
                        addProductToCart(item, dispatch);
                        addToCartToast();
                      }}
                      className="btn btn-icon btn-secondary my-1 mx-05"
                      disabled={!item.inStock}
                    >
                      <RiShoppingCartLine /> <span>Add to Cart</span>
                    </button>
                  ) : (
                    <Link to="/login">
                      <button
                        className="btn btn-icon btn-secondary my-1 mx-05"
                        disabled={!item.inStock}
                      >
                        <RiShoppingCartLine /> <span>Add to Cart</span>
                      </button>
                    </Link>
                  )}
                </div>
                <div
                  className={
                    item.inStock ? `in-stock-text` : `out-of-stock-text`
                  }
                >
                  Out of Stock
                </div>
              </div>
            ))}
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
}
