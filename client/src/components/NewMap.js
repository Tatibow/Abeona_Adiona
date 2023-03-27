// import React, {useState, useEffect} from "react"
// import {GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow} from "react-google-maps";
// import Geocode from "react-geocode"
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"

// // mapId:"23251313a92fddc7"
// // onChange={(e) => {
// //     setCoordinates({lat: e.center.lat, lng: e.center.lng})
// //      setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
// // }}
// Geocode.setApiKey("AIzaSyDVUC_7JoTjVwegrs86e7QbTEZfSmKyNDI");
// Geocode.setLanguage("en")
// Geocode.enableDebug();

// function MapComponent() {
//     const [coordinates, setCoordinates] = useState({})
//     const [bounds, setBounds] = useState({})

//     const [locations, setLocations] = useState([])

//     useEffect(() => {
//         fetch("/locations")
//         .then(res => res.json())
//         .then(locationData => setLocations(locationData))
//     }, [])


//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
//         setCoordinates({lat: latitude, lng: longitude})
//     })
//   }, [])


//    const addresses = locations?.map(location => location.address)


//   let mapData=[]
//   addresses.forEach((address, i) => {
//     Geocode.fromAddress(address).then(
//       (response) => {
//        const {lat , lng} = response.results[0].geometry.location;


//        const addressData = {
//         latitude:lat,
//         longitude: lng,
//        }
//         mapData.push(addressData)
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   })

//   console.log("mapData", mapData)

//     return (
//         <GoogleMap
//             defaultZoom={12}
//             defaultCenter={{lat: 0, lng: 0}}
//         >
//             {mapData.map(data => (
//                 <Marker
//                     key={data.id}
//                     position={{
//                         lat: data.latitude,
//                         lng: data.longitude
//                     }}
//                 />
//             ))}
//         </GoogleMap>
//     )
// }
// const WrappedMap = withScriptjs(withGoogleMap(MapComponent))

// function NewMap() {

//   return (
//     <WrappedMap
//     googleMapURL={`https://maps.googleapis.com/maps/api/js? v=3.exp&libraries=geometry,drawing,places&amp;key=AIzaSyDVUC_7JoTjVwegrs86e7QbTEZfSmKyNDI`}
//     loadingElement={<div style={{height:"100%"}}/>}
//     containerElement={<div style={{height:"100%"}}/>}
//     mapElement={<div style={{height:"100%"}}/>}
//     options={{mapId:"23251313a92fddc7"}}
//     />
//   )
// }

// export default NewMap

