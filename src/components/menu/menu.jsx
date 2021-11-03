import './menu.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({menu, type, firstFocusTarget}) => {
  return (
    <ul className={`menu menu--${type}`} >
      {menu.map((item, i) => {
        return (
          <li className={`menu__item menu__item menu__item--${type}`} key={`${item}-${type}`}>
            <a className={`menu__link${i === 0 ? ` menu__link--header-first` : ``}`} href="#"
              ref={i === 0 ? firstFocusTarget : undefined} >{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  firstFocusTarget: PropTypes.shape(),
};

export default Menu;
