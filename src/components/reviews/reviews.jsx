import './reviews.scss';
import React from 'react';
import Mention from '../mention/mention';
import PropTypes from 'prop-types';
import {reviewType} from '../../types-validation';

const Reviews = ({reviews, onNewCommentButtonClick}) => {
  return (
    <div className="tabs__reviews reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <button className="reviews__button button button--white" type="button" onClick={() => onNewCommentButtonClick(true)}>Оставить отзыв</button>
      <ul className="reviews__list">
        {reviews.map((item) => {
          return (
            <li className="reviews__item" key={`review-${item.dateTime}`}>
              <Mention mention={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewType).isRequired,
  onNewCommentButtonClick: PropTypes.func.isRequired,
};

export default Reviews;
