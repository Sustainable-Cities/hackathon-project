import React, { useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100vw",
  height: "90%",
};

export function GoogleMap(props) {
  const { markers } = props;
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const { google } = props;

  const mapTypeControlOptions = {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    position: google.maps.ControlPosition.BOTTOM_LEFT,
  };

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onClose = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 42.3601,
        lng: -71.0589,
      }}
      mapTypeControlOptions={mapTypeControlOptions}
      streetViewControl={false}
      fullscreenControl={false}
    >
      {markers.map((marker, index) => (
        <Marker
          position={{ lat: marker.lat, lng: marker.lng }}
          name={marker.address}
          onClick={onMarkerClick}
          key={index}
        />
      ))}
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLEMAPS_KEY}`,
})(GoogleMap);
