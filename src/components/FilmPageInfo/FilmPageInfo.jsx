import notFoundImage from 'images/notFoundImage.png';
import style from './filmInfo.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FilmInfo({ movieInfo, backLinkLocationRef }) {
  const image = movieInfo.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
    : notFoundImage;

  const rate = Math.ceil(movieInfo.vote_average * 10);
  const genresList = () => movieInfo.genres.map(genre => genre.name).join(', ');
  return (
    <div className={style.filminfoWrap}>
      <NavLink to={backLinkLocationRef}> Go back</NavLink>
      <div className={style.filmInfo}>
        <img src={image} alt={movieInfo.title} />
        <ul>
          <li>
            <h2>{movieInfo.original_title}</h2>
            <p>User score : {rate}%</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{movieInfo.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{genresList()}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
FilmInfo.propTypes = {
  movieInfo: PropTypes.object.isRequired,
  backLinkLocationRef: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
