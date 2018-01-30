import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const style = {
	width: '50vw',
	height: '50vh'
}

class GoogleMap extends Component {
	constructor(props) {
		super(props);
   }

	   render() {
        const initialCenter = {lat: this.props.lat, lng: this.props.lng}

     	if (!initialCenter.lng) {

				return (<div>  if we do not have a longitude, do not start rendering the map. </div>)
     	} else {

			return (

				<Map google={this.props.google}
					zoom={12}
					style={style}
				       initialCenter={initialCenter}>
           <Marker  />
			   </Map>
      );
		}
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBH3Rzn-AGZZHPgO--Sv6lTgsxjiXf7t8o'
})(GoogleMap);
