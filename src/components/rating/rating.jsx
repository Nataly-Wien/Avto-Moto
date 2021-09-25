// import './rating.scss';
import React from 'react';

const Rating = () => {
  return (
    <div className="mention__rating rating">
      <div className="rating__stars">
        <span className="visually-hidden">Рейтинг</span>
        {/* <!--добавлять значение --> */}
      </div>
      <p className="rating__note">Советует</p>
    </div>
  );
};

export default Rating;
