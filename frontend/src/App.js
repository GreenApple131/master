import React, { Component } from "react";
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'


import logo from './logo.svg';
import './App.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
// import Homepage from './components/Homepage'



/////////////////////////  Reset Marker Icon
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
//////////////////////////////////////////////////////

class SimpleMap extends Component {
  state = {
    center: [48.9866, 24.7100],
    my_home: [48.990707, 24.706905],
    zoom: 15
  };

  render() {
    return (
      <MapContainer style={{ height: "100vh", width: "100%" }} center={this.state.center} zoom={this.state.zoom} scrollWheelZoom={true} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          style={{width: "100%", height: "100%"}}
        />
        <Marker
          position={this.state.my_home}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Center.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

function App() {
  return (
    <div className="App">
      <SimpleMap />
    </div>
  );
}

export default App;
