import { useData } from "../../context/data-context";
import "./SortFilterMobile.css";
import { IoFilterOutline } from "react-icons/io5";
import { BiSort } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function SortFilterMobile() {
  const { state, dispatch } = useData();
  const {
    sortBy,
    brandFilter,
    categoryFilter,
    showInventoryAll,
    showFastDelivery,
    priceSlider,
  } = state;

  const [sortModal, showSortModal] = useState(false);
  const [filterModal, showFilterModal] = useState(false);

  return (
    <div>
      <div className="sort-filter-comp width-100 disp-flex align-center text-uppercase text-bold">
        <div
          className="sort-comp disp-flex align-center"
          onClick={() => showSortModal((sortModal) => !sortModal)}
        >
          <BiSort className="comp-icon" />
          <span className="comp-name text-uppercase">Sort</span>
        </div>
        {sortModal && (
          <div
            className="modal-close-container"
            onClick={() => showSortModal((sortModal) => !sortModal)}
          >
            <div
              className="modal sort-modal width-100"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-bold">Sort By</h3>
              <span
                className="close-button"
                onClick={() => showSortModal((sortModal) => !sortModal)}
              >
                <AiOutlineClose />
              </span>
              <ul className="px-05">
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
          </div>
        )}
        <div
          className="filter-comp disp-flex align-center"
          onClick={() => showFilterModal((filterModal) => !filterModal)}
        >
          <IoFilterOutline className="comp-icon" />
          <span className="comp-name text-uppercase">Filters</span>
        </div>
        {filterModal && (
          <div
            className="modal-close-container"
            onClick={() => {
              showFilterModal((filterModal) => !filterModal);
            }}
          >
            <div
              className="modal filter-modal width-100"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="disp-flex justify-between">
                <h3 className="text-bold">Filter</h3>
                <button
                  onClick={() => dispatch({ type: "CLEAR_ALL" })}
                  className="btn text-uppercase text-bold color-secondary btn-clear-all"
                >
                  Clear All
                </button>
              </div>
              <span
                className="close-button"
                onClick={() => showFilterModal((filterModal) => !filterModal)}
              >
                <AiOutlineClose />
              </span>
              <ul>
                <li className="filter-div py-1">
                  <h4 className="filter-name text-bold">Delivery</h4>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
                      checked={showFastDelivery}
                    />
                    <span>Fast Delivery</span>
                  </label>
                </li>
                <li className="filter-div py-1">
                  <h4 className="filter-name text-bold">Availability</h4>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
                      checked={showInventoryAll}
                    />
                    <span>Include Out of Stock</span>
                  </label>
                </li>
                <li className="filter-div filter-price-range py-1">
                  <h4 className="filter-name text-bold">Price Range</h4>
                  <div className="disp-flex align-center">
                    <span>₹ 0 - {priceSlider}</span>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="100"
                      value={priceSlider}
                      onChange={(e) =>
                        dispatch({
                          type: "PRICE_RANGE",
                          payload: e.target.value,
                        })
                      }
                    />
                  </div>
                </li>
                <li className="filter-div filter-brands py-1">
                  <h4 className="filter-name text-bold">Brands</h4>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          onChange={() =>
                            dispatch({ type: "BRANDS", payload: "Adidas" })
                          }
                          checked={brandFilter.some(
                            (value) => value === "Adidas"
                          )}
                        />
                        <span>Adidas</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          onChange={() =>
                            dispatch({ type: "BRANDS", payload: "Nike" })
                          }
                          checked={brandFilter.some(
                            (value) => value === "Nike"
                          )}
                        />
                        <span>Nike</span>
                      </label>
                    </li>
                  </ul>
                </li>
                <li className="filter-div filter-categories py-1">
                  <h4 className="filter-name text-bold">Categories</h4>
                  <ul>
                    <li>
                      <label>
                        <input
                          type="checkbox"
                          name="category"
                          onChange={() =>
                            dispatch({
                              type: "CATEGORY",
                              payload: "Case Cover",
                            })
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
                          checked={categoryFilter.some(
                            (value) => value === "Football"
                          )}
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
                          checked={categoryFilter.some(
                            (value) => value === "Jersey"
                          )}
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
                            dispatch({
                              type: "CATEGORY",
                              payload: "Shin Guards",
                            })
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
                          checked={categoryFilter.some(
                            (value) => value === "Shoes"
                          )}
                        />
                        <span>Shoes</span>
                      </label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
