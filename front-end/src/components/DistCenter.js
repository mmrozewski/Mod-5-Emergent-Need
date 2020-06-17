import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from './NavigationBar';
import Sidebar from './Sidebar';
import Map from "./within/Map";
import hospitalLogo from "../hospitalLogo.png";
import {Redirect} from "react-router-dom"
// import MedList from "./MedList";



const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

const Greeting = styled.div`
  letter-spacing: 0.1em;
  font-weight: 800;
  font-size: 2.5em;
  margin-left: 2.5em;
  margin-top: 0.25em;
  text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.475);
`;


export default function DistCenter(props) {

  const handleSubmit = () => {
      alert(`Medicine and Devices:
             NSAIDs
             Corticosteroids
             Immunosuppressants
             Hydroxychloroquine
             Methotrexate


             ETA:  
      `);
    
  }

  return (

  <React.Fragment>
    <NavigationBar user={props.user}/>
    <Sidebar/>
    <div className="b-g">
        <img className="hospital-logo" src={hospitalLogo} />
        </div>
    <Greeting id="greeting">{props.user.username ? `${props.center.name}` : null }</Greeting>
    <Map hospital={props.hospital} center={props.center}></Map>
    <div className="search-med-container">
    <form className="search-med">
      <input id="input-search" type="text" placeholder="Enter Medical Situation"/>
    </form>
      <button onClick={handleSubmit} >Search</button>
    </div>
  </React.Fragment>
  )
}