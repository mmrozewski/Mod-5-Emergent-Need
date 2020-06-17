import React from "react"

import PrivateRoute from "./PrivateRoute";
import { Route, Switch, Redirect } from "react-router-dom";
import { NavigationBar } from './NavigationBar';
import Sidebar from './Sidebar';
import About from './About';
import Home from "./Home";




function RenderPrivate(props) {
    return (
      <React.Fragment>
          <NavigationBar user={props.user}/>
  
          <Sidebar />
  
          <Switch>
            <PrivateRoute path="/" user={props.user} component={Home} />
            <PrivateRoute path="/about" user={props.user} component={About} />
          </Switch>
      </React.Fragment>
    );
  }
  
  export default RenderPrivate;