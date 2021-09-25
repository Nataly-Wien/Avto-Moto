// import './tab-features.scss';
import React from 'react';

const TabFeatures = () => {
  return (
    <div className="tabs__features tabs-features">
      <h2 className="visually-hidden">Характеристики</h2>
      <ul className="tabs-features__list">
        <li className="tabs-features__item">
          <p className="tabs-features__feature">Трансмиссия</p>
          <p className="tabs-features__value">Роботизированная</p>
        </li>
      </ul>
    </div>
  );
};

export default TabFeatures;
