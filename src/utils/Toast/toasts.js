import "./toast.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToCartToast = () => {
  toast.success("Successfully added item to cart !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
  });
};

export const addToWishlistToast = () => {
  toast.warning("Successfully added item to wishlist !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
  });
};

export const removeFromWishlistToast = () => {
  toast.error("Removed item from wishlist !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
  });
};

export const moveToCartToast = () => {
  toast.success("Successfully moved item to cart !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
  });
};

export const removeFromCartToast = () => {
  toast.error("Removed item from cart !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
  });
};

export const moveToWishlistToast = () => {
  toast.warning("Moved item to wishlist !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
  });
};
