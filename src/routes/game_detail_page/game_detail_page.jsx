import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';

import { useAsync } from '../../hooks';
import { getGame } from '../../api/queries';

function GameDetailPage() {
  const { data, run } = useAsync();
  const { gameId } = useParams();
  console.log(data);

  useEffect(() => {
    run(fetchGame(gameId));
  }, [run, gameId]);

  return <h1>Game's Details Page</h1>;
}

async function fetchGame(gameId) {
  const data = await API.graphql(graphqlOperation(getGame, { id: gameId }));
  const {
    data: { getGame: game },
  } = data;
  return game;
}

const route = {
  routeProps: {
    path: '/game/:gameId',
    component: GameDetailPage,
  },
  name: 'GameDetailPage',
};

export default route;
