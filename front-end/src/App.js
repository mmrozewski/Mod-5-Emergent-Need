import React, { Component } from 'react';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import DistCenter from "./components/DistCenter";
import RenderPrivate from "./components/RenderPrivate";
import About from "./components/About"
import { NavigationBar } from "./components/NavigationBar"
import Sidebar from "./components/Sidebar"

import { Route, Switch, Redirect } from "react-router-dom";

const loginUrl = "http://localhost:3000/api/v1/login"
const profileUrl = "http://localhost:3000/api/v1/profile"

export default class App extends Component {

  state = {
    user: {},
    hospital: {},
    center: {}
  }

  componentDidMount(){
    if(localStorage.token){
      fetch(profileUrl, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json())
      .then(result => {
      this.setState({ user: result.user })
      fetch(`http://localhost:3000/api/v1/hospitals/${result.user.hospital_id}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.token}`
          }
        })
        .then(response => response.json())
        .then(result_2 => {
          this.setState({ hospital: result_2 })
          fetch(`http://localhost:3000/api/v1/centers/${result.user.center_id}`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${localStorage.token}`
            }
          })
          .then(response => response.json())
          .then(result_3 => {
            this.setState({center: result_3})
          })
        })
      })
    }
  }

  login = (user) => {
    return fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(result => {
      if(result.message) {
        alert(result.message)
      }
      else {
        localStorage.setItem("token", result.jwt)
        this.setState({ user: result.user })
        fetch(`http://localhost:3000/api/v1/hospitals/${result.user.hospital_id}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.token}`
          }
        })
        .then(response => response.json())
        .then(result_2 => {
          this.setState({ hospital: result_2 })
          fetch(`http://localhost:3000/api/v1/centers/${result.user.center_id}`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${localStorage.token}`
            }
          })
          .then(response => response.json())
          .then(result_3 => this.setState({center: result_3}))
        })
      }
      }
    )
  }
  

  render() {
     
    return (
      <React.Fragment>  
        <Switch>
          <PrivateRoute exact path="/" user={this.state.user} hospital={this.state.hospital} center={this.state.center} component={Home} />
          <PrivateRoute path="/about" user={this.state.user} component={About} />
          <PrivateRoute path="/distcenter" user={this.state.user} hospital={this.state.hospital} center={this.state.center} component={DistCenter} />


          <Route path="/login" render={(props) => <Login {...props} login={this.login} />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </React.Fragment>
      
    );
    
  }
}

