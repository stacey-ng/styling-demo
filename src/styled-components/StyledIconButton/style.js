import styled, { css } from "styled-components";
import { colors, defaultIndex } from "../colors";

export const Button = styled.button(({ variant, color, isActive, size }) => {
  // https://styled-components.com/docs/basics#styling-any-component\
  const { neutral } = colors;

  // CSS properties: text color, background color, hover text color, hover background, border
  // Default theme as guardrail in case developer does not provide sufficient props
  // Currently there are only 2 'themes' of implementation of these icon buttons. Should we only create themes for available instances?
  const variants = {
    outlined: {
      text: isActive ? colors[color][defaultIndex[color]] : neutral[12],
      bg: isActive ? colors[color][defaultIndex[color] - 4] : neutral[5],
      border: "none",
      borderRadius: "50%",
      hoverText: colors[color][defaultIndex[color]],
      hoverBg: isActive
        ? colors[color][defaultIndex[color] - 2]
        : colors[color][defaultIndex[color] - 4],
      disabledText: neutral[9],
      disabledBg: neutral[3],
    },
    minimal: {
      text: colors[color][defaultIndex[color]],
      bg: "none",
      border: "none",
      borderRadius: "5px",
      hoverText: colors[color][defaultIndex[color] + 2],
      hoverBg: neutral[3],
      disabledText: colors[color][defaultIndex[color] - 2],
      disabledBg: "none",
    },
    minimal2: {
      text: colors[color][defaultIndex[color]],
      bg: "none",
      border: "none",
      borderRadius: "5pxAi",
      hoverText: colors[color][defaultIndex[color]],
      hoverBg: "none",
      disabledText: colors[color][defaultIndex[color] - 2],
      disabledBg: "none",
    },
  };

  // Should height be another layer of the themes object?
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
    borderRadius,
    hoverText,
    hoverBg,
    disabledText,
    disabledBg,
  } = variants[variant];

  // console.log("style-->", text, bg, border, hoverText, hoverBg, height);
  // console.log("color-->", theme, themes[theme][color]);

  return css`
    display: flex;
    height: ${size ? height[size].container : "32px"};
    width: ${size ? height[size].container : "32px"};
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    display: flex;

    color: ${text};
    background: ${bg};
    border: ${border};
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
