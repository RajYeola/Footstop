export const initialState = {
   cartItems : [],
   wishlistItems : []
} 

export const dataReducer = (state, action) => {

   switch (action.type) {
      case "ADD_TO_CART":
         const alreadyInCart = state.cartItems.some(item => item.id === action.payload.id)
         if (alreadyInCart) {
            return { ...state }
         } else {
            return {
               ...state, cartItems: state.cartItems.concat({ ...action.payload, qty: 1 })
            }
         };
      case "REMOVE_FROM_CART":
         return {
            ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
         }
      case "ADD_TO_WISHLIST":
         const alreadyInWishlist = state.wishlistItems.some(item => item.id === action.payload.id)
         if (alreadyInWishlist) {
            return { ...state };
         } else {
            return { ...state, wishlistItems: state.wishlistItems.concat(action.payload) };
         }
      case "REMOVE_FROM_WISHLIST":
         return { ...state, wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload.id) }
      case "INC_QUANTITY":
         return { ...state, cartItems: state.cartItems.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) }
      case "DEC_QUANTITY":
         return { ...state, cartItems: state.cartItems.map(item => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item).filter(item => item.qty > 0) }
      default:
         return { ...state };
   }
}