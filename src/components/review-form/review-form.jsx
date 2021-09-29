import './review-form.scss';
import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import RatingInput from '../rating-input/rating-input';
import PropTypes from 'prop-types';

const EMPTY_INPUTS = {
  name: ``,
  plus: ``,
  minus: ``,
  rating: `0`,
  comment: ``,
};

const ReviewForm = ({onSendButtonClick}) => {

  const getFromLocalStorage = () => {
    let data = {};
    Object.keys(EMPTY_INPUTS).map((item) => {
      const field = localStorage.getItem(item) || EMPTY_INPUTS[item];
      data = {...data, [item]: field};
    });

    return data;
  };

  const [inputs, setInputs] = useState(getFromLocalStorage());
  const [isExitWithSaving, setIsExitWithSaving] = useState(false);

  const getNewInputValues = (name, value) => {
    const newState = {
      ...inputs,
    };

    newState[name] = value;

    return newState;
  };

  const onFieldChange = (evt, fieldName) => setInputs(getNewInputValues(fieldName, evt.target.value));

  const saveToLocalStorage = (data) => {
    Object.keys(data).map((item) => {
      localStorage.setItem(item, data[item]);
    });
  };
  useEffect(() => {
    if (isExitWithSaving) {
      saveToLocalStorage(inputs);
    }

  }, [isExitWithSaving]);

  return (
    <form className="review__form review-form" method="post" name="review">
      <div className="review-form__wrapper">
        <div>
          <p className="review-form__input-wrapper review-form__input-wrapper--asterisk review-form__input-wrapper--name">
            <label className="review-form_label review-form_label--name" htmlFor="name-field">
              Пожалуйста, заполните поле
              <span className="visually-hidden">введите свое имя</span>
            </label>
            <input autoFocus className="review-form__control review-form__control--input" type="text" name="username" id="name-field" value={inputs.name} placeholder="Имя" onChange={(evt) => onFieldChange(evt, `name`)} required />
          </p>
          <p className="review-form__input-wrapper">
            <label className="visually-hidden" htmlFor="plus-field">Достоинства модели</label>
            <input className="review-form__control review-form__control--input" type="text" name="plus" id="plus-field" value={inputs.plus} placeholder="Достоинства" onChange={(evt) => onFieldChange(evt, `plus`)} />
          </p>
          <p className="review-form__input-wrapper">
            <label className="visually-hidden" htmlFor="minus-field">Недостатки модели</label>
            <input className="review-form__control review-form__control--input" type="text" name="minus" id="minus-field" value={inputs.minus} placeholder="Недостатки" onChange={(evt) => onFieldChange(evt, `minus`)} />
          </p>
        </div>
        <div className="review-form__right-wrapper">
          <div className="review-form__rating">
            <p className="review-form__rating-label">Оцените товар:</p>
            <RatingInput rating={inputs.rating.toString()} onChange={(evt) => onFieldChange(evt, `rating`)} />
          </div>
          <p className="review-form__input-wrapper review-form__input-wrapper--asterisk">
            <label className="visually-hidden" htmlFor="comment-field">Ваш комментарий</label>
            <textarea className="review-form__control review-form__control--textarea" name="comment" id="comment-field" cols="30" rows="5" value={inputs.comment} placeholder="Комментарий" onChange={(evt) => onFieldChange(evt, `comment`)} required></textarea>
          </p>
        </div>
      </div>
      <button className="button button--red" type="button" onClick={() => {
        setIsExitWithSaving(true);
        onSendButtonClick({...inputs, dateTime: dayjs().toISOString()});
      }}>Оставить отзыв</button>
    </form>
  );
};

ReviewForm.propTypes = {
  onSendButtonClick: PropTypes.func.isRequired,
};

export default ReviewForm;
