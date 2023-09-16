import { useState, useEffect } from 'react';
import { getTrending, getTrendingTv } from '../../service/api';
import Loader from '../../components/Shared/loader/Loader';
import { FilmList } from '../../components/Movies/FilmList/FilmList';
import { TvList } from '../../components/TVShows/tvList/TvList';
import style from './Home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tv, setTv] = useState([]);
  const [image, setImage] = useState('');

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setIsLoading(true);
    getTrendingTv()
      .then(response => {
        setTv(response.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getTrending()
      .then(response => {
        setMovies(response.results);
        const num = getRandomInt(19);
        setImage(response.results[num].backdrop_path);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, []);
  console.log(movies);
  console.log(image);
  return (
    <div>
      <div className={style.slider}>
        <img
          src={`https://image.tmdb.org/t/p/w1280${image}`}
          alt={'dd'}
          className={style.filmImg}
        />
      </div>
      <div className={style.homeList}>
        {isLoading && <Loader />}

        {movies.length > 0 && (
          <>
            <h1>Trending movies</h1>
            <FilmList movies={movies} />
            <h1>Trending TVshows</h1>
            <TvList movies={tv} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
