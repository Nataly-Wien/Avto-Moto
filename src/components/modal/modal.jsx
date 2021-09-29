import './modal.scss';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Modal = ({isShow, onClose, children}) => {
  useEffect(() => {
    document.addEventListener(`keydown`, onKeydown);
    document.addEventListener(`mousedown`, onMouseDown);

    return () => {
      document.removeEventListener(`keydown`, onKeydown);
      document.removeEventListener(`mousedown`, onMouseDown);
    };
  });

  const onEscDown = (isDown) => onClose(!isDown);
  const onPopupOutClick = (isClick) => onClose(!isClick);

  const onKeydown = (evt) => {
    switch (evt.key) {
      case `Escape`:
        onEscDown(true);
        break;
    }
  };

  const onMouseDown = (evt) => {
    if (!evt.target.closest(`.review`)) {
      onPopupOutClick(true);
    }
  };

  return (
    <section className={`modal overlay${isShow ? ` show` : ``}`}>
      {children}
    </section>
  );
};

Modal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
