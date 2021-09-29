import './menu.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({menu, type}) => {
  return (
    <ul className={`menu menu--${type}`}>
      {menu.map((item, i) => {
        return (
          <li className="menu__item" key={`${item}-${i}`}>
            <a className="menu__link" href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};

export default Menu;
