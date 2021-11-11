import './slider.scss';
import React, {useState} from "react";
import SliderControls from '../slider-controls/slider-controls';
import {CURRENT_SLIDE} from '../../const';

const Slider = () => {
  const [currentPhoto, setCurrentPhoto] = useState(CURRENT_SLIDE);

  const handlePrevButtonClick = () => setCurrentPhoto(currentPhoto - 1);
  const handleNextButtonClick = () => setCurrentPhoto(currentPhoto + 1);

  const loadImg = (requireImg) =>
    requireImg.keys().reduce((pictures, item, i) => {
      pictures[i] = requireImg(item);
      return pictures;
    }, []);

  const photos = loadImg(
    require.context('./../../img/', false, /slide_\d{1,3}\.jpg$/)
  );

  return (
    <section className="page-main__slider slider">
      <h2 className="visually-hidden">Фотографии Марпех 11</h2>
      <span className="slider__mark">new model</span>
      <ul className={`slider__list`} >
        {photos.map((item, i) => {
          return (
            <li className={`slider__item${i !== currentPhoto ? ` slider__item--hidden` : ``}`} key={`${item}-${i}`}>
              <img className={`slider__img-big`} src={photos[i].default} width="600" height="375"
                alt={`Фото ${currentPhoto}`} />
            </li>
          );
        })}
      </ul>
      <SliderControls photos={photos} currentSlide={currentPhoto}
        onPrevButtonClick={handlePrevButtonClick} onNextButtonClick={handleNextButtonClick} />
    </section>
  );
};

export default React.memo(Slider);
