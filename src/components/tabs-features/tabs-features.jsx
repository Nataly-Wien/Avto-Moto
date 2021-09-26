import './tab-features.scss';
import React from 'react';
import PropTypes from 'prop-types';

const TabFeatures = ({features}) => {
  return (
    <div className="tabs__features tabs-features">
      <h2 className="visually-hidden">Характеристики</h2>
      <ul className="tabs-features__list">
        {features.map((item, i) => {
          return (
            <li className="tabs-features__item" key={`${item}-${i}`}>
              <p className="tabs-features__feature">{item.feature}</p>
              <p className="tabs-features__value">{item.description}</p>
            </li>);
        })}
      </ul>
    </div>
  );
};

TabFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
    description: PropTypes.string,
  })),
};

export default TabFeatures;
