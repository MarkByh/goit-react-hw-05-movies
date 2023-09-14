import { useRef, useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getTvDetails } from '../../service/api';
// import FilmVideo from 'components/Movies/FilmVideo/FilmVideo';
import Loader from 'components/Shared/loader/Loader';
// import AdditionalInformationWrap from 'components/castRevBlock/castRevBlock';
import TvInfo from 'components/TVShows/TvPageInfo/TvInfo';
// import Similar from 'components/castRevBlock/similar/Similar';
// import Cast from 'components/castRevBlock/cast/Cast';
export default function TvDetails() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Home');
  const [TvInf, setTvInfo] = useState(null);
  // const [Tvideo, setTvVideo] = useState(null);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTvDetails(id)
      .then(response => {
        setTvInfo(response);
      })
      .catch(error => {
        console.log(error);
      });

    
  }, [id]);
  console.log(TvInf);
  return (
    <>
      {TvInf ? (
        <div style={{ position: 'relative' }}>
          <TvInfo
            id={id}
            TvInfo={TvInf}
            // movieVideo={Tvideo}
            backLinkLocationRef={backLinkLocationRef.current}
            setModal={setModal}
            // setMovieVideo={setTvVideo}
          />
          
          <div className="container">
            {/* <Cast></Cast>
            <Similar></Similar> */}
          </div>
          {isLoading && (
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          )}
          {/* {modal === true ? (
            <FilmVideo ky={movieVideo} setModal={setModal}></FilmVideo>
          ) : null} */}
        </div>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
}
