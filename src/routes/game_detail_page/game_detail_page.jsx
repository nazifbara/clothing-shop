import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import Image from 'react-graceful-image';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

import { useAsync } from '../../hooks';
import { getGame } from '../../api/queries';
import { printPrice } from '../../utils';
import AddToCart from '../../components/add_to_cart';
import Accordion from '../../components/accordion';

function GameDetailPage() {
  const { data: game, run, status } = useAsync();
  const { gameId } = useParams();
  const isLoading = status === 'pending';
  const isResolved = status === 'resolved';

  useEffect(() => {
    run(fetchGame(gameId));
  }, [run, gameId]);

  return (
    <div className="container game-detail">
      {isLoading && <span>loading..</span>}
      {isResolved && (
        <>
          <h1 className="game-detail__title">
            {game.title + ' - ' + game.platform.name}
          </h1>
          <Image
            className="game-detail__cover"
            src={game.imageURL}
            alt={`${game.title} cover`}
          />
          <div
            style={{
              maxWidth: '350px',
              textAlign: 'center',
              margin: '20px auto',
            }}
          >
            <span className="game-detail__price">{printPrice(game.price)}</span>
            <AddToCart item={game} />
          </div>

          <Accordion heading="Description" open>
            {game.description.split('\n').map((item) => (
              <p key={uuid()}>{item}</p>
            ))}
          </Accordion>
          <Accordion heading="Trailer" open>
            <div className="video-responsive">
              <iframe
                src={game.trailerURL}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Accordion>
          <Accordion heading="Game information">
            <div className="info">
              <span>Publisher</span>
              <span>{game.publisher.name}</span>
            </div>
            <div className="info">
              <span>Type</span>
              <span>
                {game.types.items.reduce(
                  (types, item) => types.type.name + ', ' + item.type.name
                )}
              </span>
            </div>
            <div className="info">
              <span>Recommended age</span>
              <span>{game.recommended_age}</span>
            </div>
            <div className="info">
              <span>Release data</span>
              <span>{moment(game.release_date).format('MMMM M, YYYY')}</span>
            </div>
            <div className="info">
              <span>Platform</span>
              <span>{game.platform.name}</span>
            </div>
          </Accordion>
        </>
      )}
    </div>
  );
}

async function fetchGame(gameId) {
  const data = await API.graphql({
    ...graphqlOperation(getGame, { id: gameId }),
    authMode: 'API_KEY',
  });
  const {
    data: { getGame: game },
  } = data;

  const signedImageURL = await Storage.get(game.imageKey);
  game.imageURL = signedImageURL;

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
