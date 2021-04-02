import React, { useState } from "react";
import SignUp from "../../component/sign-up/sign-up.component";
import SignInUpOverlay from "../../component/sign-in-overlay/sign-in-overlay.component";
import "./sign-up.styles.css";

const SignUpPage = () => {
  //   const [isSignUp, setIsSignUp] = useState({ isSignUp: false });
  //   const [signClass, setSignClass] = useState({ sClass: "container" });
  //   const togglePage = event => {
  //     event.preventDefault();
  //     const { name } = event.target;
  //     if (name === "signUp") {
  //     } else {
  //       setSignClass({ sClass: "container" });
  //     }
  //     console.log(name);
  //   };
  // const { sClass } = signClass;
  return (
    <div class="sign-up-wrapper">
      <div class="scontainer">
        <SignInUpOverlay />
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
