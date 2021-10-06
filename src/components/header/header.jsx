import './header.scss';
import React from 'react';
import Menu from '../menu/menu';
import {MAIN_MENU_ITEMS} from '../../const';
import logo from './../../img/logo-avto-moto.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <a className="header__logo header__logo--mainPage" href="#">
          <img className="header__logo-img" src={logo} width="134" height="55" alt="Логотип Avto Moto" />
        </a>
        <Menu menu={MAIN_MENU_ITEMS} type={`header`} />
      </nav>
    </header >
  );
};

export default React.memo(Header);
