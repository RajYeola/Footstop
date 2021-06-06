import { useData } from "../context/data-context";
import { AiOutlineDelete } from 'react-icons/ai';
import { RiShoppingCartLine } from "react-icons/ri";

export default function Wishlist() {

    const { state, dispatch } = useData()

    return (
        <div>
            <h1>Wishlist</h1>
            <div className="disp-flex">
                {
                    state.wishlistItems.map(item => (
                        <div className="card mx-1 my-1" key={item.id}>
                            <img src={item.image} alt="card-product"
                                className="card-product-header" />
                            <div className="card-body">
                                <div className="card-heading">{item.brand.toUpperCase()}</div>
                                <div className="card-price">
                                    <span className="card-discount-price">{item.price}</span>
                                    <span className="card-original-price">₹450</span>
                                    <span className="card-discount">22% off</span>
                                </div>
                            </div>
                            {/* <div className="card-badge card-badge-feature">
              FEATURED
            </div> */}
                            <i onClick={() => dispatch({type : "REMOVE_FROM_WISHLIST", payload: item}) }><AiOutlineDelete/></i>
                            <button onClick={() => dispatch({type : "ADD_TO_CART", payload: item})} className="btn btn-icon btn-secondary my-1 mx-05">
                                <RiShoppingCartLine />Add to Cart
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}