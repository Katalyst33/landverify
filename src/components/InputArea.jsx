import React, { useState, useEffect } from 'react';

const InputArea = ({restrictedArea,updateRestrictedArea,updateUsersArea, usersArea,resetArea,addArea}) => {

  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [rArea, setRArea] = useState([]);
  // const [mArea, setMArea] = useState(null);
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
    setRArea(inputValue);
    // console.log(mArea);
    console.log(rArea);
  }

  return (
    <div className='border-blue-500 border-2'>
    {/*  <button onClick={requestLocationPermission}>
        Enable Location
      </button>*/}
      {hasLocationPermission && (
        <p>
          Latitude: {latitude} Longitude: {longitude}
        </p>
      )}


      <div>
        <div className=''>

       <div className="lg:flex gap-x-4">

           <div>
               <label>Restricted Area:</label>

               <br />
               <textarea value={restrictedArea}  onChange={updateRestrictedArea}
                         className='border-2' rows={10} cols={40} />
           </div>

           <div>
               <label>user Area:</label>

               <br />
               <textarea value={usersArea}  onChange={updateUsersArea}
                         className='border-2' rows={10} cols={40} />
           </div>
       </div>
          <br />

<div className="flex gap-x-4">

    <button className='bg-red-400' onClick={() => resetArea()}>Clear Data</button>
    <button className='bg-green-400' onClick={() => addArea()}>Add Area</button>


</div>
        </div>

      </div>
    </div>
  );
};

export default InputArea;
