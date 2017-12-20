import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import University from './components/University'
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
  <div>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/universities/:id' component={University} />
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
  </Switch>
  </div>

  </BrowserRouter>, document.getElementById('root'));







// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
  <BrowserRouter>

    </BrowserRouter>
  </main>
)

export default Main;
