import style from './Searchbar.module.css';
import Notiflix from 'notiflix';
import { searchMovies } from '../../service/api';
import Loader from '../../components/loader/Loader';
import { FilmList } from 'components/FilmList/FilmList';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const movieName = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }

    setIsLoading(true);
    searchMovies(movieName)
      .then(response => {
        if (response.total_results === 0) {
          setMovies([]);
          Notiflix.Notify.failure(
            `Sorry, we didn't find any films with name ${movieName}`
          );
          return;
        }
        setMovies(response.results);
      })
      .catch(error => {
        Notiflix.Notify.failure(`Sorry something went wrong. ${error.message}`);
      })
      .finally(setIsLoading(false));
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.movie.value.toLowerCase();
    if (value.trim() === '') {
      setMovies([]);
      Notiflix.Notify.failure('Enter any word to search movies');
      return;
    }
    setSearchParams({ movieName: value });
  };

  return (
    <div>
      <div className={style.searchbar}>
        <form onSubmit={handleSubmit} className={style.searchForm}>
          <input
            className={style.SearchForminput}
            type="text"
            name="movie"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className={style.searchFormbutton}>
            Search
          </button>
        </form>
      </div>

      <div className={style.SearchList}>
        {isLoading && <Loader />}

        {movies.length > 0 && <FilmList movies={movies} location={location} />}
      </div>
    </div>
  );
};

export default MoviesSearch;
