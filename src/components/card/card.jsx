import './card.scss';
import React from 'react';
import Features from '../features/features';
import Price from '../price/price';
import PropTypes from 'prop-types';
import {FEATURES} from '../../const';

const Card = ({card}) => {
  return (
    <section className="card">
      <h2 className="card__name">{card.name}</h2>
      <Features features={card.features} featureNames={FEATURES} />
      <Price discount={card.priceDiscount} full={card.priceFull} />
      <div className="card__wrapper">
        <a className="card__button card__button--request" href="#">Оставить заявку</a>
        <a className="card__button card__button--credit" href="#">В кредит от 11 000 <span className="rouble-symb">&#8381;</span></a>
      </div>
    </section>
  );
};

Card.propTypes = {
  card: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    priceDiscount: PropTypes.string,
    priceFull: PropTypes.string,
    credit: PropTypes.string,
  })),
};

export default Card;
