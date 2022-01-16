export const itemInCart = (item, cartItems) => {
  return cartItems.some(({ _id: product }) => product._id === item._id);
};

export const itemInWishlist = (item, wishlistItems) => {
  return wishlistItems.some(({ _id: product }) => product._id === item._id);
};
