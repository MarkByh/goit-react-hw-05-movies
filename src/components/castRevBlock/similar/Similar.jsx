import { useEffect, useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getSimilar } from 'service/api';
import { RatingProgressbar } from 'components/rating/rating';
import notFoundImage from 'images/Scrnono.png';
import style from './similar.module.css';
export default function Similar() {
  const [similar, setSimilar] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const BaseUrl = `https://image.tmdb.org/t/p/w500/`;
  console.log(id);
  useEffect(() => {
    getSimilar(id)
      .then(response => {
        setSimilar(response.results);
        console.log(response.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h2>Recomended</h2>
      <ul className={style.movieList}>
        {similar.map(
          ({ id, title, original_name, poster_path, vote_average }) => (
            <li className={style.movieItem} key={id}>
              <Link
                className={style.link}
                to={`/movies/${id}`}
                reloadDocument
                state={{ from: location }}
              >
                <img
                  className={style.posterMovie}
                  src={
                    poster_path ? BaseUrl.concat(poster_path) : notFoundImage
                  }
                  alt=""
                />
                <div
                  style={{
                    width: 45,
                    height: 45,
                    position: 'absolute',
                    top: 5,
                    left: 100,
                  }}
                >
                  <RatingProgressbar rating={vote_average}></RatingProgressbar>
                </div>
                <p className={style.titleMovie}>{title ?? original_name}</p>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
