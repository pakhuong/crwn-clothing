import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ isGoogleSignIn, children, ...otherProps }) => (
  <button
    className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
