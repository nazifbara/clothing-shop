import React from 'react';
import styled from 'styled-components';

function GameList({ list, children }) {
  return <Container>{list.map((g) => children(g))}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  align-items: stretch;
`;

export default GameList;
