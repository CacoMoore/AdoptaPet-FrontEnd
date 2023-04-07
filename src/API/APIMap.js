import { Loader } from '@googlemaps/js-api-loader';

const Map = () => {

    const apiOptions = {
        apiKey: "AIzaSyC82yqzt6o1_mM4IP3jSMl1f90zsmj-kWc"
    }
    const loader = new Loader(apiOptions);

    loader.load().then(() => {
        console.log('Maps JS API loaded');
    });

    function displayMap() {
        const mapOptions = {
            center: { lat: -33.437100, lng: -70.634679 },
            zoom: 14
        };

        const mapDiv = document.getElementById('map');
        const map = new window.google.maps.Map(mapDiv, mapOptions);
        return map;
    }

    function addMarkers(map) {
        const locations = {
          ubication: { lat: -33.437100, lng: -70.634679 }
        }
        const markers = [];
        for (const location in locations) {
          const markerOptions = {
            map: map,
            position: locations[location],
            icon: './img/custom_pin.png'
          }
          const marker = new window.google.maps.Marker(markerOptions);
          markers.push(marker);
        }
        return markers;
      }

    
};

export default Map;