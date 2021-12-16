import styled, { css } from 'styled-components';

const Button = styled.button`
  border: 0.125px solid ${({ theme }) => theme.app.button.border};
  padding: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.app.button.contrast};
  background-color: ${({ theme }) => theme.app.button.background};
  text-transform: uppercase;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
  transition: background-color 0.2s ease-out;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.app.button.hoverBackground};
  }

  a:hover,
  a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    display: block;
  }

  ${({ type }) =>
    type === 'danger' &&
    css`
      background-color: ${({ theme }) => theme.app.button.error};
      color: ${({ theme }) => theme.app.button.errorContrast};
      :hover {
        background-color: ${({ theme }) =>
          theme.app.button.errorHoverBackground};
      }
    `}
`;

export default Button;
