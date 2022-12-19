import React, { useState, useEffect } from 'react';

const InputArea = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Check if the browser supports the Geolocation API
    if (!('geolocation' in navigator)) {
      console.error('Geolocation is not supported by your browser');
      return;
    }

    // Check if the user has granted permission to access their location
    if (hasLocationPermission) {
      navigator.geolocation.getCurrentPosition(
        position => {
          // Update the state variables with the latitude and longitude
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, [hasLocationPermission]);

  const requestLocationPermission = () => {
    // Request permission to access the user's location
    navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
      if (permissionStatus.state === 'granted') {
        setHasLocationPermission(true);
      } else {
        console.error('Permission to access location was denied');
      }
    });
  };

  return (
    <div>
      <button onClick={requestLocationPermission}>
        Enable Location
      </button>
      {hasLocationPermission && (
        <p>
          Latitude: {latitude} Longitude: {longitude}
        </p>
      )}
    </div>
  );
};

export default InputArea;
