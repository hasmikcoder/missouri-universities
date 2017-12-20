import React from 'react'
import {UniversityAPI} from '../api'
import { Link } from 'react-router-dom'
import '../App.css';

// The AllUniversities iterates over all of the universities and creates
// a link to their profile page.
const AllUniversities = () =>
// return (
//  <div className="row" key={ index }>
//
//      <div className="col-md-offset-3">{University.rank}</div>
//      <div className="col-md-7">{University.name}</div>
       // <div className="col-md-2">{University.location}</div>
//
// </div>);
(
  <div>
   <ul>
     {
       UniversityAPI.all().map(University => (

        // <li key={University.id}>
        //
        //   <Link to={`/university/${University.rank}`}>{University.name}</Link>
        //
        //   <div className="col-md-8 offset-md-3">{University.location}</div>
        //
        // </li>
        <div className="row" key={ University.id }>

             <div className="col-md-1 badge badge-primary custom-badge">{University.rank}</div>
             <Link to={`/universities/${University.rank}`}  className="col-md-5 offset-md-1">{University.name}</Link>
             <div className="col-md-4">{University.location}</div>

        </div>
      ))
    }
   </ul>
 </div>
)

export default AllUniversities;
