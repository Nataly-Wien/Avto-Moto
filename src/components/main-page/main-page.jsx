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

const MainPage = () => {
  const [pageData, setPageData] = useState(CARD);
  const [isModalShow, setIsModalShow] = useState(false);

  const handleModalOpenClose = (isShow) => {
    document.body.style.overflow = isShow ? `hidden` : `unset`;
    document.body.style.paddingRight = isShow ? `16px` : `0`;
    setIsModalShow(isShow);
  };

  const handleSendButtonClick = (comment) => {
    setPageData({
      ...pageData,
      reviews: [...pageData.reviews, comment],
    });

    handleModalOpenClose(false);
  };

  return (
    <div className="page-main">
      <Header />
      <main>
        <div className="page-main__wrapper container">
          <h1 className="visually-hidden">Автомобили</h1>
          <Slider />
          <Card card={pageData} />
          <Tabs card={pageData} onNewCommentButtonClick={handleModalOpenClose} />
        </div>
      </main>
      <Footer />

      <Modal isShow={isModalShow} onClose={handleModalOpenClose}>
        {(isShow) => (
          <ReviewWindow onSendButtonClick={handleSendButtonClick} onCloseClick={handleModalOpenClose} isShow={isShow} />
        )}
      </Modal>
    </div>
  );
};

export default MainPage;
