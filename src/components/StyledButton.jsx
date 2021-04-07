import React, { useState } from "react";
import { FilterFilled, EditFilled } from "@ant-design/icons";
import { Button } from "./style";

const StyledButton = ({
  submit,
  children,
  styleType,
  onClick,
  activatable,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.className);
    onClick && onClick();
    activatable && setIsActive(!isActive);
  };

  return (
    <Button
      type={submit ? "submit" : "button"}
      styleType={styleType}
      isActive={isActive}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
