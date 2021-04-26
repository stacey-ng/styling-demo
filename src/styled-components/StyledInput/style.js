import styled, { css } from "styled-components";
import { colors, defaultIndex } from "../colors";

const { neutral, red } = colors;

const sizes = {
  small: {
    inputHeight: "1rem",
    font: "0.75rem",
  },
  medium: {
    inputHeight: "1.25rem",
    font: "1rem",
  },
  large: {
    inputHeight: "2rem",
    font: "1.25rem",
  },
};

export const InputContainer = styled.div(({ size, error, disabled }) => {
  const createInputContainerStyle = () => {
    let inputStyle = {
      text: neutral[12],
      bg: "none",
      border: `1px solid ${neutral[10]}`,
      focusedBorder: `1px solid ${neutral[12]}`,
      height: size ? sizes[size].inputHeight : sizes.medium.inputHeight,
    };

    if (error) {
      inputStyle.border = `1px solid ${red[4]}`;
      inputStyle.focusedBorder = `1px solid ${red[5]}`;
    }

    if (disabled) {
      inputStyle.text = neutral[7];
      inputStyle.bg = neutral[3];
      inputStyle.border = `1px solid ${neutral[5]}`;
    }

    return inputStyle;
  };

  const {
    text,
    bg,
    border,
    focusedBorder,
    height,
  } = createInputContainerStyle();

  return css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    height: ${height};

    color: ${text};
    background: ${bg};
    border: ${border};
    border-radius: 5px;

    :focus-within {
      border: ${focusedBorder};
    }
  `;
});

export const Input = styled.input(({ size }) => {
  const createInputStyle = () => {
    let inputStyle = {
      textSize: size ? sizes[size].font : sizes.medium.font,
    };
    return inputStyle;
  };

  const { textSize } = createInputStyle();

  return css`
    font-size: ${textSize};
    border: none;
  `;
});
