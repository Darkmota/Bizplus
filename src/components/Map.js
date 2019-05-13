import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../css/map.css";

// const getInfoWindowString = place => `
//     <div>
//       <div style="font-size: 16px;">
//         ${place.name}
//       </div>
//       <div style="font-size: 14px;">
//         <span style="color: grey;">
//         ${place.rating}
//         </span>
//         <span style="color: orange;">${String.fromCharCode(9733).repeat(
//           Math.floor(place.rating)
//         )}</span><span style="color: lightgrey;">${String.fromCharCode(
//   9733
// ).repeat(5 - Math.floor(place.rating))}</span>
//       </div>
//       <div style="font-size: 14px; color: grey;">
//         ${place.types[0]}
//       </div>
//       <div style="font-size: 14px; color: grey;">
//         ${"$".repeat(place.price_level)}
//       </div>
//       <div style="font-size: 14px; color: green;">
//         ${place.opening_hours.open_now ? "Open" : "Closed"}
//       </div>
//     </div>`;

const getInfoWindowString = place => `
    <div>
      <div style="font-size: 16px;">
        ${place.name}
      </div>
    </div>`;

const AnyReactComponent = ({ text }) => (
  <div className="map-info">
    <div className="map-icon">></div>
    <div className="map-txt">{text}</div>
  </div>
);

const handleApiLoaded = (map, maps, places) => {
  const markers = [];
  const infowindows = [];
  const center = {
    lat: 35.691948,
    lng: 139.718789
  };

  places.forEach(place => {
    markers.push(
      new maps.Marker({
        position: {
          lat: center.lat,
          lng: center.lng
        },
        map
      })
  );

    infowindows.push(
      new maps.InfoWindow({
        content: getInfoWindowString(place)
      })
    );
  });

  markers.forEach((marker, i) => {
    marker.addListener("click", () => {
      infowindows[i].open(map, marker);
    });
  });
};

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [{
        name:"bizlpus"
      }]
    };
  }
  static defaultProps = {
    center: {
      lat: 35.691948,
      lng: 139.718789
    },
    zoom: 16
  };

  // componentDidMount() {
  //   fetch("places.json")
  //     .then(response => response.json())
  //     .then(data => {
  //       data.results.forEach(result => {
  //         result.show = false; // eslint-disable-line no-param-reassign
  //       });
  //       this.setState({ places: data.results });
  //     });
  // }

  render() {
    const { places } = this.state;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD89pzZjSgZCdOv_STBBR6jSWaObqwGNRM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, places)}
        >
          
        </GoogleMapReact>
        
      </div>
    );
  }
  
}

export default Map;
