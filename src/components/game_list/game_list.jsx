import React from 'react';

function GameList({ list, children }) {
  return <div className="game-list">{list.map((g) => children(g))}</div>;
}

export default GameList;
