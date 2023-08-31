import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const RatingProgressbar = ({ rating }) => {
  let rete;
  if (rating === 0) {
    rete = 'NR';
  } else {
    rete = Math.ceil(rating * 10) / 10;
  }

  return (
    <CircularProgressbar
      value={rating}
      maxValue={10}
      text={rete}
      background
      backgroundPadding={6}
      styles={buildStyles({
        pathColor: rating < 5 ? '#f90032' : rating < 7 ? '#ffa21f' : '#1c936c',
        height: '100%',
        width: '100%',
        textSize: '27px',
        fontWeight: '500',
        strokeLinecap: 'butt',
        transition: 'stroke-dashoffset 0.5s ease 0s',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
        pathTransitionDuration: 0.5,
        textColor: 'white',
        trailColor: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.592)',
      })}
      //   styles={buildStyles({
      //     // Rotation of path and trail, in number of turns (0-1)
      //     rotation: 0.25,
      //     height: '100%',
      //     width: '100%',
      //     // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      //     strokeLinecap: 'butt',

      //     // Text size
      //     textSize: '14px',

      //     // How long animation takes to go from one percentage to another, in seconds
      //     pathTransitionDuration: 0.5,

      //     // Can specify path transition in more detail, or remove it entirely
      //     // pathTransition: 'none',

      //     // Colors
      //     pathColor: rating < 5 ? 'red' : rating < 7 ? 'yellow' : 'green',
      //     textColor: '#f88',
      //     trailColor: '#d6d6d6',
      //     backgroundColor: '#3e98c7',
      //   })}
    />
  );
};

RatingProgressbar.propTypes = {
  rating: PropTypes.string,
};
