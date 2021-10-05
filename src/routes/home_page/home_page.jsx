import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import GameList from '../../components/game_list';
import Game from '../../components/game';
import Message from '../../components/message';
import { useAsync } from '../../hooks';
import { listGames } from '../../api/queries';
import SpiderHero from '../../assets/spider-man-hero.jpeg';
import UnchartedHero from '../../assets/uncharted4-hero.jpeg';
import GodOfWarHero from '../../assets/god-of-war-hero.jpeg';
import HorizonHero from '../../assets/horizon-zero-dawn-hero.jpeg';
import DemonSoulHero from '../../assets/demon-soul-hero.jpeg';
import RacketHero from '../../assets/ratchet-and-clank-hero.jpeg';

SwiperCore.use([Autoplay]);

const IMAGES_SRC = [
  SpiderHero,
  UnchartedHero,
  GodOfWarHero,
  HorizonHero,
  DemonSoulHero,
  RacketHero,
];

function HomePage() {
  const { status, data, run } = useAsync();
  useEffect(() => {
    run(fetchGames());
  }, [run]);

  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ position: 'relative' }}
      >
        <h2 className="title">Play Has No Limits</h2>
        {IMAGES_SRC.map((src) => (
          <SwiperSlide key={src}>
            <div
              className="carousel"
              style={{
                backgroundImage: `linear-gradient(
                  to bottom,
                  rgba(27, 38, 59, 0.6),
                  rgba(13, 27, 42, 0.8)
                  ),
                  url('${src}')`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="container">
        {status === 'rejected' && (
          <Message type="danger">
            Something went wrong. Please refresh the page.
          </Message>
        )}
        {status === 'pending' && <span>Loading...</span>}
        {status === 'resolved' && (
          <GameList list={data}>
            {(item) => <Game key={item.id} item={item} />}
          </GameList>
        )}
      </section>
    </div>
  );
}

async function fetchGames() {
  const data = await API.graphql({ query: listGames, authMode: 'API_KEY' });
  const {
    data: {
      listGames: { items },
    },
  } = data;
  const signedGames = await getSignedGames(items);
  return signedGames;
}

async function getSignedGames(games) {
  const signedGames = await Promise.all(
    games.map(async (item) => {
      const signedUrl = await Storage.get(item.imageKey);
      item.imageUrl = signedUrl;
      return item;
    })
  );
  return signedGames;
}

const route = {
  routeProps: {
    path: '/',
    component: HomePage,
  },
  name: 'HomePage',
};

export default route;
