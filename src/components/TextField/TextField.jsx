import styled from 'styled-components';

const TextField = ({ labelText = '', id, ...otherProps }) => {
  return (
    <Container>
      <Label htmlFor={id}>{labelText}</Label>
      <Input id={id} {...otherProps} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  position: absolute;
  top: -0.5rem;
  left: 0.5rem;
  background-color: ${({ theme: { app } }) => app.textField.backgroundColor};
  padding: 0 0.1875rem;
`;

const Input = styled.input`
  background-color: ${({ theme: { app } }) => app.textField.backgroundColor};
  border-radius: 0.313rem;
  border: 0.125rem solid ${({ theme: { app } }) => app.textField.borderColor};
  color: inherit;
  padding: 0.625rem;
  width: 100%;
`;

export default TextField;
