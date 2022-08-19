import React from 'react';
import DisplayCSS from '../Styles/display.module.css'

const Displayed = (props) => {
    if (props.firstName) {
        return (
            <div>
                <div className={DisplayCSS.display}>
                    <p><span>First Name:</span> {props.firstName}</p>
                    <p><span>Last Name:</span> {props.lastName}</p>
                    <p><span>Phone:</span> {props.phone}</p>
                    <p><span>Email:</span> {props.email}</p>
                    <button onClick={props.edit}>Edit</button>
                </div>
                
            </div>
        );
    } else if (props.schoolName) {
        return (
            <div>
                <div className={DisplayCSS.display}>
                    <p><span>School Name:</span> {props.schoolName}</p>
                    <p><span>Area Of Study:</span> {props.areaOfStudy}</p>
                    <p><span>From:</span> {props.from}</p>
                    <p><span>To:</span> {props.to}</p>
                    <button onClick={props.edit}>Edit</button>
                </div>
                
            </div>
        );
    } else {
        return (
            <div>
                <div className={DisplayCSS.display}>
                    <p><span>Company:</span> {props.company}</p>
                    <p><span>Job Title:</span> {props.title}</p>
                    <p><span>Start:</span> {props.start}</p>
                    <p><span>End:</span> {props.end}</p>
                    <button onClick={props.edit}>Edit</button>
                </div>
                
            </div>
        );
    }
    
}

export default Displayed;
