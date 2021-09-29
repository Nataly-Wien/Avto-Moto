import './review-form.scss';
import React, {useState, useEffect, useRef} from 'react';
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

const ReviewForm = ({isShow, onSendButtonClick}) => {

  const getFromLocalStorage = () => {
    let data = {};
    Object.keys(EMPTY_INPUTS).map((item) => {
      const field = localStorage.getItem(item) || EMPTY_INPUTS[item];
      data = {...data, [item]: field};
    });

    return data;
  };

  const saveToLocalStorage = (data) => {
    Object.keys(data).map((item) => {
      localStorage.setItem(item, data[item]);
    });
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

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    setIsExitWithSaving(true);
    onSendButtonClick({...inputs, dateTime: dayjs().toISOString()});
  };

  const nameInput = useRef(null);

  useEffect(() => {
    setInputs(getFromLocalStorage());

    if (nameInput.current) {
      nameInput.current.focus();
    }

    if (isExitWithSaving) {
      saveToLocalStorage(inputs);
    }

  }, [isExitWithSaving, isShow]);

  return (
    <form className="review__form review-form" action="https://echo.htmlacademy.ru/" method="post" name="review" onSubmit={onFormSubmit}>
      <div className="review-form__wrapper">
        <div>
          <p className="review-form__input-wrapper review-form__input-wrapper--asterisk review-form__input-wrapper--name">
            <label className="review-form__label review-form__label--name" htmlFor="name-field">
              Пожалуйста, заполните поле
              <span className="visually-hidden">введите свое имя</span>
            </label>
            <input className="review-form__control review-form__control--input" ref={nameInput} type="text" name="username" id="name-field" value={inputs.name} placeholder="Имя" onChange={(evt) => onFieldChange(evt, `name`)} autoFocus="autoFocus" required={true} />
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
            <textarea className="review-form__control review-form__control--textarea" name="comment" id="comment-field" cols="28" rows="5" value={inputs.comment} placeholder="Комментарий" onChange={(evt) => onFieldChange(evt, `comment`)} required={true}></textarea>
          </p>
        </div>
      </div>
      <button className="button button--red" type="submit">Оставить отзыв</button>

    </form>
  );
};

ReviewForm.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onSendButtonClick: PropTypes.func.isRequired,
};

export default ReviewForm;
