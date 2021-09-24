
import './header-menu.scss';
import React from 'react';
import {MAIN_MENU_ITEMS} from '../../const';

const HeaderMenu = () => {
  return (
    <ul className="header__menu header-menu">
      {MAIN_MENU_ITEMS.map((item, i) => {
        return (
          <li className="header-menu__item" key={`${item}-${i}`}>
            <a className="header-menu__link" href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderMenu;
