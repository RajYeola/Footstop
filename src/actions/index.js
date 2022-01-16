import {
  fetchProducts,
  addProducttoCart,
  fetchCartItems,
  fetchWishlistItems,
  fetchUserData,
  addProducttoWishlist,
  removeProdFromCart,
  updateProdInCart,
  removeProdFromWishlist,
} from "../api/index";

export const getUserData = async () => {
  try {
    await fetchUserData();
  } catch (error) {
    console.error("Error getting user data ", error.response);
  }
};

export const getProducts = async () => {
  try {
    const {
      data: { products },
    } = await fetchProducts();

    return products;
  } catch (error) {
    console.error(error.message);
  }
};

export const getCartItems = async () => {
  try {
    const {
      data: {
        cart: { products },
      },
    } = await fetchCartItems();

    return products;
  } catch (error) {
    console.error(error.message);
  }
};

export const getWishlistItems = async () => {
  try {
    const {
      data: { wishlist },
    } = await fetchWishlistItems();

    return wishlist;
  } catch (error) {
    console.error(error.message);
  }
};

export const addProductToCart = async (product, dispatch) => {
  try {
    const response = await addProducttoCart(product);

    if (response.status === 200) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const addProductToWishlist = async (product, dispatch) => {
  try {
    const response = await addProducttoWishlist(product);

    if (response.status === 200) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const updateProductInCart = async (product, dispatch, type) => {
  try {
    const {
      _id: { _id: productID },
      qty,
    } = product;
    if (type === "increase") {
      const response = await updateProdInCart(parseInt(qty + 1), productID);
      if (response.status === 200) {
        return dispatch({ type: "INC_QUANTITY", payload: product });
      }
    } else if (type === "decrease") {
      const response = await updateProdInCart(parseInt(qty - 1), productID);
      if (response.status === 200) {
        dispatch({ type: "DEC_QUANTITY", payload: product });
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removeProductFromCart = async (product, dispatch) => {
  try {
    const {
      _id: { _id: productID },
    } = product;

    const response = await removeProdFromCart(productID);

    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const removeProductFromWishlist = async (product, dispatch) => {
  try {
    const { _id: productID } = product;

    const response = await removeProdFromWishlist(productID);

    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const moveProductToCart = async (product, dispatch) => {
  try {
    const { _id: productID } = product;

    const removeFromWishlistResponse = await removeProdFromWishlist(productID);
    const addToCartResponse = await addProducttoCart(product);

    if (
      removeFromWishlistResponse.status === 200 &&
      addToCartResponse.status === 200
    ) {
      dispatch({ type: "MOVE_TO_CART", payload: product });
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const moveProductToWishlist = async (product, dispatch) => {
  try {
    const {
      _id: { _id: productID },
    } = product;

    const removeFromCartResponse = await removeProdFromCart(productID);
    const addToWishlistResponse = await addProducttoWishlist(product);

    if (
      removeFromCartResponse.status === 200 &&
      addToWishlistResponse.status === 200
    ) {
      dispatch({ type: "MOVE_TO_WISHLIST", payload: product });
    }
  } catch (error) {
    console.error(error.message);
  }
};
