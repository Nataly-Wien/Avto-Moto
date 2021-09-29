import './review-window.scss';
import React from 'react';
import ReviewForm from '../review-form/review-form';
import PropTypes from 'prop-types';

const ReviewWindow = ({onSendButtonClick, onCloseClick}) => {
  return (
    <div className="review">
      <h2 className="review__header">Оставить отзыв</h2>
      <ReviewForm onSendButtonClick={onSendButtonClick} />
      <button className="review__close-btn" type="button" onClick={() => onCloseClick(false)}>
        <span className="visually-hidden">Закрыть</span>
      </button>
    </div>
  );
};

ReviewWindow.propTypes = {
  onSendButtonClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default ReviewWindow;
