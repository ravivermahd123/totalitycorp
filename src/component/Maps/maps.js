import React from "react";
import "./maps.css";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Maps() {
   
 
  return (
    <>
    <div className="map">
        <div className="container">
            <div className="row">
                <div className="map-col1">
                <div className="container">
                                <input type="input" className="form__field" placeholder="Find a store" name="name" id='name'/>
                                <button className="button" >Filter</button>

                                <h1>We are unable to access your exact location</h1>
                                <p>To find a Starbucks store, use the search feature, navigate using the map, or turn on location services.</p>
                    </div>
                </div>
                <div className="map-col2">
                    <div className="container">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=dewas,india&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    {/* <div style={{ height: '100vh', width: '100%' }}>
                        <GoogleMapReact
                            // bootstrapURLKeys={{ key: "" }}
                            // defaultCenter={defaultProps.center}
                            // defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                            />
                        </GoogleMapReact> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
      </>
  );
}
