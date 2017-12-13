import React, { Component } from 'react';
import { UniversityAPI } from '../api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';





const NEARBY_SCHOOLS_ROOT_URL= "https://www.nearbycolleges.info/api/everything/"

// The University looks up the university using the number parsed from
// the URL's pathname. If no university is found with the given
// index, then a "university not found" message is displayed.
class University extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      acceptanceRate: 0,
      test: "",
      website: "",

    }
  }
componentDidMount (){
  const university = UniversityAPI.get(
    parseInt(this.props.match.params.id, 10))
   //axios.get('/universityData.json')
  axios.get(`${NEARBY_SCHOOLS_ROOT_URL}${university.unitid}`)

         .then(response => {
           console.log(response.data.result)

           const image = response.data.result.school.img;
           this.setState({img: image});
           console.log(this.state.img)

           // if (! const image && this.setState) {
  			// return <div>Sorry, the image was not found</div>


           const admission = response.data.result.admission.acceptanceRate;
           this.setState({ acceptanceRate: admission});

            const enrollment =response.data.result.enrollment.total;
            console.log (response.data.result.enrollment.total)
            this.setState({total:enrollment});

            const test = response.data.result.test.act75;
            console.log (response.data.result.test.act75)
            this.setState({act75: test});

            const location = response.data.result.location.website;
            console.log (response.data.result.location.website)
            this.setState ({website: location});

         })
}
  render() {


    const university = UniversityAPI.get(
    parseInt(this.props.match.params.id, 10)
 )
  if (!university) {
    return <div>Sorry, but the university was not found</div>
  }
    return (

<div> <Header/>



       <div className="university-info">
            <h1>{university.name} (#{university.rank})</h1>
            <h2>Location: {university.location}</h2>
            <Link to='/AllUniversities'></Link>
            <img className="main-university-photo" src={this.state.img}></img>
            <p>Acceptance Rate:   {this.state.acceptanceRate}%</p>
            <p>Total enrollment:   {this.state.total}</p>
            <p>ACT  75th percentile:   {this.state.act75} </p>
            <p>Website:  <a href="{this.state.website}" target="_blank">{this.state.website}</a></p>
        
       </div>
  </div>
)
  }
}

export default University;
