import React, { useState } from "react";
import { FilterFilled, EditFilled } from "@ant-design/icons";
import "./style.css";

const SassStyledButton = ({
  submit,
  children,
  styleType,
  onClick,
  className,
  activatable,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.className);
    onClick && onClick();
    activatable && setIsActive(!isActive);
  };

  const applyClassNames = () => {};

  return (
    <button
      type={submit ? "submit" : "button"}
      className={className}
      styleType={styleType}
      isActive={isActive}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SassStyledButton;
