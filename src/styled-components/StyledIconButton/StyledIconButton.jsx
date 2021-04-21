import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "./style";
import { icons } from "../icons";

const StyledButton = ({
  // Variants: outlined, minimal
  variant,
  color,
  disabled,
  activatable,
  type,
  size,
  icon,
  // Better practice to delineate hover/active/fill icon
  hoverIcon,
  onClick,
}) => {
  const [currIcon, setCurrIcon] = useState(icon);
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
      size={size}
      disabled={disabled}
      type={type}
      isActive={isActive}
      onClick={handleClick}
      onMouseEnter={() => hoverIcon && setCurrIcon(hoverIcon)}
      onMouseLeave={() => hoverIcon && setCurrIcon(icon)}
    >
      {icons[currIcon]}
    </Button>
  );
};

export default StyledButton;
