import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [signUpData, setSignUpData] = useState({
    companyName: "",
    companyEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [signInData, setSignInData] = useState({
    companyEmail: "",
    password: "",
  });

  const navigate = useNavigate();

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        companyName: signUpData.companyName,
        companyEmail: signUpData.companyEmail,
        password: signUpData.password,
      });
      alert(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error signing up");
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signin", signInData);
      alert(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error signing in");
    }
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign-in Form */}
          <form onSubmit={handleSignInSubmit} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                name="companyEmail"
                placeholder="Your email"
                required
                onChange={handleSignInChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleSignInChange}
              />
            </div>
            <button type="submit" className="btn">Sign In</button>
          </form>

          {/* Sign-up Form */}
          <form onSubmit={handleSignUpSubmit} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                required
                onChange={handleSignUpChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                name="companyEmail"
                placeholder="Company email"
                required
                onChange={handleSignUpChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleSignUpChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                onChange={handleSignUpChange}
              />
            </div>
            <button type="submit" className="btn">Sign Up</button>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Sign up and join us to access exclusive features and more.</p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign Up
            </button>
          </div>
          <img src="images/register.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>Sign in to continue to your dashboard.</p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign In
            </button>
          </div>
          <img src="images/login.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
