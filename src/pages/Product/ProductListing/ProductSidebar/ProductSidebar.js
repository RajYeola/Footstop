import { useData } from "../../../../context/dataContext";

export function ProductSidebar() {
  const { state, dispatch } = useData();
  const {
    sortBy,
    showFastDelivery,
    showInventoryAll,
    priceSlider,
    categoryFilter,
    brandFilter,
  } = state;

  return (
    <div className="filters-sort-container">
      <div className="sort-container">
        <h3 className="pb-05">Sort By</h3>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY",
                    payload: "PRICE_HIGH_TO_LOW",
                  })
                }
                checked={sortBy === "PRICE_HIGH_TO_LOW"}
              />
              <span>Price - High to Low</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY",
                    payload: "PRICE_LOW_TO_HIGH",
                  })
                }
                checked={sortBy === "PRICE_LOW_TO_HIGH"}
              />
              <span>Price - Low to High</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY",
                    payload: "RELEVANCE",
                  })
                }
              />
              <span>Relevance</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="filters-container">
        <div className="disp-flex justify-between align-center pb-05">
          <h3>Filters</h3>
          <button
            onClick={() => dispatch({ type: "CLEAR_ALL" })}
            className="btn text-bold text-uppercase btn-clear-all color-secondary"
          >
            Clear All
          </button>
        </div>
        <div className="filter-container">
          <h4 className="filter-name">Delivery</h4>
          <label>
            <input
              type="checkbox"
              onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
              checked={showFastDelivery}
            />
            <span>Fast Delivery</span>
          </label>
        </div>
        <div className="filter-container">
          <h4 className="filter-name">Availability</h4>
          <label>
            <input
              type="checkbox"
              onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
              checked={showInventoryAll}
            />
            <span>Include Out of Stock</span>
          </label>
        </div>
        <div className="filter-container price-range-container">
          <h4 className="filter-name">Price Range</h4>
          <div>
            <span>₹ 249 - {priceSlider}</span>
            <input
              type="range"
              min="249"
              max="2449"
              step="100"
              value={priceSlider}
              onChange={(e) =>
                dispatch({ type: "PRICE_RANGE", payload: e.target.value })
              }
            />
          </div>
        </div>
        <div className="filter-container">
          <h4 className="filter-name">Brands</h4>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() =>
                    dispatch({ type: "BRANDS", payload: "Adidas" })
                  }
                  checked={brandFilter.some((value) => value === "Adidas")}
                />
                <span>Adidas</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => dispatch({ type: "BRANDS", payload: "Nike" })}
                  checked={brandFilter.some((value) => value === "Nike")}
                />
                <span>Nike</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="filter-container categories-container">
          <h4 className="filter-name">Categories</h4>
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "Case Cover" })
                  }
                  checked={categoryFilter.some(
                    (value) => value === "Case Cover"
                  )}
                />
                <span>Case Covers</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "Football" })
                  }
                  checked={categoryFilter.some((value) => value === "Football")}
                />
                <span>Footballs</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    dispatch({
                      type: "CATEGORY",
                      payload: "Goalie Gloves",
                    })
                  }
                  checked={categoryFilter.some(
                    (value) => value === "Goalie Gloves"
                  )}
                />
                <span>Goalie Gloves</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "Jersey" })
                  }
                  checked={categoryFilter.some((value) => value === "Jersey")}
                />
                <span>Jerseys</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "Shin Guards" })
                  }
                  checked={categoryFilter.some(
                    (value) => value === "Shin Guards"
                  )}
                />
                <span>Shin Guards</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "Shoes" })
                  }
                  checked={categoryFilter.some((value) => value === "Shoes")}
                />
                <span>Shoes</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
