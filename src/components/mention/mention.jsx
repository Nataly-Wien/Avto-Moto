// import './mention.scss';
import React from 'react';
import Properties from '../properties/properties';
import Comment from '../comment/comment';
import Rating from '../rating/rating';

const Mention = () => {
  return (
    <div className="reviews__mention mention">
      <h3 className="mention__name">Борис Иванов</h3>
      <Properties />
      <Comment />
      <Rating />
      <div className="mention__wrapper">
        <p className="mention__time">1 минуту назад</p>
        <button className="mention__reply">Ответить</button>
      </div>
    </div>
  );
};

export default Mention;
