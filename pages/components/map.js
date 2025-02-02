import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const {MAPS_API_KEY} = publicRuntimeConfig

const mapStyles = {
  height: '90%',
  width: '90%',
  marginLeft: '20px',
  marginTop: 'auto',
  marginBottom: 'auto',
};

const containerStyle = {
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
            lat: 47.675795907114626,
            lng: -122.36649527269576
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