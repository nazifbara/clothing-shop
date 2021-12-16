import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import styled from 'styled-components';

import { IconButton } from '..';

const QuantityPicker = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <Container>
      <IconButton onClick={onIncrease}>
        <FiPlusCircle fontSize={30} />
      </IconButton>
      <span>{quantity}</span>
      <IconButton onClick={onDecrease}>
        <FiMinusCircle fontSize={30} />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > :not(:last-child) {
    margin-bottom: 0.3125rem;
  }
`;

export default QuantityPicker;
