import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const container = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0YWx5c3R0ZWNoIiwiYSI6ImNsYmk3anVxZjBhNWgzb285eWtxd2ZyaGUifQ.w2qXxA4pjScrGvjnaTj8QA';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
      });

      map.on('load', () => {

        setMap(map);
        map.resize();
        

        
      });
    };

    if (!map) initializeMap({ setMap, mapContainer: container.current });
  }, [map]);

  useEffect(() => {
    if (map) {
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      map.addLayer({
        id: 'user-location',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: userLocation
            }
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#007cbf'
        }
      });
    }
  }, [map, userLocation]);

  return (
    <div ref={container} style={{ width: '100%', height: '400px' }} />
  );
};

export default Map;
