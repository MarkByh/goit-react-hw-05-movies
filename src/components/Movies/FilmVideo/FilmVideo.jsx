import ReactPlayer from 'react-player/youtube';
import style from './FilmVideo.module.css';

const FilmVideo = ({ ky, setModal }) => {
  const BaseUrl = 'https://www.youtube.com/watch?v=';
  return (
    <div className={style.modal}>
      <div className={style.playerdiv}>
        <div className={style.nav}>
          <h2 style={{ paddingLeft: '15px' }}>Play Trailer</h2>
          <button className={style.button} onClick={() => setModal(false)}>
            X
          </button>
        </div>
        <ReactPlayer
          className={style.player}
          controls={true}
          url={`${BaseUrl}${ky}`}
          width={1280}
          height={720}
          playing={true}
        />
      </div>
    </div>
  );
};
export default FilmVideo;
