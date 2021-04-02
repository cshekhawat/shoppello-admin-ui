import React from "react";
import { withRouter } from "react-router-dom";
import "./sign-in-overlay.styles.css";

const SignInUpOverlay = ({ history, match: { path, url } }) => {
  console.log(url);
  return (
    <div
      className={
        path === "/signup"
          ? "overlay-container overlay-left"
          : "overlay-container overlay-right"
      }
    >
      <div class="overlay">
        {path === "/signup" ? (
          <div class="overlay-panel overlay-panel-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              class="ghost"
              name="signIn"
              onClick={() => history.push(`/signin`)}
            >
              Sign In
            </button>
          </div>
        ) : (
          <div class="overlay-panel overlay-panel-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              class="ghost"
              name="signUp"
              onClick={() => history.push("/signup")}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(SignInUpOverlay);
