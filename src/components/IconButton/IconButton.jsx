import styled from 'styled-components';

const IconButton = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

const Container = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 5px;
  color: white;

  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.6;
  }
`;

export default IconButton;
