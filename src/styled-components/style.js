import styled from 'styled-components';
import colors from './colors';

const primaryStyle = `
    color: white;
    background: ${colors.blue};
`;

const secondaryStyle = `
    color: ${colors.textGrey};
    background: ${colors.lightGrey};
    border: 1px solid #d4d7da;
`;

const iconOnlyStyle = `
    color: white;
    background: ${colors.navy};
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
`;

export const Button = styled.button`
  /* Auto Layout */

  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 5px 16px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 8px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

  ${primaryStyle}

  ${(props) =>
        props.colorScheme === 'secondary' && secondaryStyle}

  .pretend-navbar & {
    ${iconOnlyStyle}
  }
`;

export default Button;
// export const PrimaryButton = styled(Button)`
//   color: white;
//   background: ${colors.navy};
// `;

// export const SecondaryButton = styled(Button)`
//   color: ${colors.textGrey};
//   background: ${colors.lightGrey};
//   border: 1px solid #d4d7da;
// `;
