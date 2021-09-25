import './slider-controls.scss';
import React from "react";
import ArrowButton from '../arrow-button/arrow-button';
import Pictures from '../pictures/pictures';
import PropTypes from 'prop-types';

const SliderControls = ({photos, currentSlide}) => {
  return (
    <div className="slider__controls slider-controls">
      <ArrowButton currentSlide={currentSlide} direction={`left`} legend={`Предыдущий`} />
      <Pictures photos={photos} />
      <ArrowButton currentSlide={currentSlide} direction={`right`} legend={`Следующий`} />
    </div >
  );
};

SliderControls.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    description: PropTypes.string,
  })),
  currentSlide: PropTypes.number,
};

export default SliderControls;
