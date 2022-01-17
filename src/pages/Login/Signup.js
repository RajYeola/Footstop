import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import MediaQuery from "react-responsive";
import NavbarMobile from "../../components/Navbar/NavbarMobile";
import HeaderMobile from "../../components/Navbar/HeaderMobile";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  invalidEmailToast,
  invalidNameToast,
  invalidPasswordToast,
} from "../../utils/Toast/toasts";

const Signup = () => {
  const { isLoggedIn, signup } = useAuth();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUserInfoData = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const nameTest = nameRegex.test(userInfo.name);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailTest = emailRegex.test(userInfo.email);

  const passwordRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}/;
  const passwordTest = passwordRegex.test(userInfo.password);

  useEffect(() => isLoggedIn && navigate("/login"), [isLoggedIn, navigate]);

  return (
    <div className="pos-rel">
      <MediaQuery maxDeviceWidth={769}>
        <HeaderMobile />
      </MediaQuery>
      <div className="view-container pt-9 disp-flex flex-column align-center">
        <div className="account-actions-container disp-flex flex-column width-100 align-center">
          <h1 className="my-05 color-primary">Sign Up</h1>

          <input
            type="text"
            name="name"
            className={`input-basic my-05 input-name ${
              nameTest ? "" : "input-danger"
            }`}
            placeholder="Name"
            onChange={handleUserInfoData}
            value={userInfo.name}
          />
          <input
            type="email"
            name="email"
            className={`input-basic my-05 input-email ${
              emailTest ? "" : "input-danger"
            }`}
            placeholder="Email"
            onChange={handleUserInfoData}
            value={userInfo.email}
          />
          <div className="disp-flex flex-column input-password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={`input-basic my-05 width-100 ${
                passwordTest ? "" : "input-danger"
              }`}
              placeholder="Password"
              onChange={handleUserInfoData}
              value={userInfo.password}
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

        <button
          className={`btn my-05 btn-login ${
            isLoggedIn ? `btn-danger` : `btn-success`
          }`}
          onClick={() => {
            if (!nameTest) {
              invalidNameToast();
            } else if (!emailTest) {
              invalidEmailToast();
            } else if (!passwordTest) {
              invalidPasswordToast();
            } else {
              signup(userInfo);
            }
          }}
        >
          SIGN UP
        </button>

        {!isLoggedIn && (
          <button
            className="btn btn-signin-option text-uppercase my-05"
            onClick={() => navigate("/login")}
          >
            Already have an account? Sign In
          </button>
        )}
      </div>
      <MediaQuery maxDeviceWidth={768}>
        <NavbarMobile />
        <ToastContainer
          position="bottom-center"
          style={{ marginBottom: "3rem" }}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={769}>
        <ToastContainer
          position="top-right"
          style={{ marginTop: "3.5rem", marginRight: "1rem" }}
        />
      </MediaQuery>
    </div>
  );
};

export default Signup;
