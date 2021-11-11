import './modal.scss';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useScrollBlock} from '../../hooks/use-scroll-block';

const Modal = ({onClose, children}) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  blockScroll();

  useEffect(() => {
    document.addEventListener(`keydown`, handleKeydown);
    document.addEventListener(`mousedown`, handleMouseDown);

    return () => {
      document.removeEventListener(`keydown`, handleKeydown);
      document.removeEventListener(`mousedown`, handleMouseDown);
      allowScroll();
    };
  });

  const handleKeydown = (evt) => {
    if (evt.key === `Escape`) {
      onClose(false);
    }
  };

  const handleMouseDown = (evt) => {
    if (!evt.target.closest(`.review-form`)) {
      onClose(false);
    }
  };

  return (
    <section className={`modal overlay`}>
      {children}
    </section>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.shape().isRequired,
};

export default Modal;
