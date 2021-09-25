import './slider.scss';
import React from "react";
import SliderControls from '../slider-controls/slider-controls';
import PropTypes from 'prop-types';
import {CURRENT_SLIDE} from '../../const';

const currentPhoto = CURRENT_SLIDE;

const Slider = ({photos}) => {
  return (
    <section className="slider">
      <h2 className="visually-hidden">Фотографии Марпех 11</h2>
      <span className="slider__mark">new model</span>
      <img className="slider__img-big" src={`${photos[currentPhoto].picture}`} width="600" height="375"
        alt={`${photos[currentPhoto].description}`} />
      <SliderControls photos={photos} currentSlide={currentPhoto} />
    </section>
  );
};

Slider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    description: PropTypes.string,
  })),
};

export default Slider;
