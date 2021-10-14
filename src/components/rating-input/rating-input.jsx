import './rating-input.scss';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {RATING_VALUES} from '../../const';

const RatingList = ({onRatingChange, rating}) => {
  const [currentRating, setCurrentRating] = useState(+rating);

  const handleRatingChange = (evt) => {
    setCurrentRating(+evt.target.value);
    onRatingChange(evt.target.value);
  }

  const handleKeydown = (evt) => {
    if (evt.key === `ArrowLeft`) {
      evt.preventDefault();

      if (currentRating > 1) {
        setCurrentRating(currentRating - 1);
      }
    }

    if (evt.key === `ArrowRight`) {
      evt.preventDefault();

      if (currentRating < 5) {
        setCurrentRating(currentRating + 1);
      }
    }

    if (evt.key === ` `) {
      evt.preventDefault();
      onRatingChange(currentRating.toString());
    }
  }

  return (
    <div className="rating-input" tabIndex="0" onKeyDown={handleKeydown}>
      {RATING_VALUES.map((item, i) => {
        const value = RATING_VALUES.length - i;

        return <React.Fragment key={item}>
          <input className="rating-input__input visually-hidden" name="rating" value={(value).toString()} id={`star${value}`}
            type="radio" checked={value === rating} onChange={handleRatingChange} tabIndex="-1" />
          <label htmlFor={`star${value}`} className={`rating-input__label${value <= currentRating ? ` rating-input__label--checked` : ``}`}>
            <span className="visually-hidden">{`${item}`}</span>
            <svg width="27" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13.569 0 3.046 9.523h9.858l-7.975 5.885 3.046 9.523-7.975-5.885-7.976 5.885 3.047-9.523L.664 9.523h9.858L13.57 0Z" fill="#BDBEC2" fillOpacity=".7" /></svg>
          </label>
        </React.Fragment>;
      })}
    </div>
  );
};

RatingList.propTypes = {
  rating: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default RatingList;
