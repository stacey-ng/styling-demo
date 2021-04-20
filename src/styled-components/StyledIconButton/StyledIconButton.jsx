import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "./style";
import { icons } from "../icons";

const StyledButton = ({
  // see App.js for prop descriptions
  children,
  // Themes: inverted (round with background, blue on hover) and borderless
  theme,
  disabled,
  type,
  size,
  // How to indicate what's the filled version of this icon?
  icon,
  onClick,
}) => {
  const handleClick = (e) => {
    // Bundles the custom click effect with generic click effect
    onClick && onClick(e);
  };

  return (
    <Button
      theme={theme}
      size={size}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      icon={icon}
    />
  );
};

export default StyledButton;
