import { useState, useEffect } from 'react';
import { getTrending, getTrendingTv } from '../../service/api';
import Loader from '../../components/Shared/loader/Loader';
import { FilmList } from '../../components/Movies/FilmList/FilmList';
import {TvList} from '../../components/TVShows/tvList/TvList'
import style from './Home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 const [tv, setTv]= useState([])
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
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, []);
  console.log(tv);

  return (
    <div className={style.homeList}>
      {isLoading && <Loader />}

      {movies.length > 0 && (
        <>
          <h1>Trending today</h1>
          <FilmList movies={movies} />
          <TvList movies={tv}/>
        </>
      )}
    </div>
  );
};

export default Home;
