import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  inverted,
  isGoogleSignIn,
  children,
  ...otherProps
}) => (
  <button
    className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""} ${
      inverted ? "inverted" : ""
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
