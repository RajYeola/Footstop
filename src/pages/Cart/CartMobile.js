import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import ReactModal from "react-modal";

export default function CartMobile() {
  const { state, dispatch } = useData();
  const { cartItems } = state;
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="view-container">
      <div className="cart-information-mobile disp-flex justify-between py-1 px-1 text-bold">
        <h4 className="text-uppercase">
          {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
        </h4>
        <span>
          Total: ₹{" "}
          {cartItems.reduce((acc, curr) => {
            return parseInt(acc) + parseInt(curr.price * curr.qty);
          }, 0)}
        </span>
      </div>
      <div>
        {cartItems.map((item) => (
          <div className="card-horizontal-mobile">
            <div className="card-horizontal-body-mobile disp-flex">
              <Link to={`/product/${item.id}`} className="card-header-mobile">
                <img src={item.image} alt="" />
              </Link>
              <div className="card-information-update-info">
                <div className="card-information-mobile">
                  <h4 className="card-heading-mobile text-bold">
                    {item.brand}
                  </h4>
                  <Link to={`/product/${item.id}`}>
                    <p>{item.description}</p>
                  </Link>
                </div>
                <div className="card-update-info-mobile">
                  <div className="cart-qty-mobile">
                    <span>Qty: </span>
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
                <div className="price-info-cart-update-mobile disp-flex">
                  <div className="net-price-mobile text-bold">
                    ₹ {item.price * item.qty}
                  </div>
                  <div className="original-price-mobile">
                    ₹{" "}
                    {Math.floor(
                      ((item.price * item.qty) / (100 - item.discount)) * 100
                    )}
                  </div>
                  <div className="discount-mobile text-bold">
                    {" "}
                    {item.discount}%{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-actions-mobile disp-flex justify-between text-uppercase">
              <div
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item })
                }
                className="btn-delete"
              >
                Remove
              </div>
              <div
                onClick={() =>
                  dispatch({ type: "MOVE_TO_WISHLIST", payload: item })
                }
                className="btn-save-wishlist"
              >
                <span>Move to Wishlist</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-place-order-mobile px-1">
        <h4 className="py-05">
          Price Details ({cartItems.length}{" "}
          {cartItems.length > 1 ? "items" : "item"})
        </h4>
        <div className="cart-price-details-mobile py-05">
          <div className="disp-flex justify-between pb-05">
            <p>Total MRP</p>
            <span>
              ₹{" "}
              {cartItems.reduce((acc, curr) => {
                return Math.floor(
                  parseInt(acc) +
                    ((curr.price * curr.qty) / (100 - curr.discount)) * 100
                );
              }, 0)}
            </span>
          </div>
          <div className="disp-flex justify-between">
            <p>Discount on MRP</p>
            <span className="discount-price text-bold">
              - ₹{" "}
              {cartItems.reduce((acc, curr) => {
                return Math.floor(
                  parseInt(acc) +
                    (((curr.price * curr.qty) / (100 - curr.discount)) * 100 -
                      curr.price)
                );
              }, 0)}
            </span>
          </div>
        </div>
        <div className="total-amount-mobile disp-flex justify-between text-bold py-05">
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
            setIsOpenModal(true);
            cartItems.length = 0;
          }}
          className={`btn btn-secondary btn-place-order text-uppercase text-bold ${
            cartItems.length === 0 ? `opacity-06` : ``
          }`}
          disabled={cartItems.length === 0}
        >
          Place Order
        </button>
      </div>
      <ReactModal
        isOpen={isOpenModal}
        style={{
          content: {
            width: "80%",
            height: "150px",
            margin: "10em auto",
          },
        }}
        onRequestClose={() => setIsOpenModal(false)}
      >
        <div className="disp-flex flex-column align-center">
          <TiTick className="color-success tick-icon" />
          <h2>Order Placed!</h2>
          <AiOutlineCloseCircle
            onClick={() => setIsOpenModal(false)}
            className="close-icon"
          />
        </div>
      </ReactModal>
    </div>
  );
}

//no. of items
//amount
// render the items (card styling)
//no. of item
// total mrp
// discount on mrp
// total amount
// place order btn
