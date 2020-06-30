import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { connect } from 'react-redux'

import '../assets/index.css'


const mapStyles = {
  width: '70%',
  height: '70%',
  position: 'absolute',
};


class MapContainer extends Component {

  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    dataloaded: false,
    dataSwithed: false
  }


  dataloaded = () => {
    if (this.props.locations.length > 0) {
      this.setState({
        dataloaded: !this.state.dataloaded
      })
    }
  }

  onMarkerClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
    }

      onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: {}
        })
      }
    }


  renderBloodPressureLocations () {
    return this.props.locations.map((location) => {
      return <Marker
      position={{lat: parseFloat(location.latitude2), lng: parseFloat(location.longitude2)}}
      onClick={this.onMarkerClick}
      address={location.input_1_address}
      title={location.input_1_facilityname}
      contacts={location.input_1_phone2}
      />
    })
  }

  renderFluShotsLocations () {
    return this.props.locations.map((location) => {
      return <Marker
      position={{lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)}}
      onClick={this.onMarkerClick}
      address={location.address}
      title={location.facility_name}
      contacts={location.phone}
      />
    })
  }

  render() {
    return (
      <div className='front_page'>

      {!this.state.dataloaded ? this.dataloaded() : null}

      {!this.state.dataloaded ? <h2 className='display-1'>Loading...</h2> :

      <>
        {!this.props.bloodPressureChecksReset

        ?

        <Map google={this.props.google}
        style={mapStyles}
        className={'map'}
        zoom={14}
        onClick={this.onMapClicked}
        initialCenter={{
            lat: parseFloat(this.props.locations[1].latitude),
            lng: parseFloat(this.props.locations[1].longitude)
        }}>
        {this.renderFluShotsLocations()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h2>{this.state.activeMarker.title}</h2>
              <p>Address: {this.state.activeMarker.address}</p>
              <p>Contacts: {this.state.activeMarker.contacts}</p>
            </div>
        </InfoWindow>
    </Map>

    :

    <Map google={this.props.google}
          style={mapStyles}
          className={'map'}
          zoom={14}
          onClick={this.onMapClicked}
          initialCenter={{
              lat: parseFloat(this.props.locations[1].latitude2),
              lng: parseFloat(this.props.locations[1].longitude2)
          }}>
          {this.renderBloodPressureLocations()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h2>{this.state.activeMarker.title}</h2>
                <p>Address: {this.state.activeMarker.address}</p>
                <p>Contacts: {this.state.activeMarker.contacts}</p>
              </div>
          </InfoWindow>
      </Map>}
      </>
      }
    </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId,
    locations: state.locations,
    bloodPressureChecksReset: state.bloodPressureChecksReset
  }
}

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY
const WrappedContainer = GoogleApiWrapper({apiKey: API_KEY})(MapContainer);
export default connect(mapStateToProps)((WrappedContainer));