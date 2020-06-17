import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from './NavigationBar';
import Sidebar from './Sidebar';
import StaffMember from "./within/StaffMember";
import chase from "../staffImages/chase.png"
import cameron from "../staffImages/cameron.png"
import foreman from "../staffImages/foreman.png"
import house from "../staffImages/house.png"
import wilson from "../staffImages/wilson.png"
import hosp1 from "../hospitalLayout/hosp1.jpg"
import hosp2 from "../hospitalLayout/hosp2.jpg"
import hosp3 from "../hospitalLayout/hosp3.jpg"
import hosp4 from "../hospitalLayout/hosp4.jpg"
import hospitalLogo from "../hospitalLogo.png"

let staff = [{name: "Gregory House", specialty: "Diagnostics, Pathology, Infectious Disease, Intensivist", hasRequest: true, request: "We're running out of vicodin... for the patient", img: house},
{name: "James Wilson", specialty: "Oncology", hasRequest: false, request: null, img: wilson},
{name: "Allison Cameron", specialty: "Immunology", hasRequest: false, request: null, img: cameron},
{name: "Eric Foreman", specialty: "Neurology", hasRequest: true, request: "House is trying to cure this guy's Lupus via lobotomy, thought you'd like to know", img: foreman},
{name: "Robert Chase", specialty: "Surgery, Intensivist", hasRequest: false, request: null, img: chase}]

let hospital = [hosp1, hosp2, hosp3, hosp4];

let GridWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

const Greeting = styled.div`
  letter-spacing: 0.2em;
  font-weight: 800;
  font-size: 2.5em;
  margin-left: 2.5em;
  margin-top: 0.25em;
`;



export default function Home(props) {
    
  
  
    

    const staffDist = () => {return staff.map((staff, index) => {
      return <StaffMember key={index} staff={staff} />
    })}

    // const hospitalLayoutDist = () => {return hospital.map(img, index) => {
    //   return
    // }}


    
  
    return (
      <div>
      <React.Fragment>
        <NavigationBar id="home-nav-bar" user={props.user}/>
        <Sidebar id="home-side-bar" user={props.user}/>
        <Greeting id="hospital-name" style={{textShadow: "0px 3px 8px rgba(0, 0, 0, 0.475)"}}>{props.user.username ? `${props.hospital.name}` : null }</Greeting>
        <div className="b-g">
        <img className="hospital-logo" src={hospitalLogo} />
        </div>
        <GridWrapper className="home">
          <div className="home-section">
            <div className="staff-title">Staff</div>
          </div>
          {staffDist()}
        </GridWrapper>
        {/* <GridWrapper className="hospital-layout">
          <div className="home-section"></div>
        </GridWrapper> */}
      
      </React.Fragment>
      </div>

    
    )
  
}







// import React from "react"
// import { Link } from "react-router-dom"

// export default function Home(props) {
//     return (
        
//         <div className="home">
//             <h1>{props.user.username ? `Welcome Back ${props.user.name}` : null }</h1>
//             <Link to="/login">Logout</Link>
            
//         </div>
//     )
// }