import React from 'react'
import {UniversityAPI} from '../api'
import { Link } from 'react-router-dom'

// The AllUniversities iterates over all of the universities and creates
// a link to their profile page.
const AllUniversities = () => (
  <div>
   <ul>
     {
       UniversityAPI.all().map(u => (

         <li key={u.id}>

           <Link to={`/university/${u.id}`}>{u.name}</Link>
          <div className="col-md-8 offset-md-3">{u.location}</div> 

         </li>

       ))
     }
   </ul>
 </div>
)

export default AllUniversities;
