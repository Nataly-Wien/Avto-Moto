import './pictures.scss';
import React from "react";
import PropTypes from 'prop-types';

const Pictures = ({photos, currentSlide}) => {
  return (
    <ul className="slider-controls__pictures pictures">
      {photos.map((item, i) => {
        return (<li className="pictures__item" key={`photo-${i}`}>
          <img className={`pictures__img-small${i === currentSlide ? ` pictures__img-small--active` : ``}`} src={`${item.picture}`} width="128" height="80" alt={`${item.description}`} />
        </li>);
      })}
    </ul>
  );
};

Pictures.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    description: PropTypes.string,
  })),
  currentSlide: PropTypes.number,
};

export default Pictures;
