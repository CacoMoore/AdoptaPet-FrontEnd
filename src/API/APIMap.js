import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

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

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
    >
      <Marker
        position={center}
      />
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyMap);