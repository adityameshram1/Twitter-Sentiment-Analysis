import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';
const AnyReactComponent = ({ text }) => (
  <div>
    <img src={require('../assets/images/mapMarker.png')}  width = "50px" height="50px" alt="Twitter" contain/>
  </div>
);

class LocationPage extends Component {
  static defaultProps = {
    center: {
      lat: 0.0,
      lng: 0.0
    },
    zoom: 0.0,
  };
 
  render() {
    return (<div>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={'/'} className="navbar-brand">Home</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/resultpage'} className="nav-link">Sentiment Analysis</Link>
            </li>
            <li className="nav-item">
              <Link to={'/locationpage'} className="nav-link">Location Analysis</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div> 
      
      <div style={{ height: '230vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBEF2dyi_xSehDByWsTN4dNgkwMogGvW8g" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

            text="My Marker"
          />
          <AnyReactComponent
            lat={28.6139}
            lng={77.2090}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
     </div> 
    );
  }
}

  export default LocationPage;