import './rating.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {RATING_VALUES} from '../../const';

const Rating = ({rating}) => {
  return (
    <div className="mention__rating rating">
      <span className="visually-hidden">{`Рейтинг - ${rating}`}</span>
      <ul className="rating__stars-list">
        {RATING_VALUES.map((item, i) => {
          return (
            <li className="rating__stars-item" key={`star-${item}`}>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z"
                  fill={`${i <= rating - 1 ? `#D12136` : `#BDBEC2`}`} fillOpacity={`${i <= rating - 1 ? `1` : `0.7`}`} />
              </svg>
            </li>
          );
        })}
      </ul>
      <p className="rating__note">
        {rating > 2 ? `Советует` : `Не советует`}
      </p>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
