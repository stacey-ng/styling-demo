import styled, { css } from "styled-components";
import { colors, defaultIndex } from "../colors";

export const Button = styled.button(
  ({ variant, color, isActive, size, startIcon, endIcon }) => {
    // https://styled-components.com/docs/basics#styling-any-component\
    const { neutral } = colors;
    const buttonColor = colors[color];
    const colorIndex = defaultIndex[color];

    // Helper functions to create variant-based style objects
    const createContainedStyle = () => {
      let containedStyle = {
        text: neutral[1],
        bg: buttonColor[colorIndex],
        border: "none",

        hoverText: neutral[1],
        hoverBg: buttonColor[colorIndex + 2],

        disabledText: neutral[7],
        disabledBg: neutral[4],
      };

      if (isActive) {
        containedStyle.bg = buttonColor[colorIndex + 2];
      }

      return containedStyle;
    };

    const createOutlinedStyle = () => {
      let outlinedStyle = {
        text: buttonColor[colorIndex],
        bg: neutral[3],
        border: `1px solid ${neutral[6]}`,

        hoverText: buttonColor[colorIndex],
        hoverBg: neutral[7],

        disabledText: neutral[7],
        disabledBg: neutral[4],
      };

      if (isActive) {
        outlinedStyle.bg = buttonColor[colorIndex - 4];
        outlinedStyle.border = `1px solid ${buttonColor[colorIndex]}`;
        outlinedStyle.hoverBg = buttonColor[colorIndex - 2];
      }

      return outlinedStyle;
    };

    const createMinimalStyle = () => {
      let minimalStyle = {
        text: buttonColor[colorIndex],
        bg: "none",
        border: "none",

        hoverText: buttonColor[colorIndex],
        hoverBg: neutral[3],

        disabledText: neutral[7],
        disabledBg: "none",
      };

      if (isActive) {
        minimalStyle.bg = neutral[3];
      }

      return minimalStyle;
    };

    // Object where styling helper functions can be called based on 'variant' prop
    const stylingFunctions = {
      contained: createContainedStyle,
      outlined: createOutlinedStyle,
      minimal: createMinimalStyle,
    };

    const height = {
      small: {
        container: "32px",
        font: "14px",
      },
      medium: {
        container: "36px",
        font: "16px",
      },
      large: {
        container: "40px",
        font: "20px",
      },
    };

    const {
      text,
      bg,
      border,
      hoverText,
      hoverBg,
      disabledText,
      disabledBg,
    } = stylingFunctions[variant]();

    return css`
    display: flex;
    height: ${size ? height[size].container : "32px"};
    justify-content: center;
    align-items: center;
    padding: 0.25rem 1rem;

    color: ${text};
    background: ${bg};
    border: ${border};
    border-radius: 5px;

    font-size: ${size ? height[size].font : "14px"};

    &:hover:enabled {
      cursor: pointer;
      color: ${hoverText};
      background: ${hoverBg};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${disabledText};
      background: ${disabledBg};
    }

    .icon {
        vertical-align: middle;        
        ${startIcon && "padding-right: 0.5em;"}
        ${endIcon && "padding-left: 0.5em;"}
  `;
  }
);
