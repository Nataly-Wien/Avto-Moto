import './mention.scss';
import React from 'react';
import dayjs from 'dayjs';
import Properties from '../properties/properties';
import Comment from '../comment/comment';
import Rating from '../rating/rating';
import {reviewType} from '../../types-validation';

const getWordForm = (number, forms) => {
  const cases = [2, 0, 1, 1, 1, 2];
  number = Math.floor(Math.abs(number)) % 100;

  return forms[number > 4 && number < 20 ? 2 : cases[Math.min(number % 10, 5)]];
};

const Mention = ({mention}) => {
  const getCommentDateTime = (dateTime) => {
    let diff = dayjs(Date.now()).diff(dateTime, `year`);

    if (diff > 0) {
      return (`${diff} ${getWordForm(diff, [`год`, `года`, `лет`])}`);
    }

    diff = dayjs(Date.now()).diff(dateTime, `month`);

    if (diff > 0) {
      return (`${diff} ${getWordForm(diff, [`месяц`, `месяца`, `месяцев`])}`);
    }

    diff = dayjs(Date.now()).diff(dateTime, `day`);

    if (diff > 0) {
      return (`${diff} ${getWordForm(diff, [`день`, `дня`, `дней`])}`);
    }

    diff = dayjs(Date.now()).diff(dateTime, `hour`);

    if (diff > 0) {
      return (`${diff} ${getWordForm(diff, [`час`, `часа`, `часов`])}`);
    }

    diff = dayjs(Date.now()).diff(dateTime, `minute`);
    return (`${diff} ${getWordForm(diff, [`минуту`, `минуты`, `минут`])}`);
  };

  return (
    <div className="reviews__mention mention">
      <h3 className="mention__name">{mention.name}</h3>
      <Properties plus={mention.plus} minus={mention.minus} />
      <Comment comment={mention.comment} />
      <Rating rating={+mention.rating} />
      <div className="mention__wrapper">
        <span className="mention__time">{`${getCommentDateTime(mention.dateTime)} назад`}</span>
        <button className="mention__reply" type="button">Ответить</button>
      </div>
    </div>
  );
};

Mention.propTypes = {
  mention: reviewType,
};

export default Mention;
