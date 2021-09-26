import './card.scss';
import React from 'react';
import Features from '../features/features';
import Price from '../price/price';
import PropTypes from 'prop-types';
import {FEATURES} from '../../const';
import {cardType} from '../../types-validation';

const Card = ({card}) => {
  return (
    <section className="page-main__card card">
      <h2 className="card__name">{card.name}</h2>
      <Features features={card.features} featureNames={FEATURES} />
      <Price discount={card.priceDiscount} full={card.priceFull} />
      <div className="card__wrapper">
        <a className="card__button button button--red" href="#">Оставить заявку</a>
        <a className="card__button button button--white" href="#">В кредит от 11 000 <span className="rouble-symb">&#8381;</span></a>
      </div>
    </section>
  );
};

Card.propTypes = {
  card: PropTypes.arrayOf(cardType),
};

export default Card;
