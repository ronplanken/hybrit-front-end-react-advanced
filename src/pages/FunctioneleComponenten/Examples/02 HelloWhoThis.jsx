import React from "react";

export const HelloWhoThis = ({ name = "Joe" }) => {
  return (
    <span>
      Hello {name}
    </span>
  );
};
