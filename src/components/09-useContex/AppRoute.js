import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';

import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Screen404 from './Screen404';

export const AppRoute = () => {
  return <Router>
    <div>
      <Navbar />      
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/about" component={AboutScreen} />
        <Route path='/404' component={Screen404} />
        <Redirect to='/404' /> 
      </Switch>
    </div>
  </Router>
};
