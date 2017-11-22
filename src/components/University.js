import React, { Component } from 'react';
import { UniversityAPI } from '../api';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      test: ""

    }
  }
componentDidMount (){
  const university = UniversityAPI.get(
    parseInt(this.props.match.params.id, 10))
    axios.get(`${NEARBY_SCHOOLS_ROOT_URL}${university.unitid}`)
         .then(response => {
           console.log(response.data.result)

           const image = response.data.result.school.img;
           this.setState({img: image});
           console.log(this.state.img)

           const acceptance = response.data.result.admission.acceptanceRate;
           this.setState({ acceptanceRate: acceptance});

            const test = response.data.result.test.sat75Math;
            console.log (response.data.result.test.sat75Math)
            this.setState({sat75Math: ""});

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
    <div>

      <h1>{university.name} (#{university.rank})</h1>
      <h2>Location: {university.location}</h2>
      <Link to='/AllUniversities'>Back</Link>
      <img src={this.state.img}></img>
      <p>Acceptance Rate: {this.state.acceptanceRate}%</p>
    </div>
)
    }

}

export default University;
