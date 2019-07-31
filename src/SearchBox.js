import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();

    this.onPlacesChanged = () => {
      const { input, multipleMarkers, putMarker } = this.props;
      const places = this.input.current.getPlaces();
      const markerPos = {
        lat: places[0].geometry.location.lat(),
        lng: places[0].geometry.location.lng(),
      };
      putMarker({ markerPos, input, multipleMarkers });
    };

    this.defaultSearchStyles = {
      boxSizing: 'border-box',
      border: '1px solid transparent',
      width: '240px',
      height: '32px',
      padding: '0 12px',
      borderRadius: '3px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
      fontSize: '14px',
      outline: 'none',
      textOverflow: 'ellipses',
      marginBottom: '15px',
      position: 'absolute',
      top: '15px',
      left: '0px',
      right: '0px',
      margin: '0 auto',
      zIndex: '1',
    };
  }

  render() {
    const { props, onPlacesChanged, input } = this;

    return (
      <div data-standalone-searchbox="">
        <StandaloneSearchBox
          ref={input}
          bounds={props.bounds}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search location"
            style={{
              ...this.defaultSearchStyles,
            }}
          />
        </StandaloneSearchBox>
      </div>
    );
  }
}

const WithScriptSearchBox = withScriptjs(props => <SearchBox {...props} />);

export default WithScriptSearchBox;
