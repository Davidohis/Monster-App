import React from "react";
import "tachyons";

import Monster from "./monster-app/monster";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FooterComponent from './components/footer/footer';
import NavbarComponent from './components/navbar/navbar';
import HomePage from './page/HomePage';


export default function App() {
  return (
    <div className="App">
    <Router>
    <NavbarComponent />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/robots' component={Monster} />
        </Switch>
    </Router>
    <FooterComponent />
</div>
      
    
  )
}

