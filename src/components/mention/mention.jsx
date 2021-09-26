import './mention.scss';
import React from 'react';
import Properties from '../properties/properties';
import Comment from '../comment/comment';
import Rating from '../rating/rating';
import {reviewType} from '../../types-validation';

const Mention = ({mention}) => {
  return (
    <div className="reviews__mention mention">
      <h3 className="mention__name">{mention.name}</h3>
      <Properties plus={mention.plus} minus={mention.minus} />
      <Comment comment={mention.comment} />
      <Rating rating={mention.rating} advice={mention.advice} />
      <div className="mention__wrapper">
        <span className="mention__time">{mention.time}</span>
        <button className="mention__reply">Ответить</button>
      </div>
    </div>
  );
};

Mention.propTypes = {
  mention: reviewType,
};

export default Mention;
