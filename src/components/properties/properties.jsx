// import './properties.scss';
import React from 'react';

const Properties = () => {
  return (
    <ul className="mention__properties properties">
      <li className="properties__item properties__item--plus">
        <p className="properties__name">Достоинства</p>
        <p className="properties__value">мощность, внешний вид</p>
      </li>
      <li className="properties__item properties__item--minus">
        <p className="properties__name">Недостатки</p>
        <p className="properties__value">Слабые тормозные колодки (пришлось заменить)</p>
      </li>
    </ul>
  );
};

export default Properties;
