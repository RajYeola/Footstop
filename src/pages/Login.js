import "../App.css";
import React, { useState } from "react";
// import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import MediaQuery from "react-responsive";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import HeaderMobile from "../components/Navbar/HeaderMobile";
import { useData } from "../context/dataContext";

export default function Login() {
  const { isLoggedIn, signup, signin, signout } = useAuth();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  // const navigate = useNavigate();
  const { state: _state } = useData();
  const { cartItems, wishlistItems } = _state;

  const handleUserInfoData = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="pos-rel">
      <MediaQuery maxDeviceWidth={769}>
        <HeaderMobile />
      </MediaQuery>
      <div className="view-container pt-9 disp-flex flex-column align-center">
        {isLoggedIn ? (
          <h1>You are Signed in</h1>
        ) : (
          <div className="account-actions-container disp-flex flex-column width-100 align-center">
            <h1 className="my-05 color-primary">
              {isSignup ? "Sign Up" : "Sign In"}
            </h1>
            {isSignup && (
              <input
                type="text"
                name="name"
                className="input-basic my-05 input-name"
                placeholder="Name"
                onChange={handleUserInfoData}
              />
            )}
            <input
              type="email"
              name="email"
              className="input-basic my-05 input-email"
              placeholder="Email"
              onChange={handleUserInfoData}
            />
            <div className="disp-flex flex-column input-password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input-basic my-05 width-100"
                placeholder="Password"
                onChange={handleUserInfoData}
              />
              <label className="mt-05">
                <input
                  type="checkbox"
                  onChange={() => setShowPassword((prev) => !prev)}
                />
                <span className="pl-05">Show Password</span>
              </label>
            </div>
          </div>
        )}

        <button
          className={`btn my-05 btn-login ${
            isLoggedIn ? `btn-danger` : `btn-success`
          }`}
          onClick={() => {
            if (isLoggedIn) {
              signout();
              cartItems.length = 0;
              wishlistItems.length = 0;
            } else if (isSignup) {
              signup(userInfo);
            } else {
              signin(userInfo);
            }
          }}
        >
          {isLoggedIn ? "SIGN OUT" : isSignup ? "SIGN UP" : "SIGN IN"}
        </button>
        {!isLoggedIn && (
          <button
            className="btn text-uppercase my-05"
            onClick={() => setIsSignup((prev) => !prev)}
          >
            {isSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        )}
      </div>
      <MediaQuery maxDeviceWidth={768}>
        <NavbarMobile />
      </MediaQuery>
    </div>
  );
}
