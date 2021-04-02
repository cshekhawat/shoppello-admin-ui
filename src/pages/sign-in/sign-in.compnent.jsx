import React, { useState } from "react";
import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";
import SignInUpOverlay from "../../component/sign-in-overlay/sign-in-overlay.component";
import "./sign-in.styles.css";

const SignInPage = () => {
  return (
    <div class="sign-in-wrapper">
      <div class="scontainer">
        <SignIn />
        <SignInUpOverlay />
      </div>
    </div>
  );
};

export default SignInPage;
