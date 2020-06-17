import React, { Component } from "react"
import styled from 'styled-components';

import pin from '../pin.svg';


export default class Login extends Component {

    state = {
        username: "",
        password: "" 
    }

    componentDidMount(){
        localStorage.removeItem("token")
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
        .then(() => this.props.history.push("/"))
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={pin} className="App-logo" alt="logo" />
              <h1 className="app-name">Emergent-Need</h1>
            <div className="form-container">
            <form className="login-form" onSubmit={this.handleSubmit}>
              
                  <input id="username" name="username" placeholder="Administrator" value={this.state.username} onChange={this.handleChange}  />
              
              
                  <input id="password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
              
              
                  <input type="submit" id="submit" value="Login"/>
              
            </form>
            </div>
    
            </header>
          </div>
        );
      }
}