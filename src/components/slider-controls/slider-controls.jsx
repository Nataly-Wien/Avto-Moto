import './slider-controls.scss';
import React from "react";
import ArrowButton from '../arrow-button/arrow-button';
import Pictures from '../pictures/pictures';
import PropTypes from 'prop-types';

const SliderControls = ({photos, currentSlide, onPrevButtonClick, onNextButtonClick}) => {
  return (
    <div className="slider__controls slider-controls">
      <ArrowButton currentSlide={currentSlide} direction={`left`} legend={`Предыдущий`} onButtonClick={onPrevButtonClick} />
      <Pictures photos={photos} currentSlide={currentSlide} />
      <ArrowButton currentSlide={currentSlide} direction={`right`} legend={`Следующий`} onButtonClick={onNextButtonClick} />
    </div >
  );
};

SliderControls.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  currentSlide: PropTypes.number.isRequired,
  onPrevButtonClick: PropTypes.func.isRequired,
  onNextButtonClick: PropTypes.func.isRequired,
};

export default SliderControls;
