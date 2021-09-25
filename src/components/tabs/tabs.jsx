// import './tabs.scss';
import React from 'react';
import TabsControls from '../tabs-controls/tabs-controls';
import TabsFeatures from '../tabs-features/tabs-features';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

const Tabs = () => {
  return (
    <section className="tabs">
      <TabsControls />
      <TabsFeatures />
      <Reviews />
      <Contacts />
    </section>
  );
};

export default Tabs;
