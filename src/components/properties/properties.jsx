import './properties.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Properties = ({plus, minus}) => {
  return (
    <ul className="mention__properties properties">
      <li className="properties__item properties__item--plus">
        <p className="properties__name properties__name--plus">Достоинства</p>
        <p className="properties__value">{plus}</p>
      </li>
      <li className="properties__item properties__item--minus">
        <p className="properties__name properties__name--minus">Недостатки</p>
        <p className="properties__value">{minus}</p>
      </li>
    </ul>
  );
};

Properties.propTypes = {
  plus: PropTypes.string.isRequired,
  minus: PropTypes.string.isRequired,
};

export default Properties;
