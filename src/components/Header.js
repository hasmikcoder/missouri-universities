import React, {Component} from 'react';
import { Link } from 'react-router-dom';


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
  <div className="navbar navbar-default navbar-static-top">
       <a href='/'className="navbar-brand">
         <img src="images/united-states-flag.png" alt="american flag"/>
            Top 10 Universities in Missouri
        </a>
           <div className="container">
               <ul className="nav navbar-nav row">
                   <li><Link to='/'>Home</Link></li>
                  <li><Link to ='/about'>About</Link></li>
                  <li><Link to ='/contact'>Contact</Link></li>
               </ul>
          </div>
  </div>
  </header>
)

export default Header;
