import { useData } from "../../../context/data-context";
import { RiShoppingCartLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ProductListingMobile() {
  const { state, dispatch, data } = useData();
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
      .filter(({ price }) => price < Number(priceSlider));
    if (categoryFilter.length > 0) {
      products = products.filter((product) =>
        categoryFilter.includes(product.category)
      );
    }
    if (brandFilter.length > 0) {
      products = products.filter((product) =>
        brandFilter.includes(product.brand)
      );
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
      {filteredData.length === 0 ? (
        <div className="products-container">
          <div className="disp-flex flex-column unavailable-text text-center">
            <h4>No products available</h4>
            <h4>Please change the filters</h4>
          </div>
        </div>
      ) : (
        <div className="products-container">
          {filteredData.map((item) => (
            <div className="card" key={item.id}>
              <div className={`${item.inStock ? `` : `card-out-of-stock`}`}>
                <Link to={`/product/${item.id}`}>
                  <div key={item.id}>
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
                          ₹ {Math.floor(item.price)}
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
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: item })
                  }
                  className="btn btn-icon btn-secondary"
                  disabled={!item.inStock}
                >
                  <RiShoppingCartLine />{" "}
                  {cartItems.some(({ id }) => item.id === id) ? (
                    <Link className="btn-go-to-cart" to="/cart">
                      Go to Cart
                    </Link>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button>
                {wishlistItems.some(({ id }) => item.id === id) ? (
                  <RiHeartFill
                    className="card-wishlist"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
                    }
                  />
                ) : (
                  <button disabled={!item.inStock} className="card-wishlist">
                    <RiHeartLine
                      onClick={() =>
                        dispatch({ type: "ADD_TO_WISHLIST", payload: item })
                      }
                    />
                  </button>
                )}
              </div>
              <div
                className={item.inStock ? `in-stock-text` : `out-of-stock-text`}
              >
                Out of Stock
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
