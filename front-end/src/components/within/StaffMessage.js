import React from "react"
import styled from "styled-components";

const Styles = styled.div`




.incoming-message {
    width: 140px;
    margin-top: 25px;
    text-align: center;
    border-radius: 10px;
    line-height: 20px;
    background-color: rgba(225, 70, 70, 0.838);
    animation: request-pulse 2.4s infinite;
    font-style: italic;
    cursor: pointer;
    transition: 300ms;
    z-index: 10;
    position: relative;
    
}

.response-form {
    font-size: 10px;
    font-style: none;
    font-weight: bold;
    text-align: top;
    margin-top: 25px;
    animation: text-wait 1000ms;
    vertical-align: middle;

}

.message-text {
    border-radius: 5px;
    background-color: rgba(225, 70, 70);
    margin-top: 15px;
    margin-left: 5px;
    margin-right: 5px;
    font-style: normal;
    text-align: left;
    animation: text-wait 1000ms;
}

.text-box {
    height: 120px;
    border-radius: 5px;
}

.send-message {
    border-radius: 5px;
}

  

`;

export default function StaffMessage(props) {

    const messageThing = {
        height: props.styles.height,
        transition: '300ms'
        // height: "200px"        
        // height: props.styles.height,
    }

    const handleClick = () => {

        props.toggleMessage();
       
    }

    const writeText = () => {
        if(props.styles.text !== "Doctor request") {
            return (
                <div className="message-text">{props.styles.text}</div>
            )
        }
        else {
            return (
                <div>{props.styles.text}</div>
            )
        }
    }


    const haveForm = () => {
        if(props.styles.toggledMessage) {
            return (
                    <form className="response-form">
                        <textarea rows="8" cols="18" onClick={(e) => {e.stopPropagation()}} className="text-box" type="text"  placeholder="Enter Response"/>
                        <button onClick={(e) => {e.stopPropagation(); props.readMessage()}} className="send-message">Send</button>
                    </form>
                
            )
        }
    }
        return (
            <Styles>
                <div className="wrapper" onClick={(e) => {e.stopPropagation()}}>
                    <div className="incoming-message" style={messageThing} onClick={handleClick}>
                        {writeText()}
                        {haveForm()}
                    </div>
                </div>
            {/* <div id='popup'>  
                <div id='popup-inner'>  
                    <div id="request">{props.staff.request}</div>  
                    <button id="close-button" onClick={props.closeMessage}>close me</button>  
                </div>  
            </div>   */}
            </Styles>
            );  
    

}    

