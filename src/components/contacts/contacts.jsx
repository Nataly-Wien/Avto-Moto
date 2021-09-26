import './contacts.scss';
import React from 'react';
import {CONTACTS} from '../../const';

const Contacts = () => {
  return (
    <div className="tabs__contacts contacts">
      <ul className="contacts__list">
        {CONTACTS.map((item, i) => {
          return (
            <li className="contacts__item" key={`contact-${i}`}>
              <p className="contacts__name">{item.contact}</p>
              <p className="contacts__value">{item.description}</p>
            </li>);
        })}
      </ul>
      <div className="contacts__wrapper">
        <img className="contacts__map-img" src="img/map.jpg" width="431" height="271"
          alt="Санкт-Петербург, набережная реки Карповки, дом 5" />
        <div className="contacts__map-container" id="map"></div>
      </div>
    </div>
  );
};

export default Contacts;
