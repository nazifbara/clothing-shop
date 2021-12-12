import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';

export default createGlobalStyle`
  ${reboot}
  
  body {
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.app.body.background};
    color: ${({ theme }) => theme.app.text};
`;
