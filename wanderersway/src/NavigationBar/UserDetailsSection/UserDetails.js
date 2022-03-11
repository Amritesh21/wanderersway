import UserIcon from '../userIcon.png';
import './UserDetails.css';
import {LoginOrSignUp} from '../../UserOperation/LoginOrSignUp';
import React, { useState } from 'react';
export const UserDetails = (props) => {

    const login = () => {
        props.setLogin('block');
        props.setFilter('blur(4px)');
    }

    return(
        <div className="userDetails">
            <img className="userIcon" src={UserIcon}/>
            <div className="userDetailsPopUp">
                <button className='bookAppointment login-button' onClick={login}>Login</button>
            </div>
        </div>
    )
}