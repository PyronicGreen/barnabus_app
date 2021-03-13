mapboxgl.accessToken = 
'pk.eyJ1IjoicGlsZ3JpbW5vaXNlIiwiYSI6ImNrbTFjdHN1NzAwZjQycm16OWk5MGQzN24ifQ.0pokCFyKGSVxD3HTtk4SNg'

navigator.geolocation.getCurrentPosition(successLocation, 
errorLocation, {enableHighAccuracy: true})

function successLocation(lat, long) {
    setupMap([-73.95, 40.825])
}

function errorLocation() {
    setupMap([-100, 30.26])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/pilgrimnoise/ckm57ui277mzi17r1uux34q8y',
        center: center,
        zoom: 13.5
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
}

map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['event-spaces']
    });
  
    if (!features.length) {
      return;
    }
  
    var feature = features[0];
  
    var popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
      .addTo(map);
  });