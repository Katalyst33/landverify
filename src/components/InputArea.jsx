import React, { useState, useEffect } from 'react';

const InputArea = () => {

  const [form, setForm] = useState({
    restrictedArea: [
    ]
  });
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


  function handleChange(event) {

    const inputValue = event.target.value;
    setForm(inputValue);
  }

  return (
    <div className='border-blue-500 border-2'>
      <button onClick={requestLocationPermission}>
        Enable Location
      </button>
      {hasLocationPermission && (
        <p>
          Latitude: {latitude} Longitude: {longitude}
        </p>
      )}


      <div>
        <div className=''>
          <label>Restricted Area:</label>

          <hr className='bg-red-500 border-b border-red-600'></hr>
          {JSON.stringify(form.restrictedArea)}
          <br />
          <textarea value={form.restrictedArea} onChange={handleChange}
            className='border-2' rows={10} cols={40} />
          <br />
          <button className='bg-green-400' onClick={() => updateRestrictedArea()}>Add Data</button>


        </div>

      </div>
    </div>
  );
};

export default InputArea;
