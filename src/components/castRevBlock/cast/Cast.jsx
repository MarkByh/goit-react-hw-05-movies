import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../../service/api';
import notFoundImage from 'images/notFoundImage.png';
import style from './Cast.module.css';
export default function Cast() {
  const [castInfo, setCastInfo] = useState([]);
  const { id } = useParams();

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
    <ul className={style.CastWrap}>
      {castInfo?.map(({ id, name, profile_path, character }) => (
        <li className={style.CastItem} key={id}>
          <img
            width={250}
            height={350}
            src={`${
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : notFoundImage
            }`}
            alt={name}
          />
          <div>
            <p className={style.actorname}>{name}</p>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
      {castInfo?.length === 0 && <h2>We don't have any cast for this movie</h2>}
    </ul>
  );
}
