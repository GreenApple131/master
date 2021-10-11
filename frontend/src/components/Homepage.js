import { useState, useEffect } from "react";
import { useMapEvents, MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";

/////////////////////////  Reset Marker Icon
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
//////////////////////////////////////////////////////

function getCommonStatusCode() {
  var status = 'GOOD'
  return {status}
}

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup className="marker">You are here</Popup>
    </Marker>
  )
}


export default function Homepage() {
  const [statusColor, setStatus] = useState('');
  const state = {
    center: [48.9866, 24.708],
    my_home: [48.990807, 24.706805],
    zoom: 15,
  };

  useEffect(() => {
    if (getCommonStatusCode === 'GOOD') {
      setStatus('green')
    } else {
      setStatus('red')
    }
    console.log('status: ', statusColor)
  })

  return (
    <MapContainer
      className="main"
      style={{ height: "100vh", width: "100%" }}
      center={state.center}
      zoom={state.zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={state.my_home}>
        <Popup className="marker">
          A pretty CSS3 popup. <br /> Center.
        </Popup>
      </Marker>
      <Circle center={state.my_home} pathOptions={{color: statusColor}} radius={100}>
        <Popup>
          Water in this area is clear!
        </Popup>
      </Circle>
      {/* <LocationMarker /> */}
    </MapContainer>
  );
}
