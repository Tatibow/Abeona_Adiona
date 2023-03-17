import React from "react"
// import {GoogleMap, Marker} from "@react-google-maps/api";
import GoogleMapReact from "google-map-react"
// import {Paper, Typography, useMediaQuery} from "@material-ui/core";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"


function Map() {
//const mobile = useMediaQuery('(min-width:600px'))

// const coordinates = {lat: 0, lng: 0};

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 14
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container" style={{ height: '85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:""}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={""}
        margin={[50, 50, 50, 50]}
        options={{mapId:""}}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
    }

export default Map

//  <div className="map-container">
//  <GoogleMapReact
//     bootstrapURLkeys={{key:"AIzaSyDw9m1mBBDIPGMCEZmCuaTJcBmcth229vs"}}
//     defaultCenter={coordinates}
//     center={coordinates}
//     zoom={14}
//     margin={[50, 50, 50, 50]}
//     //options={{mapId:process.env.REACT_APP_MAP_ID}}
//     onChange={""}
//     onChildClick={""}
//     >

//     </GoogleMapReact>

//     </div>
