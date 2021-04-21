import styled, { css } from "styled-components";
import { colors, defaultIndex } from "../colors";

export const Button = styled.button(
  ({ variant, color, isActive, size, startIcon, endIcon }) => {
    // https://styled-components.com/docs/basics#styling-any-component\
    const { neutral } = colors;

    const variants = {
      contained: {
        text: neutral[1],
        bg: colors[color][defaultIndex[color]],
        hoverText: neutral[1],
        hoverBg: colors[color][defaultIndex[color] + 2],
        disabledText: neutral[1],
        disabledBg: colors[color][defaultIndex[color] - 2],
        border: "none",
      },
      outlined: {
        text: colors[color][defaultIndex[color]],
        bg: isActive ? colors[color][defaultIndex[color] - 4] : neutral[5],
        hoverText: colors[color][defaultIndex[color]],
        hoverBg: isActive ? colors[color][defaultIndex[color] - 2] : neutral[7],
        disabledText: colors[color][defaultIndex[color] - 3],
        disabledBg: neutral[3],
        border: `1px solid ${
          isActive ? colors[color][defaultIndex[color]] : neutral[6]
        }`,
      },
      minimal: {
        text: colors[color][defaultIndex[color]],
        bg: "none",
        hoverText: colors[color][defaultIndex[color]],
        hoverBg: neutral[3],
        disabledText: colors[color][defaultIndex[color] - 3],
        disabledBg: "none",
      },
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
    } = variants[variant];

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
