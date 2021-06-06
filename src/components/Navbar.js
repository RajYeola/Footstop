import cart from "../assets/icon-cart.png"
import wishlist from "../assets/heart.png"
import {useData} from "../context/data-context"; 

export default function Navbar() {

   const {state} = useData();

   return(
      <div>
         <div className="badge-icon">
	         <img src={wishlist} alt="wishlist"/>
	         <span className="label label-cart">{state.wishlistItems.length}</span>
         </div>
         <div className="badge-icon">
	         <img src={cart} alt="cart"/>
	         <span className="label label-cart">{state.cartItems.length}</span>
         </div>
      </div>
   )
}