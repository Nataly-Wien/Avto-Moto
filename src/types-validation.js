import PropTypes from 'prop-types';

const reviewType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  plus: PropTypes.string,
  minus: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.number,
  advice: PropTypes.string,
  time: PropTypes.string,
}));

const cardType = PropTypes.shape({
  name: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  priceDiscount: PropTypes.string,
  priceFull: PropTypes.string,
  credit: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    description: PropTypes.string,
  })),
  fullFeatures: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
    description: PropTypes.string,
  })),
  reviews: reviewType,
});

export {cardType, reviewType};
