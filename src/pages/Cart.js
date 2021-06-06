import { useData } from "../context/data-context";

export default function Cart() {

    const { state, dispatch } = useData();

    // console.log()
    return (
        <div>
            <h1>Cart</h1>
            <div className="disp-flex">
                {
                    state.cartItems.map(item => (
                        <div className="card mx-1 my-1" key={item.id}>
                            <img src={item.image} alt="card-product"
                                className="card-product-header" />
                            <div className="card-body">
                                <div className="card-heading">{item.brand.toUpperCase()}</div>
                                <div className="card-price">
                                    <span className="card-discount-price">{item.price}</span>
                                    <span className="card-original-price">₹450</span>
                                    <span className="card-discount">22% off</span>
                                    <span>{item.qty}</span>
                                </div>
                            </div>
                            {/* <div className="card-badge card-badge-feature">
                                FEATURED
                            </div> */}
                            <i onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: item })} className="far fa-heart card-wishlist"></i>
                            <button onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: item})} className="btn btn-icon btn-secondary my-1 mx-05">
                                Remove from Cart
                            </button>
                            <button onClick={() => dispatch({type: "INC_QUANTITY", payload: item})} className="btn btn-icon btn-secondary my-1 mx-05">
                                +
                            </button>
                            <button onClick={() => dispatch({type: "DEC_QUANTITY", payload: item})} className="btn btn-icon btn-secondary my-1 mx-05">
                                -
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}