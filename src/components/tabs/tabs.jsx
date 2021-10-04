import './tabs.scss';
import React, {useState} from 'react';
import TabsControls from '../tabs-controls/tabs-controls';
import TabsFeatures from '../tabs-features/tabs-features';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import PropTypes from 'prop-types';
import {cardType} from '../../types-validation';
import {CURRENT_TAB} from '../../const';

const Tabs = ({card, onNewCommentButtonClick}) => {
  const [currentTab, setCurrentTab] = useState(CURRENT_TAB);

  const handleTabClick = (id) => setCurrentTab(id);

  return (
    <section className="page-main__tabs tabs">
      <TabsControls currentTab={currentTab} onTabClick={handleTabClick}>
        <TabsFeatures features={card.fullFeatures} />
        <Reviews reviews={card.reviews} onNewCommentButtonClick={onNewCommentButtonClick} />
        <Contacts />
      </TabsControls>
    </section>
  );
};

Tabs.propTypes = {
  card: cardType,
  onNewCommentButtonClick: PropTypes.func.isRequired,
};

export default Tabs;
