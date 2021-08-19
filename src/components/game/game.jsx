import React from 'react';
import Image from 'react-graceful-image';
import { Link } from 'react-router-dom';

import { printPrice } from '../../utils';

function Game({ item }) {
  return (
    <Link to={`/game/${item.id}`} className="game" key={item.id}>
      <Image width="100%" alt="" src={item.imageUrl} />
      <h3>{item.title}</h3>
      <span>{printPrice(item.price)}</span>
    </Link>
  );
}

export default Game;
