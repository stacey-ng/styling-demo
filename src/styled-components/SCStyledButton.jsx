import React, { useState } from "react";
import { Button } from "./style";

const SCStyledButton = ({
  submit,
  children,
  onClick,
  activatable,
  styleType,
  primary,
  theme,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    onClick && onClick();
    activatable && setIsActive(!isActive);
  };
  console.log(children);

  return (
    <Button
      type={submit ? "submit" : "button"}
      isActive={isActive}
      onClick={handleClick}
      styleType={styleType}
      primary={primary}
      theme={theme}
    >
      {children}
    </Button>
  );
};

export default SCStyledButton;
