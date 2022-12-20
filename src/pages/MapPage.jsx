import InputArea from '../components/InputArea'
import MapAreaComponent from '../components/MapAreaComponent'
import React, { useState, useEffect } from 'react';


function MapPage() {

    function parseCoordinates(coordinatesString) {
        try {
            // Use JSON.parse to convert the string into a JavaScript object
            const coordinates = JSON.parse(coordinatesString);
            // Return the resulting object

            console.log("i ran ");
            return coordinates;
        } catch (error) {
            // If there was an error parsing the string, log the error and return an empty object
           console.error('Error parsing JSON string here QQ:', error);
            return {};
        }
    }

    const [hasData, setHasData] = useState(false);


  const [restrictedArea, setRestrictedArea] = useState(

      [
          [
              -4.510629473227965,
              55.837102397341226
          ],
          [
              -4.51050201827789,
              55.83732164269273
          ],
          [
              -4.509961544752713,
              55.837215644061445
          ],
          [
              -4.510022852197352,
              55.837115986965074
          ],
          [
              -4.510153533855288,
              55.836896740453994
          ],
          [
              -4.510458457724525,
              55.83695200518699
          ],
          [
              -4.510389083511228,
              55.83705347465599
          ],
          [
              -4.510632699935826,
              55.83710149136607
          ]
      ],

  );

    const [usersArea, setUsersArea] = useState([]  );



function resetArea(){


    setHasData(true);


    setRestrictedArea([])






}


function  addArea(){

    setHasData(true);

    const hold =    [
        [
            -4.510620265125823,
            55.83733819016399
        ],
        [
            -4.509707686316375,
            55.83716412272216
        ],
        [
            -4.509622132052897,
            55.83730268046935
        ],
        [
            -4.510496273439799,
            55.837444719054275
        ],
        [
            -4.51061654537537,
            55.83733888643215
        ]
    ]

    const  holdUserArea = [
        [
            -4.510629473227965,
            55.837102397341226
        ],
        [
            -4.51050201827789,
            55.83732164269273
        ],
        [
            -4.509961544752713,
            55.837215644061445
        ],
        [
            -4.510022852197352,
            55.837115986965074
        ],
        [
            -4.510153533855288,
            55.836896740453994
        ],
        [
            -4.510458457724525,
            55.83695200518699
        ],
        [
            -4.510389083511228,
            55.83705347465599
        ],
        [
            -4.510632699935826,
            55.83710149136607
        ]
    ]

    setRestrictedArea([

...hold,


      ])


    setUsersArea([
        ...holdUserArea
    ])


    const  coordinates =   parseCoordinates(restrictedArea);


    // console.log(JSON.parse(JSON.stringify(restrictedArea)));
    // setRestrictedArea(restrictedArea)

    console.log("restrictedArea", typeof (coordinates), coordinates);
    // console.log("hold", typeof(hold), hold);





}



  function updateRestrictedArea(event) {

      setRestrictedArea( event.target.value);

  }
  function updateUsersArea (event) {

      setRestrictedArea( event.target.value);

  }







  return (
    <div>
      <div className="">

        <InputArea addArea={addArea} restrictedArea= {restrictedArea} usersArea={usersArea} updateUsersArea={updateUsersArea} updateRestrictedArea= {updateRestrictedArea} resetArea={resetArea} />

        <MapAreaComponent usersArea={usersArea} hasData={hasData} restrictedArea={restrictedArea}  setHasData={setHasData}/>
      </div>
    </div>
  )
}

export default MapPage

