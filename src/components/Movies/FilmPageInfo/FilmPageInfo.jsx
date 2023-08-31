import notFoundImage from 'images/pngegg.png';
import play from 'images/play.svg';
import star from 'images/star-full.svg';
import style from './filmInfo.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Cast from 'components/castRevBlock/cast/Cast';
// import Similar from 'components/castRevBlock/similar/Similar';
import { useEffect } from 'react';

// import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesVideo } from '../../../service/api';
export default function FilmInfo({
  movieInfo,
  backLinkLocationRef,
  setModal,
  movieVideo,
  setMovieVideo,
  id,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    getMoviesVideo(id)
      .then(response => {
        if (response.results.length === 0) {
          setMovieVideo(null);
        }
        setMovieVideo(response.results[0].key);
      })
      .catch(error => {
        console.log(error);
      });
    // .finally(setIsLoading(false));
  }, [id, setMovieVideo]);

  const image = movieInfo.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
    : notFoundImage;
  const bgImage = movieInfo.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}`
    : null;
  console.log(movieInfo.id);
  const time = movieInfo.runtime;
  let mins = time % 60;
  let hours = (time - mins) / 60;
  if (mins < 10) mins = '0' + mins;
  let newDate = new Date(movieInfo.release_date);

  let rezult = hours + 'h ' + mins + 'm';

  const rate = Math.ceil(movieInfo.vote_average * 10);
  const genresList = () => movieInfo.genres.map(genre => genre.name).join(', ');
  return (
    
      <div
        style={{
          backgroundImage: ` url(${bgImage})`,
          width: '100%',
          backgroundRepeat: `no-repeat`,
          backgroundAttachment: `fixed`,
          backgroundSize: `cover`,
        }}
      >
        <div
          className={style.filminfoWrap}
          style={{
          //   background: `radial-gradient(circle, rgba(84,82,83,0.9430147058823529) 0%, rgba(10,12,14,1) 100%)`,
          background:` radial-gradient(circle, rgba(84, 82, 83, 0.794) 0%, rgba(10, 12, 14, 0.999) 100%)`,

          }}
        >
          <div className={style.cnt}>
            
            <NavLink onClick={() => navigate(-1)}> Go back</NavLink>
  
            <div className={style.filmInfo}>
              <img src={image} alt={movieInfo.title} className={style.filmImg} />
              <ul>
                <li>
                  <h2 className={style.title}>
                    {movieInfo.original_title}
                    {'   '}
                    <span style={{ fontWeight: 100, fontSize: 30 }}>
                      ({newDate.getFullYear()})
                    </span>
                  </h2>
                  <div className={style.Information}>
                    <p>{movieInfo.release_date}</p>
                    <div className={style.dot}></div>
                    <p>{genresList()}</p>
                    <div className={style.dot}></div>
                    <p>{rezult}</p>
                  </div>
  
                  <p style={{ marginTop: 0 }}>
                    {' '}
                    {rate / 10}/10{' '}
                    <img
                      src={star}
                      alt=""
                      width={15}
                      height={15}
                      className={style.playImg}
                    />{' '}
                  </p>
                </li>
                <li>
                  <h3>Overview</h3>
                  <p>{movieInfo.overview}</p>
                </li>
                <li>
                  {movieVideo === null ? (
                    ''
                  ) : (
                    <button
                      type="button"
                      className={style.trailerBtn}
                      onClick={() => setModal(true)}
                    >
                      <img
                        src={play}
                        alt=""
                        width={35}
                        height={35}
                        className={style.playImg}
                      />
                      Play Trailer
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
  );
}
FilmInfo.propTypes = {
  movieInfo: PropTypes.object.isRequired,
  backLinkLocationRef: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
