import React, {useEffect, useRef} from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

const Map = ({active, activeCity, massChooseCards}) => {
  const {location} = massChooseCards[0].city; // берем координаты выбранного города

  let marker;
  let pork = [];
  let pork2 = [];
  const mapRef = useRef();
  const params = useParams();
  const id = Number(params.id);

  // прописываем слой -карту

  useEffect(()=>{
    mapRef.current = L.map(`map`).setView([
      location.latitude,
      location.longitude
    ], location.zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`
    })
    .addTo(mapRef.current);
  }, []);

  // добавляем метки
  const filteredMassCards = massChooseCards.filter((item) => item.id !== id);

  const generMarker = (coord) => {
    const customIcon = L.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });

    pork = L.marker({
      lat: coord.location.latitude,
      lng: coord.location.longitude
    },
    {
      icon: customIcon
    });

    pork2.push(pork);
    pork.addTo(mapRef.current);
    pork.bindPopup(coord.title);
  };

  useEffect(() => {
    if (!id) {
      massChooseCards.forEach(generMarker); // используем внутри forEch callback функцию
    } else {
      filteredMassCards.slice(0, 3).forEach(generMarker); // используем внутри forEch callback функцию
    }

    return () => {
      for (let i = 0; i < pork2.length; i++) {
        mapRef.current.removeLayer(pork2[i]);
      }
    };
  }, [massChooseCards]);

  useEffect(()=>{
    mapRef.current.panTo([
      location.latitude,
      location.longitude
    ], location.zoom);
  }, [activeCity]);

  // добавляем динамику меткам при наведении

  useEffect(() => {

    if (active) {
      massChooseCards.forEach((coord) => {
        if (active.id === coord.id) {
          const customIcon = L.icon({
            iconUrl: `img/pin-active.svg`,
            iconSize: [30, 30]
          });

          marker = L.marker({
            lat: coord.location.latitude,
            lng: coord.location.longitude
          },
          {
            icon: customIcon
          })
          .addTo(mapRef.current);
        }
      });
      return () => {
        mapRef.current.removeLayer(marker);
      };
    }
    return marker;
  }, [mapRef.current, active]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  Coords: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  active: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  activeCity: PropTypes.string.isRequired,
  massChooseCards: PropTypes.array.isRequired,
};

export default Map;
