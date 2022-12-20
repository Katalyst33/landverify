import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import mapboxgl from 'mapbox-gl';

const Map = ({restrictedArea, usersArea, hasData,setHasData}) => {
  const currentLocation = useSelector((state) => state.counter.currentLocation)
  // const restrictedArea = useSelector((state) => state.counter.restrictedAreas)
  const myArea = useSelector((state) => state.counter.myArea)

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
        center: [currentLocation.lng, currentLocation.lat], // starting position [lng, lat]
        zoom: 18 // starting zoom
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
                      ...usersArea
                    ],
                    type: "LineString",
                  },
                },
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    coordinates: [
                        ...restrictedArea

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

    if (!map) {
        initializeMap({ setMap, mapContainer: container.current });
    }else{

        if(hasData){
            initializeMap({ setMap, mapContainer: container.current });

            setHasData(false)

        }

        // console.log('here i a m')
    }
  }, [map,hasData]);

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
  }, [map, userLocation,]);

  return (

   <div>

{/*   <div> lat: {
      currentLocation.lat
   }

   long: {
      currentLocation.lng
   }

   </div>*/}

   {
    container &&

   <div ref={container} style={{ width: '100%', height: '800px' }} />

   }



   </div>
  );
};

export default Map;
