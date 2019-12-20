import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '70%',
  height: '70%'
};


class MapContainer extends Component {

  onMarkerClick(props, marker, e) {
    console.log(marker)
  }

  render() {

    return (
      <Map google={this.props.google}
        style={mapStyles}
        className={'map'}
        zoom={14}>

      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 37.778519, lng: -122.405640}} />
      <Marker
        name={'Dolores park'}
        position={{lat: 37.759703, lng: -122.428093}} />
      <Marker
        onClick={this.onMarkerClick}
        label={'hello'}
        name={'Current location'}
        position={{lat: 37.762391, lng: -122.439192}} />

    </Map>
    );
  }
}

export default GoogleApiWrapper({apiKey: ''})(MapContainer);




