import React, { useState } from "react";
import { Button } from "./style";
import { icons } from "../icons";

const StyledButton = ({
  // see App.js for prop descriptions
  children,
  variant,
  color,
  activatable,
  disabled,
  type,
  size,
  startIcon,
  endIcon,
  onClick,
}) => {
  // isActive is only tracked if activatabale is true, otherwise it stays false
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    // Bundles the custom click effect with generic click effect
    onClick && onClick(e);
    activatable && setIsActive(!isActive);
  };

  return (
    <Button
      variant={variant}
      color={color}
      isActive={isActive}
      size={size}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {startIcon && <span className="icon">{icons[startIcon]}</span>}
      {children}
      {endIcon && <span className="icon">{icons[endIcon]}</span>}
    </Button>
  );
};

export default StyledButton;
