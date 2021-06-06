import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductListing from "./pages/ProductListing";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <nav>
        <Link to="/wishlist">Wishlist</Link> ---
        <Link to="/cart">Cart</Link> ---
        <Link to="/login">Login</Link> ---
        <Link to="/product-listing">ProductListing</Link> ---
        <Link to="/category">Categories</Link> ---
        <Link to="/">Home</Link> 
      </nav>
      <Routes>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/product-details/:productID" element={<ProductDetails />}/>
        <Route path="/product-listing" element={<ProductListing />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
      </Routes>
    </div>
  );
}

export default App;
