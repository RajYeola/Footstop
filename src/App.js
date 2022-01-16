import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
// import Cart from "./pages/Cart/Cart";
// import Wishlist from "./pages/Wishlist/Wishlist";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
// import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
// import ProductDetails from "./pages/Product/ProductDetails/ProductDetails";
// import ProductListing from "./pages/Product/ProductListing/ProductListing";
import { lazy, Suspense } from "react";
import { useAuth } from "./context/authContext";
import MediaQuery from "react-responsive";
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const ProductDetails = lazy(() =>
  import("./pages/Product/ProductDetails/ProductDetails")
);
const ProductListing = lazy(() =>
  import("./pages/Product/ProductListing/ProductListing")
);
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <MediaQuery minDeviceWidth={769}>
        <NavbarDesktop />
      </MediaQuery>

      <Suspense
        fallback={
          <div className="view-container pt-10 disp-flex justify-center align-center">
            <FaSpinner className="spin fs-spinner" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productID" element={<ProductDetails />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <PrivateRoute path="/cart" login={isLoggedIn} element={<Cart />} />
          <PrivateRoute
            path="/wishlist"
            login={isLoggedIn}
            element={<Wishlist />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
