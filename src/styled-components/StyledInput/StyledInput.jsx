import React, { useEffect, useState } from "react";
import { Input, InputContainer } from "./style";
import { StyledFillCloseCircle } from "../Icons/index";
import StyledIconButton from "../StyledIconButton/StyledIconButton";

const StyledInput = ({
  placeholder,
  defaultValue,
  size,
  required,
  disabled,
  error,
  allowClear,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const handleClear = (e) => {
    setInputValue("");
  };

  return (
    <InputContainer size={size} disabled={disabled} error={error}>
      <Input
        value={inputValue}
        placeholder={placeholder}
        size={size}
        disabled={disabled}
        onChange={handleOnChange}
        required={required}
      />
      {/* {allowClear && <StyledFillCloseCircle onClick={handleClear} />} */}
      {allowClear && (
        <StyledIconButton
          variant="filled"
          color="neutral"
          icon="AiFillCloseCircle"
          onClick={handleClear}
        />
      )}
    </InputContainer>
  );
};

export default StyledInput;
