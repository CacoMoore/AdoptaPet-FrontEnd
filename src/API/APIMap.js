import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
 width: '100%',
 height: '400px'
};

const center = {
 lat: -33.437043,
 lng: -70.634648,
};

function MyMap() {
 const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: "AIzaSyC82yqzt6o1_mM4IP3jSMl1f90zsmj-kWc"
 })

 const [map, setMap] = React.useState(null)
 const [mapCenter, setMapCenter] = React.useState(center);


 const onLoad = React.useCallback(function callback(map) {
  const bounds = new window.google.maps.LatLngBounds();
  map.fitBounds(bounds);
  setMap(map)
  setMapCenter({
    lat: map.getCenter().lat(),
    lng: map.getCenter().lng(),
});
 }, [])

 const onUnmount = React.useCallback(function callback(map) {
  setMap(null)
 }, [])

 const marker = new window.google.maps.Marker({
    position: center,
    title:"AdopaPet!"
});

marker.setMap(map);


 return isLoaded ? (
  <GoogleMap
   mapContainerStyle={containerStyle}
   center={mapCenter}
   zoom={17}
   onLoad={onLoad}
   onUnmount={onUnmount}
  >
   
   <>
   </>
  </GoogleMap>
 ) : <></>
}

export default React.memo(MyMap);