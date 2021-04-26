import React, { useEffect, useState } from "react";
import { Button } from "./style";
import { icons } from "../icons";

const StyledIconButton = ({
  // Variants: outlined, minimal
  variant,
  color,
  disabled,
  activatable,
  type,
  size,
  icon,
  // Better practice to delineate hover/active/fill icon?
  activeIcon,
  onClick,
}) => {
  const [currIcon, setCurrIcon] = useState(icon);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    // Bundles the custom click effect with generic click effect
    onClick && onClick(e);
    activatable && setIsActive(!isActive);
  };

  useEffect(() => {
    activeIcon && isActive ? setCurrIcon(activeIcon) : setCurrIcon(icon);
  }, [isActive, icon, activeIcon]);

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      type={type}
      isActive={isActive}
      onClick={handleClick}
      onMouseEnter={(e) => {
        activeIcon && setCurrIcon(activeIcon);
      }}
      onMouseLeave={(e) => {
        activeIcon && !isActive && setCurrIcon(icon);
      }}
    >
      {icons[currIcon]}
    </Button>
  );
};

export default StyledIconButton;
