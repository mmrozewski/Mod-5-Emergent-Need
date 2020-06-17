import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import StaffMessage from "./StaffMessage";


const Styles = styled.div`

    .staff-layout {
        overflow: visible;
        height: 120px;
        border-radius: 5px;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.600);
        padding: 10px;
        cursor: default;
        transition: 200ms;
        &:hover {
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.775);
        }
        
    }
    .staff-port {
        width: 100px;
        position: absolute;
        border-radius: 5px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.575);

    }

    #pic-col {
        height: 100%
        padding-right: 0px;
    }
    
    #text-col {
        height: 100%;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.275);
        white-space: nowrap;
        top: 8px;
        left: -20px;
        padding-left: 0px;
        text-align: left;
        font-size: 18px;
        font-weight: 600;
        line-height: 15px;
        
    }
    
    .specialty {
        height: 30px;
        margin-top: 4px;
        text-shadow: none;
        line-height: 9px;
        font-size: 10px;
        white-space: normal;
    }


    .message-box {
        overflow: visible;
        height: 200px;
        line-height: 10px;
        text-shadow: none;
        white-space: normal;
        font-size: 11px;
    }

    // #request-container {
    //     height: 400px;
    //     overflow: visible;
    // }

    // .incoming-message {
    //     margin-top: 25px;
    //     text-align: center;
    //     width: 100%;
    //     border-radius: 10px;
    //     line-height: 20px;
    //     background-color: rgba(225, 70, 70, 0.938);
    //     animation: request-pulse 2.4s infinite;
    //     font-style: italic;
    //     cursor: pointer;
    //     transition: 200ms;
    // }

    #no-message {
        margin-top: 25px;
        text-align: center;
        
        line-height: 20px;
        color: rgba(0, 0, 0, 0.500);
    }

    .staff-card-bg {
        position: relative;
        right: 0px;
        overflow: hidden;
        height: 50px;
        z-index: -1;
        filter: invert(69%) sepia(7%) saturate(146%) hue-rotate(211deg) brightness(92%) contrast(83%);
    }
    .staff-card-logo {
        z-index: -1;
        height: 50px;
    }
`;




export default class StaffMember extends Component {
    
    state = {
        toggledMessage: false,
        read: false,
        height: "100%",
        text: "Doctor request"
    }

    readMessage = () => {
        this.setState({
            read: true
        })
    }
    
    
    
    drMessage = (props) => {
        if(props.staff.request && !this.state.read) {
            return (
                <StaffMessage staff={this.props.staff} styles={this.state} readMessage={this.readMessage} toggleMessage={this.toggleMessage} />
            )

        }
        else if(!props.staff.request || this.state.read) {
            return (
                <div id="no-message">No messages</div>
            )
        }
    }

    
    

    toggleMessage = () => {
        this.setState({
            toggledMessage: !this.state.toggledMessage
        }, () => {
        if(this.state.toggledMessage == false) {
            this.setState({
                height: "100%",
                text: "Doctor request"
            })
        }
        else 
        if(this.state.toggledMessage == true) {
            this.setState({
                height: "280px",
                text: `${this.props.staff.request}`
            })
        }
    }
        )
    }  
    
    
    

    render() {
    return (
        <Styles>
            
        <Container className="staff-layout">
            <Row>
                <Col id="pic-col"> <img className="staff-port" src={this.props.staff.img}></img> </Col>
                    <Col id="text-col"> 
                        {this.props.staff.name}
                        <div className="specialty">
                            {this.props.staff.specialty}
                        </div>
                        <div className="message-box">
                            {this.drMessage(this.props)}
                        </div>
                        {/* <div>
                            {this.state.showMessage ? <StaffMessage staff={this.props.staff} closeMessage={this.toggleMessage.bind(this)}></StaffMessage>
                        </div> */}
                    </Col>
                
            </Row>

        </Container>
        </Styles>
    )
    }

}
