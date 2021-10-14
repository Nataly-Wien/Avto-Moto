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

const ReviewForm = ({isShow, onSendButtonClick, onCloseClick}) => {

  const [inputs, setInputs] = useState(EMPTY_INPUTS);
  const [isExitWithSaving, setIsExitWithSaving] = useState(false);


  const saveToLocalStorage = (data) => {
    Object.keys(data).forEach((item) => {
      localStorage.setItem(item, data[item]);
    });
  };


  const getNewInputValues = (name, value) => {
    const newState = {
      ...inputs,
    };

    newState[name] = value;

    return newState;
  };


  const handleInputChange = (evt, fieldName) => setInputs(getNewInputValues(fieldName, evt.target.value));


  const handleRatingChange = (rating) => setInputs(getNewInputValues(`rating`, rating));


  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!inputs.name.trim()) {
      setInputs(getNewInputValues(`name`, ``));
      return;
    }

    if (!inputs.comment.trim()) {
      setInputs(getNewInputValues(`comment`, ``));
      return;
    }

    setIsExitWithSaving(true);
    onSendButtonClick({...inputs, dateTime: dayjs().toISOString()});
  };


  const handleKeydown = (evt) => {
    if (evt.key === 'Tab' && !evt.shiftKey && evt.target.closest(`.review-form__close-btn`)) {
      evt.preventDefault();
      nameInput.current.focus();
    }

    if (evt.key === 'Tab' && evt.shiftKey && evt.target.closest(`.review-form__control--input-name`)) {
      evt.preventDefault();
      closeBtn.current.focus();
    }
  };


  const nameInput = useRef();
  const closeBtn = useRef();

  useEffect(() => {
    setInputs(EMPTY_INPUTS);

    if (nameInput.current) {
      nameInput.current.focus();
    }

    if (isExitWithSaving) {
      saveToLocalStorage(inputs);
    }
  }, [isExitWithSaving, isShow]);

  return (
    <form className="review__form review-form" action="https://echo.htmlacademy.ru/" method="post" name="review" onKeyDown={handleKeydown} onSubmit={handleFormSubmit}>
      <div className="review-form__wrapper">
        <div>
          <p className="review-form__input-wrapper review-form__input-wrapper--asterisk review-form__input-wrapper--name">
            <label className="review-form__label review-form__label--name" htmlFor="name-field">
              Пожалуйста, заполните поле
              <span className="visually-hidden">введите свое имя</span>
            </label>
            <input className="review-form__control review-form__control--input review-form__control--input-name" ref={nameInput} type="text" name="username" id="name-field" value={inputs.name} placeholder="Имя" onChange={(evt) => handleInputChange(evt, `name`)} required={true} />
          </p>
          <p className="review-form__input-wrapper">
            <label className="visually-hidden" htmlFor="plus-field">Достоинства модели</label>
            <input className="review-form__control review-form__control--input" type="text" name="plus" id="plus-field" value={inputs.plus} placeholder="Достоинства" onChange={(evt) => handleInputChange(evt, `plus`)} />
          </p>
          <p className="review-form__input-wrapper">
            <label className="visually-hidden" htmlFor="minus-field">Недостатки модели</label>
            <input className="review-form__control review-form__control--input" type="text" name="minus" id="minus-field" value={inputs.minus} placeholder="Недостатки" onChange={(evt) => handleInputChange(evt, `minus`)} />
          </p>
        </div>
        <div className="review-form__right-wrapper">
          <div className="review-form__rating">
            <p className="review-form__rating-label">Оцените товар:</p>
            <RatingInput rating={inputs.rating.toString()} onRatingChange={handleRatingChange} key={isShow} />
          </div>
          <p className="review-form__input-wrapper review-form__input-wrapper--asterisk">
            <label className="visually-hidden" htmlFor="comment-field">Ваш комментарий</label>
            <textarea className="review-form__control review-form__control--textarea" name="comment" id="comment-field" cols="28" rows="5" value={inputs.comment} placeholder="Комментарий" onChange={(evt) => handleInputChange(evt, `comment`)} required={true}></textarea>
          </p>
        </div>
      </div>
      <button className="review-form__send-btn button button--red" type="submit">Оставить отзыв</button>
      <button className="review-form__close-btn" type="button" onClick={() => onCloseClick(false)} ref={closeBtn}>
        <span className="visually-hidden">Закрыть</span>
      </button>
    </form>
  );
};

ReviewForm.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onSendButtonClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default ReviewForm;
