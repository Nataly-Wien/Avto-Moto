import './main-page.scss';
import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Card from '../card/card';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import {CARD} from '../../const';
import {SLIDER_LENGTH} from '../../const';

const MainPage = () => {
  return (
    <div className="page-main">
      <Header />
      <main>
        <div className="page-main__wrapper container">
          <h1 className="visually-hidden">Автомобили</h1>
          <Slider photos={CARD.photos.slice(0, SLIDER_LENGTH)} />
          <Card card={CARD} />
          <Tabs card={CARD} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
