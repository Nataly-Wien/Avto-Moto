import './main-page.scss';
import React, {useState} from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Card from '../card/card';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import ReviewWindow from '../review-window/review-window';
import {CARD} from '../../const';
import {SLIDER_LENGTH} from '../../const';

const MainPage = () => {
  const [pageData, setPageData] = useState(CARD);
  const [isModalShow, setIsModalShow] = useState(false);

  const saveLocal = (data) => {
    Object.keys(data).map((item) => {
      localStorage.setItem(item, data[item]);
    });
  };

  const onModalShowChange = (isShow) => {
    document.body.style.overflow = isShow ? `hidden` : `auto`;
    setIsModalShow(isShow);
  };

  const addComment = (comment) => {
    setPageData({
      ...pageData,
      reviews: [...pageData.reviews.slice(), comment],
    });
    onModalShowChange(false);
    saveLocal(comment);
  };

  return (
    <div className="page-main">
      <Header />
      <main>
        <div className="page-main__wrapper container">
          <h1 className="visually-hidden">Автомобили</h1>
          <Slider photos={pageData.photos.slice(0, SLIDER_LENGTH)} />
          <Card card={pageData} />
          <Tabs card={pageData} onNewCommentButtonClick={onModalShowChange} />
        </div>
      </main>
      <Footer />
      <Modal isShow={isModalShow} onClose={onModalShowChange}>
        <ReviewWindow onSendButtonClick={addComment} onCloseClick={onModalShowChange} />
      </Modal>
    </div>
  );
};

export default MainPage;
