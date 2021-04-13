import React, { useState } from "react";
import { Button } from "./style";

const SCStyledButton = ({
  submit,
  children,
  theme,
  onClick,
  activatable,
  primary,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    onClick && onClick();
    activatable && setIsActive(!isActive);
  };

  return (
    <Button
      type={submit ? "submit" : "button"}
      theme={theme}
      isActive={isActive}
      onClick={handleClick}
      primary={primary}
    >
      {children}
    </Button>
  );
};

export default SCStyledButton;
