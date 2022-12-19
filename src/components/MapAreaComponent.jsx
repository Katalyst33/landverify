import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import mapboxgl from 'mapbox-gl';

const Map = () => {
  const count = useSelector((state) => state.counter.value)

  

  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const container = useRef(null);
  const MAP_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

  useEffect(() => {
    mapboxgl.accessToken = MAP_TOKEN;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-4.510629473227965, 55.837102397341226], // starting position [lng, lat]
        zoom: 20 // starting zoom
      });

      map.on('load', () => {

        setMap(map);
        map.resize();

        map.addSource("route", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    coordinates: [
                      [-4.510629473227965, 55.837102397341226],
                      [-4.51050201827789, 55.83732164269273],
                      [-4.509961544752713, 55.837215644061445],
                      [-4.510022852197352, 55.837115986965074],
                      [-4.510153533855288, 55.836896740453994],
                      [-4.510458457724525, 55.83695200518699],
                      [-4.510389083511228, 55.83705347465599],
                      [-4.510632699935826, 55.83710149136607],
                    ],
                    type: "LineString",
                  },
                },
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    coordinates: [
                      [-4.5106085332697035, 55.83698267921602],
                      [-4.509869626044434, 55.83684105514942],
                      [-4.5099470564431385, 55.83671806540991],
                      [-4.510697025153377, 55.83685720528851],
                      [-4.5106085332697035, 55.83698764847213],
                    ],
                    type: "LineString",
                  },
                },
              ],
            },
          });
         
          map.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#888",
              "line-width": 8,
            },
          });
  

        

    
        
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
    <div ref={container} style={{ width: '100%', height: '800px' }} />
  );
};

export default Map;
