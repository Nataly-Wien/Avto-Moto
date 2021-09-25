// import './reviews.scss';
import React from 'react';
import Mention from '../mention/mention';
import {REVIEWS_LIST} from '../../const';

const Reviews = () => {
  return (
    <div className="tabs__reviews reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <button className="reviews__button">Оставить отзыв</button>
      <ul>
        {REVIEWS_LIST.map((item, i) => {
          return (
            <li className="reviews__item" key={`review${i}`}>
              <Mention />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
