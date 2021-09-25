// import './contacts.scss';
import React from 'react';

const Contacts = () => {
  return (
    <div className="tabs__contacts contacts">
      <h2 className="visually-hidden">Контакты</h2>
      <ul className="contacts__list">
        <li className="contacts__item">
          <p className="contacts__name">Адрес</p>
          <p className="contacts__value">Санкт-Петербург, набережная реки Карповки, дом 5</p>
        </li>
      </ul>
      <div className="contacts__map"></div>
    </div>
  );
};

export default Contacts;
