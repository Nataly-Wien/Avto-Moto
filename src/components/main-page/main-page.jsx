import './main-page.scss';
import React, {useState} from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Card from '../card/card';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import ReviewForm from '../review-form/review-form';
import {CARD} from '../../const';
import {useScrollBlock} from '../../hooks/use-scroll-block';

const MainPage = () => {
  const [pageData, setPageData] = useState(CARD);
  const [isModalShow, setIsModalShow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const handleModalOpenClose = (isShow) => {
    setIsModalShow(isShow);
  };

  const handleMobileMenuOpenClose = (isOpen) => {
    isOpen ? blockScroll() : allowScroll();
    setIsMobileMenuOpen(isOpen);
  };

  const handleSendButtonClick = (comment) => {
    setPageData((prev) => ({
      ...prev,
      reviews: [...prev.reviews, comment],
    }));

    handleModalOpenClose(false);
  };

  return (
    <div className="page-main">
      <Header isMenuOpen={isMobileMenuOpen} onMenuButtonClick={handleMobileMenuOpenClose} />
      <main>
        <div className="page-main__wrapper container">
          <h1 className="visually-hidden">Автомобили</h1>
          <Slider />
          <Card card={pageData} />
          <Tabs card={pageData} onNewCommentButtonClick={handleModalOpenClose} />
        </div>
      </main>
      <Footer />

      {isModalShow && (<Modal onClose={handleModalOpenClose}>
        <ReviewForm onSendButtonClick={handleSendButtonClick} onCloseClick={handleModalOpenClose} />
      </Modal>)}
    </div>
  );
};

export default MainPage;
