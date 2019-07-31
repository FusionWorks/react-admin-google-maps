import React, { Component, Fragment } from 'react';
import { addField } from 'ra-core';
import Map from './Map';
import SearchBox from './SearchBox';
import { getMarkers, getPosition } from './utils';

export default class GMap extends Component {
  constructor(props) {
    super(props);
    const { defaultZoom, defaultCenter } = this.props;

    this.state = {
      center: defaultCenter || { lat: 0, lng: 0 },
      zoom: defaultZoom || 3,
    };

    this.putMarker = ({ markerPos, input, multipleMarkers }) => {
      const currentValue = getMarkers(input);
      if (multipleMarkers) {
        if (currentValue && currentValue !== null) {
          return input.onChange([...currentValue, markerPos]);
        }
        return input.onChange([markerPos]);
      }
      return input.onChange(markerPos);
    };

    this.setCenter = markerPos => this.setState({ center: markerPos });

    this.putMarkerFromSearch = ({
      markerPos, input, justShow, multipleMarkers,
    }) => {
      this.putMarker({ markerPos, input, multipleMarkers });
      this.setCenter(markerPos);
    };

    this.deleteMarker = ({ markerPos, input, multipleMarkers }) => {
      const currentValue = getMarkers(input);
      let newValue;
      if (multipleMarkers) {
        newValue = currentValue.filter(mrk => mrk.lat !== markerPos.lat
          && mrk.lng !== markerPos.lng);
        if (!newValue.length) {
          newValue = null;
        }
      } else { newValue = null; }
      input.onChange(newValue);
    };
  }

  componentDidMount() {
    const { input } = this.props;
    const markers = getMarkers(input);
    if (markers) {
      if (markers instanceof Array) {
        this.setState({ center: markers[markers.length - 1] });
      } else {
        this.setState({ center: markers });
      }
    }
  }

  render() {
    const {
      googleKey,
      input,
      multipleMarkers,
      searchable,
      justShow,
    } = this.props;
    const childrenProps = {
      input,
      markers: getMarkers(input),
      multipleMarkers,
      loadingElement: <div style={{ height: '100%' }} />,
      containerElement: <div style={{ height: '500px' }} />,
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
        googleKey
        }&v=3.exp&libraries=geometry,drawing,places`,
    };

    const { center, zoom } = this.state;

    return (
      <Fragment>
        <div style={{ position: 'relative' }}>
          {!!searchable
            && (
              <SearchBox
                putMarker={!justShow ? this.putMarkerFromSearch : () => { }}
                deleteMarker={!justShow ? this.deleteMarker : () => { }}
                input={input}
                markers={getMarkers(input)}
                multipleMarkers={multipleMarkers}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '500px' }} />}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
                  googleKey
                  }&v=3.exp&libraries=geometry,drawing,places`}
              />
            )
          }
          <Map
            mapElement={<div style={{ height: '100%' }} />}
            center={center}
            defaultZoom={zoom}
            onMapClick={e => this.putMarker({
              input,
              multipleMarkers,
              markerPos: getPosition(e),
            })}
            onMarkerClick={e => this.deleteMarker({
              input,
              multipleMarkers,
              markerPos: getPosition(e),
            })}
            {...childrenProps}
          />
        </div>
      </Fragment>
    );
  }
}

export const GMapInput = addField(GMap);
export const GMapField = ({ record, source, ...props }) => (
  <GMap
    {...props}
    justShow
    input={{ value: record[source] }}
    searchable={false}
  />
);
