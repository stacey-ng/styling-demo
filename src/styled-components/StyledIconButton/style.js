import styled, { css } from "styled-components";
import { blue, neutral, red, yellow, green, orange } from "../colors";

export const Button = styled.button(
  ({ theme, color, isActive, size, startIcon, endIcon }) => {
    // https://styled-components.com/docs/basics#styling-any-component\
    console.log("startIcon-->", startIcon, endIcon);

    // CSS properties: text color, background color, hover text color, hover background, border
    // Default theme as guardrail in case developer does not provide sufficient props
    const defaultTheme = {
      text: neutral[1],
      bg: isActive ? blue[7] : blue[5],
      hoverText: neutral[1],
      hoverBg: blue[7],
      border: "none",
    };

    const themes = {
      solid: {
        blue: {
          text: neutral[1],
          bg: blue[5],
          hoverText: neutral[1],
          hoverBg: blue[7],
          disabledText: neutral[1],
          disabledBg: blue[3],
          border: "none",
        },
        neutral: {
          text: neutral[1],
          bg: neutral[5],
          hoverText: neutral[1],
          hoverBg: neutral[7],
          disabledText: neutral[1],
          disabledBg: neutral[3],
          border: "none",
        },
        red: {
          text: neutral[1],
          bg: red[5],
          hoverText: neutral[1],
          hoverBg: red[7],
          disabledText: neutral[1],
          disabledBg: red[3],
          border: "none",
        },
        yellow: {
          text: neutral[1],
          bg: yellow[5],
          hoverText: neutral[1],
          hoverBg: yellow[7],
          disabledText: neutral[1],
          disabledBg: yellow[3],
          border: "none",
        },
        green: {
          text: neutral[1],
          bg: green[5],
          hoverText: neutral[1],
          hoverBg: green[7],
          disabledText: neutral[1],
          disabledBg: green[3],
          border: "none",
        },
        orange: {
          text: neutral[1],
          bg: orange[5],
          hoverText: neutral[1],
          hoverBg: orange[7],
          disabledText: neutral[1],
          disabledBg: orange[3],
          border: "none",
        },
      },
      outlined: {
        neutral: {
          text: isActive ? blue[5] : neutral[12],
          bg: isActive ? blue[1] : neutral[5],
          hoverText: isActive ? blue[5] : neutral[12],
          hoverBg: isActive ? blue[3] : neutral[7],
          disabledText: neutral[9],
          disabledBg: neutral[3],
          border: `1px solid ${isActive ? blue[5] : neutral[6]}`,
        },
      },
      borderless: {
        text: isActive ? neutral[13] : neutral[11],
        bg: neutral[1],
        hoverText: neutral[13],
        hoverBg: neutral[1],
        border: "none",
      },
    };

    // Should height be another layer of the themes object?
    const height = {
      small: {
        container: "32px",
        font: "14px",
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
    } = Object.assign({}, defaultTheme, theme && color && themes[theme][color]);

    // console.log("style-->", text, bg, border, hoverText, hoverBg, height);
    // console.log("color-->", theme, themes[theme][color]);

    return css`
    display: flex;
    height: ${size ? height[size].container : "32px"};
    justify-content: center;
    align-items: center;
    padding: 0.25rem 1rem;
    display: flex;

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
      color: ${disabledText};
      background: ${disabledBg};
    }

    .icon {
        vertical-align: middle;        
        ${startIcon && "padding-right: 0.5em;"}
        ${endIcon && "padding-left: 0.5em;"}
  `;

    // const otherThemes = {
    //     solidRed: {
    //         bg: isActive ? red[7] : red[5],
    //         hoverBg: red[7],
    //     },
    //     invertedBlue: {
    //         text: isActive ? blue[5] : neutral[12],
    //         bg: isActive ? blue[1] : neutral[5],
    //         border: `1px solid ${isActive ? blue[5] : neutral[6]}`,
    //         hoverText: isActive ? blue[5] : neutral[12],
    //         hoverBg: isActive ? blue[3] : neutral[7]
    //     },
    //     invertedRed: {
    //         text: isActive ? red[5] : neutral[12],
    //         bg: isActive ? red[1] : neutral[5],
    //         border: `1px solid ${isActive ? red[5] : neutral[6]}`,
    //         hoverText: isActive ? red[5] : neutral[12],
    //         hoverBg: isActive ? red[3] : neutral[7]
    //     },
    //     skeletonNeutral: {
    //         text: isActive ? neutral[13] : neutral[11],
    //         bg: neutral[1],
    //         hoverText: neutral[13],
    //         hoverBg: neutral[1]
    //     },
    //     skeletonRed: {
    //         text: isActive ? red[7] : red[5],
    //         bg: neutral[1],
    //         hoverText: red[7],
    //         hoverBg: neutral[1]
    //     }
    // }
    // const { text, bg, border, hoverText, hoverBg } = Object.assign({}, defaultTheme, theme && otherThemes[theme]);

    // return css` // https://styled-components.com/docs/api#css
    //     display: flex;
    //     flex-direction: ${iconPosition === "top" || iconPosition === "bottom" ? "column" : "row"};
    //     justify-content: center;
    //     align-items: center;
    //     padding: ${round ? 0 : "0.25rem 1rem"};

    //     flex: none;
    //     order: 2;
    //     flex-grow: 0;
    //     margin: 0 0.5rem;
    //     border-radius: ${round ? "50%" : "5px"};

    //     font-size: 1rem;

    //     color: ${text};
    //     background: ${bg};
    //     border: ${border};

    //     &:hover {
    //         cursor: pointer;
    //         color: ${hoverText};
    //         background: ${hoverBg};
    //     }
    // `
  }
);
