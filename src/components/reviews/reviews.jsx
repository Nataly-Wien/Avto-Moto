import './reviews.scss';
import React from 'react';
import Mention from '../mention/mention';
import {reviewType} from '../../types-validation';

const Reviews = ({reviews}) => {
  return (
    <div className="tabs__reviews reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <button className="reviews__button button button--white">Оставить отзыв</button>
      <ul className="reviews__list">
        {reviews.map((item, i) => {
          return (
            <li className="reviews__item" key={`review-${i}`}>
              <Mention mention={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  reviews: reviewType,
};

export default Reviews;
