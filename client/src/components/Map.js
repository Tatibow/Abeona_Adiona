import React, {useState, useEffect} from "react"
// import {GoogleMap, Marker} from "@react-google-maps/api";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import GoogleMapReact from "google-map-react"
import Geocode from "react-geocode"
//import ComponentMarker from "./ComponentMarker"
Geocode.setApiKey("AIzaSyDO2jiAlBpxs9XIZ9I86C85Mu62hEgzKzc");
Geocode.setLanguage("en")
Geocode.enableDebug();
// import {Paper, Typography, useMediaQuery} from "@material-ui/core";


function Map({locations}) {
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState(null)

//const mobile = useMediaQuery('(min-width:600px'))
//const AnyReactComponent = ({ text }) => <div>{text}</div>;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  const defaultProps = {
   center: {
    lat: 0,
    lng: 0
   },
    zoom: 14
  };

   const addresses = locations?.map(location => location.address)



  //let latsAndLngs = []
  let mapData=[]
  addresses.forEach((address, i) => {
    Geocode.fromAddress(address).then(
      (response) => {
       const {lat , lng} = response.results[0].geometry.location;
        const northEast = {
          northEastLat:response.results[0].geometry.viewport.northeast.lat,
          northEastLng:response.results[0].geometry.viewport.northeast.lng

        }
       const southWest = {
         southWestLat: response.results[0].geometry.viewport.southwest.lat,
         southWestLng: response.results[0].geometry.viewport.southwest.lng
       }
       const addressData = {
        latitude:lat,
        longitude: lng,
        trLat:northEast.northEastLat,
        trLng:northEast.northEastLng,
        blLat:southWest.southWestLat,
        blLng:southWest.southWestLng
      }
        mapData.push(addressData)
        //latsAndLngs.push({lat, lng})
      },
      (error) => {
        console.error(error);
      }
    );
  })

  console.log("mapData", mapData)


  return (
    <div className="map-container" style={{ height: '85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyDO2jiAlBpxs9XIZ9I86C85Mu62hEgzKzc"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={coordinates}
        margin={[50, 50, 50, 50]}
        options={{mapId:"23251313a92fddc7"}}
        onChange={(e) => {
            setCoordinates({lat: e.center.lat, lng: e.center.lng})
             setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
      >
        {mapData?.map((data,i)  => (
           <div
            lat={data.latitude}
            lng={data.longitude}
            key={i}
           >
           {
            <LocationOnOutlinedIcon color="primary" fontSize="large"/>
           }
           </div>
        ))}
      </GoogleMapReact>
    </div>
  );
    }

export default Map

