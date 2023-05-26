import { useState, useEffect } from 'react';
import { getTrending } from '../../service/api';
import Loader from '../../components/loader/Loader';
import { FilmList } from '../../components/FilmList/FilmList';
import style from './Home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending()
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, []);

  return (
    <div className={style.homeList}>
      {isLoading && <Loader />}

      {movies.length > 0 && (
        <>
          <h1>Trending today</h1>
          <FilmList movies={movies} />
        </>
      )}
    </div>
  );
};

export default Home;
