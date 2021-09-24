import './header.scss';
import React from 'react';
import HeaderMenu from '../header-menu/header-menu';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <a className="header__logo" href="#">
          <img className="header__logo-img" src="img/logo-avto-moto.png" width="134" height="55" alt="Логотип Avto Moto" />
        </a>
        <HeaderMenu />
      </nav>
    </header >
  );
};

export default Header;
