import './map-block.scss';
import React from "react";
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const MapBlock = () => {
  const mapData = {
    center: [59.968137, 30.32515],
    zoom: 14,
  };

  const pinCoordinate = [59.9689, 30.316272];
  const pinOptions = {
    iconLayout: `default#image`,
    iconImageHref: `img/location.svg`,
    iconImageSize: [34, 42],
    iconImageOffset: [0, -42],
  };

  return (
    <YMaps>
      <Map className="contacts__map map" defaultState={mapData}>
        <Placemark geometry={pinCoordinate} options={pinOptions} />
      </Map>
    </YMaps>
  );
};

export default MapBlock;
