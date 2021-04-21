import styled, { css } from "styled-components";
import { colors, defaultIndex } from "../colors";

export const Button = styled.button(({ variant, color, isActive, size }) => {
  // https://styled-components.com/docs/basics#styling-any-component\
  const { neutral } = colors;
  const buttonColor = colors[color];
  const colorIndex = defaultIndex[color];

  // CSS properties: text color, background color, hover text color, hover background, border
  // Default theme as guardrail in case developer does not provide sufficient props?
  // Currently there are only 2 'themes' of implementation of these icon buttons. Should we only create themes for available instances?
  const createOutlineStyle = () => {
    let outlineStyle = {
      text: neutral[12],
      bg: neutral[5],
      borderRadius: "50%",

      hoverText: buttonColor[colorIndex],
      hoverBg: buttonColor[colorIndex - 4],

      disabledText: neutral[9],
      disabledBg: neutral[3],
    };

    if (isActive) {
      outlineStyle.text = buttonColor[colorIndex];
      outlineStyle.bg = buttonColor[colorIndex - 4];
      outlineStyle.hoverBg = buttonColor[colorIndex - 2];
    }

    return outlineStyle;
  };

  const createFilledStyle = () => {
    let filledStyle = {
      text: buttonColor[colorIndex],
      bg: "none",
      borderRadius: "5px",

      hoverText: buttonColor[colorIndex + 2],
      hoverBg: neutral[3],

      disabledText: neutral[7],
      disabledBg: "none",
    };

    if (isActive) {
      filledStyle.bg = neutral[3];
    }

    return filledStyle;
  };

  const createUnfilledStyle = () => {
    let unfilledStyle = {
      text: buttonColor[colorIndex],
      bg: "none",
      borderRadius: "5px",

      hoverText: buttonColor[colorIndex],
      hoverBg: "none",

      disabledText: neutral[7],
      disabledBg: "none",
    };

    return unfilledStyle;
  };

  const stylingFunctions = {
    outlined: createOutlineStyle,
    filled: createFilledStyle,
    unfilled: createUnfilledStyle,
  };

  // Should height be another layer of the themes object?
  const height = {
    small: {
      lineHeight: "32px",
      font: "14px",
    },
    medium: {
      lineHeight: "36px",
      font: "16px",
    },
    large: {
      lineHeight: "40px",
      font: "20px",
    },
  };

  const {
    text,
    bg,
    borderRadius,
    hoverText,
    hoverBg,
    disabledText,
    disabledBg,
  } = stylingFunctions[variant]();

  // console.log("style-->", text, bg, border, hoverText, hoverBg, height);
  // console.log("color-->", theme, themes[theme][color]);

  return css`
    display: flex;
    line-height: ${size ? height[size].lineHeight : "32px"};
    width: ${size ? height[size].lineHeight : "32px"};
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    display: flex;

    color: ${text};
    background: ${bg};
    border-radius: ${borderRadius};

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
  `;
});
