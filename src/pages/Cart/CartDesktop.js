import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactModal from "react-modal";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  moveToWishlistToast,
  removeFromCartToast,
} from "../../utils/Toast/toasts";

ReactModal.setAppElement("#root");
export default function CartDesktop() {
  const { state, dispatch } = useData();
  const { cartItems } = state;
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <div className="view-container">
        <div className="cart-container">
          <div className="cart-products disp-flex justify-center my-1">
            {cartItems.map((item) => (
              <div className="card-horizontal my-1" key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt="" className="card-header" />
                </Link>
                <div className="card-horizontal-body">
                  <div className="card-information">
                    <h4 className="card-heading text-bold">{item.brand}</h4>
                    <Link to={`/product/${item.id}`}>
                      <p>{item.description}</p>
                    </Link>
                  </div>
                  <div className="card-update-info">
                    <div className="cart-qty">
                      <span>Qty</span>
                      <button
                        onClick={() =>
                          dispatch({ type: "INC_QUANTITY", payload: item })
                        }
                        className="inc-qty text-bold"
                      >
                        +
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() =>
                          dispatch({ type: "DEC_QUANTITY", payload: item })
                        }
                        className={`dec-qty text-bold ${
                          item.qty === 1 ? `opacity-03` : ``
                        }`}
                        disabled={item.qty === 1}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="price-info-cart-update">
                    <div className="product-saving">
                      Savings:
                      <span className="cart-total-saving-text">
                        {" "}
                        ₹
                        {Math.floor(
                          (item.price / (100 - item.discount)) * 100
                        ) - Math.floor(item.price)}
                      </span>
                    </div>
                    <div className="price-info-top">
                      <div className="original-price">
                        ₹
                        {Math.floor((item.price / (100 - item.discount)) * 100)}
                      </div>
                      <div className="discount"> ({item.discount}%) </div>
                    </div>
                    <div className="net-price">₹ {item.price}</div>
                    <div className="cart-actions">
                      <div
                        onClick={() => {
                          dispatch({ type: "REMOVE_FROM_CART", payload: item });
                          removeFromCartToast();
                        }}
                        className="btn-delete"
                      >
                        Remove
                      </div>
                      <div
                        onClick={() => {
                          dispatch({ type: "MOVE_TO_WISHLIST", payload: item });
                          moveToWishlistToast();
                        }}
                        className="btn-save-wishlist"
                      >
                        <i className="far fa-heart"></i>
                        <span>Move to Wishlist</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-place-order my-1">
            <div className="cart-place-order-container">
              <h4 className="my-05">
                Price Details ({cartItems.length}{" "}
                {cartItems.length > 1 ? "items" : "item"})
              </h4>
              <div className="cart-price-details py-05">
                <div className="disp-flex justify-between py-05">
                  <p>Total MRP</p>
                  <span>
                    ₹{" "}
                    {cartItems.reduce((acc, curr) => {
                      return Math.floor(
                        parseInt(acc) +
                          ((curr.price * curr.qty) / (100 - curr.discount)) *
                            100
                      );
                    }, 0)}
                  </span>
                </div>
                <div className="disp-flex justify-between py-05">
                  <p>Discount on MRP</p>
                  <span className="discount-price text-bold">
                    - ₹{" "}
                    {cartItems.reduce((acc, curr) => {
                      return Math.floor(
                        parseInt(acc) +
                          (((curr.price * curr.qty) / (100 - curr.discount)) *
                            100 -
                            curr.price)
                      );
                    }, 0)}
                  </span>
                </div>
              </div>
              <div className="cart-total-amount disp-flex justify-between text-bold py-05">
                <h4>Total Amount</h4>
                <span>
                  ₹{" "}
                  {cartItems.reduce((acc, curr) => {
                    return parseInt(acc) + parseInt(curr.price * curr.qty);
                  }, 0)}
                </span>
              </div>
              <button
                onClick={() => {
                  dispatch({ type: "PLACE_ORDER" });
                  setIsOpenModal(true);
                }}
                disabled={cartItems.length === 0}
                className={`btn btn-secondary btn-place-order text-uppercase text-bold my-05 ${
                  cartItems.length === 0 ? `opacity-06` : ``
                }`}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={isOpenModal}
          style={{
            content: {
              width: "25%",
              height: "200px",
              margin: "10em auto",
            },
          }}
          onRequestClose={() => setIsOpenModal(false)}
        >
          <div className="disp-flex flex-column align-center my-4">
            <TiTick className="color-success tick-icon" />
            <h2>Order Placed!</h2>
            <AiOutlineCloseCircle
              onClick={() => setIsOpenModal(false)}
              className="close-icon"
            />
          </div>
        </ReactModal>
        <ToastContainer />
      </div>
    </div>
  );
}
