import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import NavPin from '../NavPin.svg';
import cuddy from "../staffImages/cuddy.png"



import PrivateRoute from "./PrivateRoute";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from './Sidebar';
import About from './About';
import Home from "./Home";

const Styles = styled.div`
  .navbar { 
    z-index: 2;
    background-color: #272631;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.575);
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    line-height: 16px;
    font-size: 16px;
    color: #9FFFCB;
    transition: 150ms;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .app-logo-small {
    height: 15vmin;
    pointer-events: none;
  }

  .title-box {
    position: absolute;
    left: 215px;
    width: 800px;
    text-align: center;
  }

  .app-name-nav {
    letter-spacing: 0.2em;
    font-weight: 800;
    font-size: 2.5em;
    margin-top: 0.25em;
    text-align: center;
    color: #9efecb;
    font-style: italic;
    text-shadow: 0px 5px 8px rgba(158, 254, 203, 0.575);

  }
`;

export const NavigationBar = (props) => (
  <Styles>
    <Navbar expand="lg">
    <img src={NavPin} className="app-logo-small" alt="logo" />

      <Navbar.Brand href="/">
        Dr. {props.user.name}
        <img src={cuddy} className="admin-portrait"/>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <div className="title-box">
      <h1 className="app-name-nav">Emergent-Need</h1>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/login">Logout</Nav.Link></Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)