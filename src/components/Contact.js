import React, { Component} from 'react';
import Header from './Header';
import Map from './Map';

const Contact = () => (
   <div> <Header/>
  <div className="contact_info">


    <ul>
      <li> Mail:  4811 Delmar Blvd,
       St. Louis, MO 63108   </li>
      <li> Phone:  (314) 932-2370</li>
      <li> E-mail:  hasvart@gmail.com </li>
    </ul>

    <div> <Map/>
    </div>
  </div>
  </div>

);

export default Contact;
