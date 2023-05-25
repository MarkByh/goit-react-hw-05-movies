import { useRef, useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../service/api';

import Loader from 'components/loader/Loader';
import AdditionalInformationWrap from 'components/castRevBlock/castRevBlock';
import FilmInfo from 'components/FilmPageInfo/FilmPageInfo';

export default function FilmDetails() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Home');
  const [movieInfo, setMovieInfo] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(id)
      .then(response => {
        setMovieInfo(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [id]);

  return (
    <>
      {movieInfo ? (
        <>
          <FilmInfo
            movieInfo={movieInfo}
            backLinkLocationRef={backLinkLocationRef.current}
          />
          <AdditionalInformationWrap />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <h1>No information about this film</h1>
      )}
    </>
  );
}
