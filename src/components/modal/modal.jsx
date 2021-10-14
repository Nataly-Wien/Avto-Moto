import './modal.scss';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Modal = ({isShow, onClose, children}) => {
  useEffect(() => {
    document.addEventListener(`keydown`, handleKeydown);
    document.addEventListener(`mousedown`, handleMouseDown);

    return () => {
      document.removeEventListener(`keydown`, handleKeydown);
      document.removeEventListener(`mousedown`, handleMouseDown);
    };
  });

  const handleEscDown = (isDown) => onClose(!isDown);
  const handlePopupOutClick = (isClick) => onClose(!isClick);

  const handleKeydown = (evt) => {
    if (evt.key === `Escape`) {
      handleEscDown(true);
    }
  };

  const handleMouseDown = (evt) => {
    if (!evt.target.closest(`.review`)) {
      handlePopupOutClick(true);
    }
  };

  return (
    <section className={`modal overlay${isShow ? ` show` : ``}`}>
      {children(isShow)}
    </section>
  );
};

Modal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
