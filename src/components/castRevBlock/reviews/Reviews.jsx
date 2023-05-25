import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Reviews.module.css';
import { getReviews } from '../../../service/api';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id)
      .then(response => {
        setReviews(response.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <ul className={style.revList}>
        {reviews?.map(item => (
          <li className={style.revItem} key={item.id}>
            <h3>Author: {item.author}</h3>

            <p>{item.content}</p>
          </li>
        ))}
      </ul>

      {reviews?.length === 0 && (
        <h2>We don't have any reviews for this movie</h2>
      )}
    </div>
  );
}
