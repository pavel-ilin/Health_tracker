import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { connect } from 'react-redux'

const mapStyles = {
  width: '60%',
  height: '60%'
};


class MapContainer extends Component {

  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
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


  renderLocations () {
    return this.props.bloodPressureChecks.map((location) => {
      // console.log(location)
      return <Marker
      position={{lat: parseFloat(location.latitude2), lng: parseFloat(location.longitude2)}}
      onClick={this.onMarkerClick}
      address={location.input_1_address}
      title={location.input_1_facilityname}
      contacts={location.input_1_phone2}
      />
    })
  }

  render() {

    return (
      <div className='container-fluid'>
      {!this.props.bloodPressureChecks[1] ? <h2 className='display-1'>Lodaing...</h2> :

        <Map google={this.props.google}
          style={mapStyles}
          className={'map'}
          zoom={14}
          onClick={this.onMapClicked}
          initialCenter={{
              lat: parseFloat(this.props.bloodPressureChecks[1].latitude2),
              lng: parseFloat(this.props.bloodPressureChecks[1].longitude2)
          }}>
          {this.renderLocations()}
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
      }
    </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.token,
    userId: state.userId,
    bloodPressureChecks: state.bloodPressureChecks
  }
}

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY
const WrappedContainer = GoogleApiWrapper({apiKey: API_KEY})(MapContainer);
export default connect(mapStateToProps)((WrappedContainer));