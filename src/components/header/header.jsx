import './header.scss';
import React, {useEffect, useRef} from 'react';
import Menu from '../menu/menu';
import PropTypes from 'prop-types';
import {MAIN_MENU_ITEMS} from '../../const';
import logo from './../../img/logo-avto-moto.png';

const Header = ({isMenuOpen, onMenuButtonClick}) => {
  useEffect(() => {
    document.addEventListener(`mousedown`, handleMouseDown);

    return () => {
      document.removeEventListener(`mousedown`, handleMouseDown);
    };
  });

  const handleMouseDown = (evt) => {
    if (isMenuOpen && !evt.target.closest(`.header__nav`) && !evt.target.closest(`.menu--header`)) {
      onMenuButtonClick(false);
    }
  };

  const firstFocusTarget = useRef(null);
  const lastFocusTarget = useRef(null);

  const handleKeyDown = (evt) => {
    if (evt.key === 'Tab' && !evt.shiftKey && evt.target.closest(`.header__button`)) {
      evt.preventDefault();
      firstFocusTarget.current.focus();
    }

    if (evt.key === 'Tab' && evt.shiftKey && evt.target.closest(`.menu__link--header-first`)) {
      evt.preventDefault();
      lastFocusTarget.current.focus();
    }
  };

  return (
    <header className={`header${isMenuOpen ? ` overlay` : ``}`}>
      <nav className={`header__nav${isMenuOpen ? ` header__nav--mobile` : ``} container`} onKeyDown={handleKeyDown}>
        <a className="header__logo header__logo--mainPage" href="#" >
          <img className="header__logo-img" src={logo} width="134" height="55" alt="Логотип Avto Moto" />
        </a>
        <div className={`header__menu${!isMenuOpen ? ` header__menu--hidden` : ``}`}>
          <Menu menu={MAIN_MENU_ITEMS} type={`header`} firstFocusTarget={firstFocusTarget} />
        </div>
        <button className={`header__button header__button--${isMenuOpen ? `cross` : `burger`}`} type="button"
          aria-label="Меню сайта" ref={lastFocusTarget} onClick={() => onMenuButtonClick(!isMenuOpen)}>
          <span></span>
        </button>
      </nav>
    </header >
  );
};

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuButtonClick: PropTypes.func.isRequired,
};

export default React.memo(Header);
