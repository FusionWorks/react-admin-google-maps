import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  Marker,
  GoogleMap,
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(
  props => {
    const {
      center,
      onMapClick,
      onMarkerClick,
      markers,
      defaultZoom,
    } = props;

    const putMarkers = () => {
      if (!markers) {
        return;
      }

      if (markers instanceof Array) {
        return markers.map((mrk, i) => (
          <Marker
            key={`mrk${i}`}
            position={mrk}
            onClick={e => onMarkerClick(e)}
          />
        ));
      }

      return (
        <Marker
          key="mrk"
          position={markers}
          onClick={e => onMarkerClick(e)}
        />
      );
    };

    return (
      <GoogleMap
        defaultZoom={defaultZoom}
        center={center}
        onClick={e => onMapClick(e)}
      >
        {putMarkers()}
      </GoogleMap>
    );
  },
));

export default Map;
