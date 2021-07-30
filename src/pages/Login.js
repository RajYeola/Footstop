import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../context/AuthProvider";
import MediaQuery from "react-responsive";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import HeaderMobile from "../components/Navbar/HeaderMobile";
import { useData } from "../context/data-context";

export default function Login() {
  const { isLoggedIn, setIsLoggedIn, loginWithUserCredentials } = useLogin();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { state: _state } = useData();
  const { cartItems, wishlistItems } = _state;

  return (
    <div className="pos-rel">
      <MediaQuery maxDeviceWidth={769}>
        <HeaderMobile />
      </MediaQuery>
      <div className="view-container pt-10 disp-flex flex-column align-center">
        {isLoggedIn ? (
          <h1>You are Logged in</h1>
        ) : (
          <div className="account-actions-container disp-flex flex-column width-100 align-center">
            <input
              type="email"
              className="input-basic my-05 input-email"
              placeholder="Email"
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <div className="disp-flex flex-column input-password">
              <input
                type={showPassword ? "text" : "password"}
                className="input-basic my-05 width-100"
                placeholder="Password"
                onChange={(e) => setPasswordInput(e.target.value)}
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
          className={`btn my-05 ${isLoggedIn ? `btn-danger` : `btn-success`}`}
          onClick={() => {
            if (isLoggedIn) {
              setIsLoggedIn(false);
              navigate("/");
              cartItems.length = 0;
              wishlistItems.length = 0;
              localStorage.removeItem("login");
            } else {
              loginWithUserCredentials(emailInput, passwordInput);
            }
          }}
        >
          {isLoggedIn ? "logout" : "login"}
        </button>
      </div>
      <MediaQuery maxDeviceWidth={768}>
        <NavbarMobile />
      </MediaQuery>
    </div>
  );
}
