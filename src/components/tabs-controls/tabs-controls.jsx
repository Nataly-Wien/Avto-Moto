import './tabs-controls.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {TABS} from '../../const';

import { } from '../../const';

const TabControls = ({currentTab, onTabClick, children}) => {
  return (
    <div>
      <ul className="tabs__controls tabs-controls">
        {TABS.map((item, i) => {
          return (
            <li className="tabs-controls__item" key={`${item}-${i}`}>
              <button className={`tabs-controls__button${i === currentTab ? ` tabs-controls__button--current`
                : ``}`} type="button" onClick={() => onTabClick(i)}>
                {item}
              </button>
            </li>);
        })}
      </ul >
      {React.Children.toArray(children)[currentTab]}
    </div>
  );
};

TabControls.propTypes = {
  currentTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TabControls;
