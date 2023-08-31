import notFoundImage from 'images/pngegg.png';
import play from 'images/play.svg';
import star from 'images/star-full.svg';
import style from './TvInfo.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Cast from 'components/castRevBlock/cast/Cast';
// import Similar from 'components/castRevBlock/similar/Similar';
// import { useEffect } from 'react';

// import { Outlet, useLocation, useParams } from 'react-router-dom';
// import { getMoviesVideo } from '../../../service/api';
export default function TvInfo({
  TvInfo,
  backLinkLocationRef,
  setModal,
  movieVideo,
  setMovieVideo,
  id,
}) {
  const navigate = useNavigate();
//   useEffect(() => {
//     getMoviesVideo(id)
//       .then(response => {
//         if (response.results.length === 0) {
//           setMovieVideo(null);
//         }
//         setMovieVideo(response.results[0].key);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     // .finally(setIsLoading(false));
//   }, [id, setMovieVideo]);

  const image = TvInfo.poster_path
    ? `https://image.tmdb.org/t/p/w500${TvInfo.poster_path}`
    : notFoundImage;
  const bgImage = TvInfo.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${TvInfo.backdrop_path}`
    : null;
  console.log(TvInfo.id);
let seasons = 'season'
 if (TvInfo.number_of_seasons>1) {
    seasons= 'seasons'
    
 }

//   const time = TvInfo.runtime;
//   let mins = time % 60;
//   let hours = (time - mins) / 60;
//   if (mins < 10) mins = '0' + mins;
  let newDate = new Date(TvInfo.first_air_date
    );

//   let rezult = hours + 'h ' + mins + 'm';

  const rate = Math.ceil(TvInfo.vote_average * 10);
  const genresList = () => TvInfo.genres.map(genre => genre.name).join(', ');
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
            background: `radial-gradient(circle, rgba(84,82,83,0.9430147058823529) 0%, rgba(10,12,14,1) 100%)`,
          }}
        >
          <div className={style.cnt}>
            
            <NavLink onClick={() => navigate(-1)}> Go back</NavLink>
  
            <div className={style.filmInfo}>
              <img src={image} alt={TvInfo.title} className={style.filmImg} />
              <ul>
                <li>
                  <h2 className={style.title}>
                    {TvInfo.original_name}
                    {'   '}
                    <span style={{ fontWeight: 100, fontSize: 30 }}>
                      ({newDate.getFullYear()})
                    </span>
                  </h2>
                  <div className={style.Information}>
                    <p>{TvInfo.first_air_date}</p>
                    <div className={style.dot}></div>
                    <p>{genresList()}</p>
                    <div className={style.dot}></div>
                    <p>{TvInfo.number_of_seasons
} {seasons}</p>
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
                <li> <h3>Newest episode:</h3>
                <div className={style.episodeDiv}> 
                     
                      <img  width={400} src ={`https://image.tmdb.org/t/p/w500${TvInfo.last_episode_to_air.still_path}`} alt='g'></img>
                     <div className={style.episodeInfo}>
                          <div style={{paddingLeft: '20px'}}>
                              <p>{TvInfo.last_episode_to_air.episode_number + ' episode'} </p>
                              <p> {TvInfo.last_episode_to_air.name}       ({TvInfo.last_episode_to_air.air_date})</p>
                          </div>
                     </div>
                </div>
                </li>
                <li>
                  <h3>Overview</h3>
                  <p>{TvInfo.overview}</p>
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
TvInfo.propTypes = {
  movieInfo: PropTypes.object.isRequired,
  backLinkLocationRef: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
