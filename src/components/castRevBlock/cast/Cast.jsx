import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../../service/api';
// import notFoundImage from 'images/notFoundImage.png';
import NoPhoto from 'images/NoPhoto.jpg';
import style from './Cast.module.css';

export default function Cast() {
  const [castInfo, setCastInfo] = useState([]);
  const { id } = useParams();
  // let showedCast;

  // if (window.innerWidth <= 1200) {
  //   showedCast = castInfo.slice(0, 5);
  // } else showedCast = castInfo.slice(0, 11);
  // console.log(showedCast);
  useEffect(() => {
    getMovieCredits(id)
      .then(response => {
        setCastInfo(response.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h2>Cast</h2>

      <ul className={style.CastWrap}>
        {castInfo?.map(({ id, name, profile_path, character }) => (
          <li className={style.CastItem} key={id}>
            <img
              width={145}
              height={175}
              src={`${
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : NoPhoto
              }`}
              alt={name}
              className={style.castImg}
            />

            <div>
              <p className={style.actorname}>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
        {castInfo?.length === 0 && (
          <h2>We don't have any cast for this movie</h2>
        )}
      </ul>
    </div>
  );
}
