import { Link, useLocation } from 'react-router-dom';
import notFoundImage from 'images/notFoundImage.png';
import { RatingProgressbar } from 'components/Shared/rating/rating';

import style from './filmList.module.css';
export const FilmList = ({ movies }) => {
  const BaseUrl = `https://image.tmdb.org/t/p/w500/`;

  const location = useLocation();

  return (
    <div className="container">
      <ul className={style.movieList}>
        {movies.map(({ id, title, original_name, poster_path,vote_average }) => (
          <li className={style.movieItem} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }} style={{ textDecoration: "none", color:'black'}}>
              <img
                className={style.posterMovie}
                src={poster_path ? BaseUrl.concat(poster_path) : notFoundImage}
                alt=""
              />
              <div
                  style={{
                    width: 45,
                    height: 45,
                    position: 'absolute',
                    top: 5,
                    left: 95,
                  }}
                >
                  <RatingProgressbar rating={vote_average}></RatingProgressbar>
                </div>
              <p className={style.titleMovie}>{title ?? original_name}</p>
              

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
