import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { dataReducer, initialState } from "../reducer/data-reducer";
import { getCartItems, getProducts, getWishlistItems } from "../actions/index";
import { useAuth } from "./authContext";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  // const { cartItems, wishlistItems } = state;
  const [data, setData] = useState([]);
  const { token } = useAuth();

  useEffect(
    () =>
      (async () => {
        try {
          const products = await getProducts();
          setData(products);

          if (token) {
            const cart = await getCartItems();

            dispatch({ type: "INITIALIZE_CART", payload: cart });
            const wishlist = await getWishlistItems();

            dispatch({ type: "INITIALIZE_WISHLIST", payload: wishlist });
          }
        } catch (error) {
          console.error("Unable to initialize data", error.message);
        }
      })(),
    [token]
  );
  return (
    <DataContext.Provider value={{ state, dispatch, data }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};
