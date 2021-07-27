import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Product/ProductDetails/ProductDetails";
import ProductListing from "./pages/Product/ProductListing/ProductListing";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";

import { useLogin } from "./context/AuthProvider";
import MediaQuery from "react-responsive";

function App() {
  const { isLoggedIn } = useLogin();

  return (
    <div className="App">
      <MediaQuery minDeviceWidth={769}>
        <NavbarDesktop />
      </MediaQuery>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <PrivateRoute path="/cart" login={isLoggedIn} element={<Cart />} />
        <PrivateRoute
          path="/wishlist"
          login={isLoggedIn}
          element={<Wishlist />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
