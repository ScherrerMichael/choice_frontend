import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const {MAPS_API_KEY} = publicRuntimeConfig

const mapStyles = {
  height: '100%',
};

const containerStyle = {
  // position: 'absolute',
  // width: '80%',
  // height: '80%',
  // left: '10%',
  // top: '10%',
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        containerStyle={containerStyle}
        streetViewControl={false}
        className="map"
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={
          {
            lat: 47.67635,
            lng: -122.36676
          }
        }
      >
          <Marker
          name={'Choice Deli'}
          />
          </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  language: 'EN'
})(MapContainer);