import { useRef, useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails, getMoviesVideo } from '../../service/api';
import FilmVideo from 'components/FilmVideo/FilmVideo';
import Loader from 'components/loader/Loader';
// import AdditionalInformationWrap from 'components/castRevBlock/castRevBlock';
import FilmInfo from 'components/FilmPageInfo/FilmPageInfo';
import Similar from 'components/castRevBlock/similar/Similar';
import Cast from 'components/castRevBlock/cast/Cast';
export default function FilmDetails() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Home');
  const [movieInfo, setMovieInfo] = useState(null);
  const [movieVideo, setMovieVideo] = useState(null);
  const [modal, setModal] = useState(false);
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
      });

    // getMoviesVideo(id)
    //   .then(response => {
    //     setMovieVideo(response.results[0].key);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // .finally(setIsLoading(false));
  }, [id]);
  console.log(movieVideo);
  return (
    <>
      {movieInfo ? (
        <div style={{ position: 'relative' }}>
          <FilmInfo
            id={id}
            movieInfo={movieInfo}
            movieVideo={movieVideo}
            backLinkLocationRef={backLinkLocationRef.current}
            setModal={setModal}
            setMovieVideo={setMovieVideo}
          />
          {/* <AdditionalInformationWrap /> */}
          <div className="container">
            <Cast></Cast>
            <Similar></Similar>
          </div>
          {isLoading && (
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          )}
          {modal === true ? (
            <FilmVideo ky={movieVideo} setModal={setModal}></FilmVideo>
          ) : null}
        </div>
      ) : (
        <h1>No information about this film</h1>
      )}
    </>
  );
}
