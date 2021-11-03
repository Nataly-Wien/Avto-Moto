import './map-block.scss';
import React from "react";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import pin from './../../img/location.svg';

const MapBlock = () => {
  const mapData = {
    center: [59.968137, 30.32515],
    zoom: 14,
  };

  const pinCoordinate = [59.9689, 30.316272];
  const pinOptions = {
    iconLayout: `default#image`,
    iconImageHref: pin,
    iconImageSize: [34, 42],
    iconImageOffset: [0, -42],
  };

  return (
    <div className="contacts__map map">
      <YMaps>
        <Map className="map__map" defaultState={mapData}>
          <Placemark geometry={pinCoordinate} options={pinOptions} />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapBlock;
