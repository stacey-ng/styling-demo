

import styled, { css } from 'styled-components';
import { primaryBlue, neutral } from '../styled-components/colors';

const primaryStyle = css`
    color: ${neutral[1]};
    background: ${({isActive}) => isActive ? primaryBlue[7] : primaryBlue[5]};

    &:hover {
        background: ${primaryBlue[7]};
    }
`;

const secondaryStyle = css`
    color: ${({isActive}) => isActive ? primaryBlue[5] : neutral[12]};
    background: ${({isActive}) => isActive ? primaryBlue[1] : neutral[5]};
    border: 1px solid ${({isActive}) => isActive ? primaryBlue[5] : neutral[6]};

    &:hover {
        background: ${({isActive}) => isActive ? primaryBlue[3] : neutral[7]};
    }
`;

// const inactiveStyleTypes = {
//     primary: `
//         color: ${neutral[1]};
//         background: ${primaryBlue[5]};

//         &:hover {
//             background: ${primaryBlue[7]};
//         }
//     `,
//     secondary: `
//         color: ${neutral[12]};
//         background: ${neutral[5]};
//         border: 1px solid #d4d7da;

//         &:hover {
//             background: ${neutral[7]};
//         }
//     `,
// };

// const activeStyleTypes = {
//     primary: `
//         color: ${neutral[1]};
//         background: ${primaryBlue[7]};
//     `,
//     secondary: `
//         color: ${primaryBlue[5]};
//         background: ${primaryBlue[1]};
//         border: 1px solid ${primaryBlue[5]};

//         &:hover {
//             background: ${primaryBlue[3]};
//         }
//     `
// }

// const themes = {
//     primary: {
//         textColor: neutral[1],
//         activeBackground: primaryBlue[7],
//         inactiveBackground: primaryBlue[5],
//         hover: primaryBlue[7],
//         activeBorder: "none",
//         inactiveBorder: ``
//     },
//     secondary: {
//         textColor: primaryBlue[5],
//         activeBackground: primaryBlue[1],
//         inactiveBackground: primaryBlue[5],
//         hover: primaryBlue[7],
//         border: "none"
//     },
// }

// export const Button = styled.button(({isActive, theme, red}) => {
//     const defaultTheme = {
//         text: neutral[1],
//         bg: isActive ? primaryBlue[7] : primaryBlue[5],
//         hover: primaryBlue[7],
//         border: "none"
//     };

//     const otherThemes = {
//         gray: {
//             text: isActive ? primaryBlue[5] : neutral[12],
//             bg: isActive ? primaryBlue[1] : neutral[5],
//             border: `1px solid ${isActive ? primaryBlue[5] : neutral[6]}`,
//             hover: isActive ? primaryBlue[3] : neutral[7]
//         }
//     }
//     const { text, bg, border, hover } = Object.assign({}, defaultTheme, theme && otherThemes[theme]);

//     const obj = Object.assign({}, defaultTheme, theme && otherThemes[theme]);

//     return css`
//         /* Auto Layout */

//         display: flex;
//         /* flex-direction: column; */
//         justify-content: center;
//         align-items: center;
//         padding: 4px 16px;
    
//         /* Inside Auto Layout */
    
//         flex: none;
//         order: 2;
//         flex-grow: 0;
//         margin: 0px 8px;
//         border-radius: 5px;
    
//         font-size: 16px;

//         color: ${text};
//         background: ${bg};
//         border: ${border};

//         &:hover {
//             cursor: pointer;
//             background: ${hover};
//         }
//     `
// });

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



  ${({primary}) => primary ? primaryStyle : secondaryStyle}

`;
// ${({isActive, styleType}) => isActive ? activeStyleTypes[styleType] : inactiveStyleTypes[styleType]}
export default Button;