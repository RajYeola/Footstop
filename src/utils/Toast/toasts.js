import "./toast.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToCartToast = () => {
  toast.success("Successfully added item to cart!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};

export const addToWishlistToast = () => {
  toast.warning("Successfully added item to wishlist!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};

export const removeFromWishlistToast = () => {
  toast.error("Removed item from wishlist!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};

export const moveToCartToast = () => {
  toast.success("Successfully moved item to cart!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};

export const removeFromCartToast = () => {
  toast.error("Removed item from cart!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};

export const moveToWishlistToast = () => {
  toast.warning("Moved item to wishlist!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 3000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};

export const invalidNameToast = () => {
  toast.error(
    "Name should be at least 3 characters long and cannot contain a number or any special character",
    {
      autoClose: 6000,
      style: {
        borderRadius: "0.5rem",
        fontWeight: "bold",
        fontFamily: "muli, sans-serif",
      },
    }
  );
};

export const invalidEmailToast = () => {
  toast.error("Invalid Email", {
    autoClose: 3000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};

export const invalidPasswordToast = () => {
  toast.error(
    "Password should contain at least one lowercase letter, one uppercase letter, one number, one special character and should be at least 8 characters long",
    {
      autoClose: 8000,
      style: {
        borderRadius: "0.5rem",
        fontWeight: "bold",
        fontFamily: "muli, sans-serif",
      },
    }
  );
};

export const invalidCredentialsToast = () => {
  toast.error("Invalid credentials", {
    autoClose: 3000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};

export const emailAlreadyExistsToast = () => {
  toast.error("Email id already exists", {
    autoClose: 4000,
    style: {
      borderRadius: "0.5rem",
      fontWeight: "bold",
      fontFamily: "muli, sans-serif",
    },
  });
};
