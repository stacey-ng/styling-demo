import React from 'react';
import { string, arrayOf, func, node, oneOf, oneOfType } from 'prop-types';

import { Button } from './style';

const CustomButton = ({
  className,
  submit,
  colorScheme,
  iconOnly,
  children,
}) => {
  // const assignClassName = () => {
  //   const style = [styles.button];
  //   if (colorScheme) {
  //     style.push(styles[colorScheme]);
  //   }
  //   if (size) {
  //     style.push(styles[size]);
  //   }
  //   return style.join(' ');
  // };

  return (
    <Button
      type={submit ? 'submit' : 'button'}
      colorScheme={colorScheme}
      iconOnly={iconOnly}
    >
      {/* {leftIcon && leftIcon}
      {rightIcon && rightIcon} */}
      {children}
    </Button>
  );
};

export default CustomButton;
