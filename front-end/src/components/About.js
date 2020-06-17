import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from './NavigationBar';
import Sidebar from './Sidebar';
import hospitalLogo from "../hospitalLogo.png";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export default function About(props) {
  return (

  <React.Fragment>
    <NavigationBar user={props.user}/>
    <Sidebar/>
    <div className="b-g">
        <img className="hospital-logo" src={hospitalLogo} />
        </div>
    <GridWrapper>
      <h2>About Page</h2>
    </GridWrapper>
  </React.Fragment>
  )
}