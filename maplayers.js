mapboxgl.accessToken = 'pk.eyJ1Ijoia2FydGhpay1tYXBib3giLCJhIjoiY2xmdXlwbmR6MDByajNrbnAzd2k0eXJtMCJ9.bJLmQWdyMD5aDmjiQ0uQQA';

// API To obtain current Location
navigator.geolocation.getCurrentPosition        (successLocation, errorLocation, {
  enableHighAccuracy: true
  })
      function successLocation(position){
    setUpMap([position.coords.longitude, position.coords.latitude])
    console.log(position)

  }
  function errorLocation(){
    
  }

  function setUpMap(center){
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    // center:center,
    zoom:2
  });

  map.addControl(new mapboxgl.NavigationControl());

  map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
    );
  

   
      
    map.addControl(
      new MapboxDirections({
      accessToken: mapboxgl.accessToken
      }),
      'top-left'
      );

     


}



