import './price.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Price = ({discount, full}) => {
  return (
    <div className="card__price price">
      <p className="price__discount">
        <span className="visually-hidden">Новая цена </span>{`${discount} `}<span className="rouble-symb">&#8381;</span>
      </p>
      <p className="price__full">
        <span className="visually-hidden">Старая цена </span>{`${full} `}<span className="rouble-symb">&#8381;</span>
      </p>
    </div>
  );
};

Price.propTypes = {
  discount: PropTypes.string.isRequired,
  full: PropTypes.string.isRequired,
};

export default Price;
