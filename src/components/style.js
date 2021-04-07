import styled from 'styled-components';
import { colors, primaryBlue, neutral } from '../styled-components/colors';

const primaryStyle = `
    color: white;
    background: ${colors.blue};
`;

const secondaryStyle = `
    color: ${colors.textGrey};
    background: ${colors.lightGrey};
    border: 1px solid #d4d7da;
`;

const inactiveStyleTypes = {
    primary: `
        color: ${neutral[1]};
        background: ${primaryBlue[5]};

        &:hover {
            background: ${primaryBlue[7]};
        }
    `,
    secondary: `
        color: ${neutral[12]};
        background: ${neutral[5]};
        border: 1px solid #d4d7da;

        &:hover {
            background: ${neutral[7]};
        }
    `,
};

const activeStyleTypes = {
    primary: `
        color: ${neutral[1]};
        background: ${primaryBlue[7]};
    `,
    secondary: `
        color: ${primaryBlue[5]};
        background: ${primaryBlue[1]};
        border: 1px solid ${primaryBlue[5]};

        &:hover {
            background: ${primaryBlue[3]};
        }
    `
}

export const Button = styled.button`
  /* Auto Layout */

  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 4px 16px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 8px;
  border-radius: 5px;

  font-size: 16px;

  &:hover {
    cursor: pointer;
  }

  /* ${({ styleType }) => inactiveStyleTypes[styleType]} */

  ${({isActive, styleType}) => isActive ? activeStyleTypes[styleType] : inactiveStyleTypes[styleType]}
`;

export default Button;