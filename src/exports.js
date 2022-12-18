var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0YWx5c3R0ZWNoIiwiYSI6ImNsYmk3anVxZjBhNWgzb285eWtxd2ZyaGUifQ.w2qXxA4pjScrGvjnaTj8QA';
var map = new mapboxgl.Map({
  container: 'mapArea',
  style: 'mapbox://styles/mapbox/streets-v11'
});




export function runMap(){
    console.log("runMap")
}