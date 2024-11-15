import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import "./Signup.css";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign-in Form */}
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Your email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>
            {/* Sign In button using Link */}
            <Link to="/dashboard" className="newww">
              <button type="button" className="newww">
                Sign In
              </button>
            </Link>
          </form>

          {/* Sign-up Form */}
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Company name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Company email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm password" />
            </div>
            {/* Sign Up button using Link */}
            <Link to="/dashboard" className="newww">
              <button type="button" className="newww">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              By signing up, you agree to our terms of use and Privacy Policy.
              <br />
              <span>WE WELCOME YOU TO THE COMMUNITY, HOPE YOU ENJOY YOUR STAY.</span>
            </p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              To access your account, please identify yourself by providing
              the information requested below, then click "Sign In".
            </p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
