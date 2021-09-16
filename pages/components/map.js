import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const {MAPS_API_KEY} = publicRuntimeConfig

const mapStyles = {
  // width: '50%',
  height: '100%',
  // padding: '20px'
};

const containerStyle = {
  width: '100%',
  height: '300px',
  position: 'relative'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        containerStyle={containerStyle}
        className="map"
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_API_KEY
})(MapContainer);