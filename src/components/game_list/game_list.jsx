import React from 'react';

function GameList({ list, children }) {
  return (
    <div className="container">
      <section className="game-list">{list.map((g) => children(g))}</section>
    </div>
  );
}

export default GameList;
