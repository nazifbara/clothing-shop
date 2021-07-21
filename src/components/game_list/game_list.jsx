import React from 'react';

function GameList({ list, children }) {
  return (
    <div className="Container">
      <section className="game-list">{list.map((g) => children(g))}</section>
    </div>
  );
}

export default GameList;
