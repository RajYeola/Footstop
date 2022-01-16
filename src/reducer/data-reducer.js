export const initialState = {
  showInventoryAll: false,
  showFastDelivery: false,
  sortBy: null,
  categoryFilter: [],
  brandFilter: [],
  priceSlider: 2449,
  cartItems: [],
  wishlistItems: [],
};

export const dataReducer = (state, action) => {
  const {
    cartItems,
    wishlistItems,
    showFastDelivery,
    showInventoryAll,
    categoryFilter,
    brandFilter,
  } = state;

  switch (action.type) {
    case "INITIALIZE_CART":
      return { ...state, cartItems: action.payload };

    case "INITIALIZE_WISHLIST":
      return { ...state, wishlistItems: action.payload.products };

    case "ADD_TO_CART":
      const alreadyInCart = cartItems.some(
        ({ _id: item }) => item._id === action.payload._id
      );

      if (alreadyInCart) {
        return { ...state };
      } else {
        return {
          ...state,
          cartItems: cartItems.concat({ ...{ _id: action.payload }, qty: 1 }),
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: cartItems.filter((item) => item._id !== action.payload._id),
      };

    case "ADD_TO_WISHLIST":
      const alreadyInWishlist = wishlistItems.some(
        (item) => item._id === action.payload._id
      );
      if (alreadyInWishlist) {
        return { ...state };
      } else {
        return {
          ...state,
          wishlistItems: wishlistItems.concat({ _id: action.payload }),
        };
      }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: wishlistItems.filter(
          ({ _id: item }) => item._id !== action.payload._id
        ),
      };

    case "MOVE_TO_CART":
      const alreadyInCart1 = cartItems.some(
        ({ _id: item }) => item._id === action.payload._id
      );
      if (alreadyInCart1) {
        return {
          ...state,
          wishlistItems: wishlistItems.filter(
            ({ _id: item }) => item._id !== action.payload._id
          ),
        };
      } else {
        return {
          ...state,
          wishlistItems: wishlistItems.filter(({ _id: item }) => {
            return item._id !== action.payload._id;
          }),
          cartItems: cartItems.concat({ ...{ _id: action.payload }, qty: 1 }),
        };
      }

    case "MOVE_TO_WISHLIST":
      const alreadyInWishlist1 = wishlistItems.some(
        (item) => item._id === action.payload._id
      );
      if (alreadyInWishlist1) {
        return {
          ...state,
          cartItems: cartItems.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      } else {
        return {
          ...state,
          wishlistItems: wishlistItems.concat(action.payload),
          cartItems: cartItems.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      }

    case "INC_QUANTITY":
      return {
        ...state,
        cartItems: cartItems.map((item) =>
          item._id._id === action.payload._id._id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case "DEC_QUANTITY":
      return {
        ...state,
        cartItems: cartItems
          .map((item) =>
            item._id._id === action.payload._id._id
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          .filter((item) => item.qty > 0),
      };

    case "TOGGLE_INVENTORY":
      return { ...state, showInventoryAll: !showInventoryAll };

    case "TOGGLE_DELIVERY":
      return { ...state, showFastDelivery: !showFastDelivery };

    case "PRICE_RANGE":
      return { ...state, priceSlider: action.payload };

    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "CATEGORY":
      return {
        ...state,
        categoryFilter: categoryFilter.some((value) => value === action.payload)
          ? categoryFilter.filter((value) => value !== action.payload)
          : categoryFilter.concat(action.payload),
      };

    case "BRANDS":
      return {
        ...state,
        brandFilter: brandFilter.some((value) => value === action.payload)
          ? brandFilter.filter((value) => value !== action.payload)
          : brandFilter.concat(action.payload),
      };

    case "CLEAR_ALL":
      return {
        ...state,
        sortBy: null,
        showInventoryAll: false,
        showFastDelivery: false,
        categoryFilter: [],
        brandFilter: [],
        priceSlider: 1000,
      };

    case "PLACE_ORDER":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return { ...state };
  }
};
