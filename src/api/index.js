const axios = require("axios");
const url = "https://footstop-api.herokuapp.com";

export const signUp = (userInfo) => axios.post(`${url}/user/signup`, userInfo);
export const signIn = (userInfo) => axios.post(`${url}/user/signin`, userInfo);
export const fetchUserData = () => axios.get(`${url}/user`);
export const fetchProducts = () => axios.get(`${url}/products`);
export const fetchCartItems = () => axios.get(`${url}/cart`);
export const fetchWishlistItems = () => axios.get(`${url}/wishlist`);
export const addProducttoCart = (product) => axios.post(`${url}/cart`, product);
export const addProducttoWishlist = (product) =>
  axios.post(`${url}/wishlist`, product);
export const updateProdInCart = (qty, productID) =>
  axios.post(`${url}/cart/${productID}`, { qty });
export const removeProdFromCart = (productID) =>
  axios.delete(`${url}/cart/${productID}`);
export const removeProdFromWishlist = (productID) =>
  axios.delete(`${url}/wishlist/${productID}`);
export const clearCart = async () => axios.delete(`${url}/cart`);
