import styled, { css } from 'styled-components';

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  ${({ ratio }) =>
    ratio &&
    css`
      aspect-ratio: ${ratio};
    `}

  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

export default ImageBox;
