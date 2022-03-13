import UserIcon from '../userIcon.png';
import './UserDetails.css';
import {LoginOrSignUp} from '../../UserOperation/LoginOrSignUp';
import React, { useState } from 'react';

export const NotLoggedIcon = (props) => {
    const login = () => {
        props.setLogin('block');
        props.setFilter('blur(4px)');
        props.setscroll('fixed');
        props.setPointerEvt('none');
    }

    return(
        <button onClick={login}  className='bookAppointment login-button'>Login</button>
    )
}

export const LoggedInIcon = (props) => {
    return(
        <>
            <img className="userIcon" src={UserIcon}/>
            <div className="userDetailsPopUp">
                <button className='bookAppointment login-button' onClick={props.login}>Login</button>
            </div>
        </>
    )
}

export const UserDetails = (props) => {

    const IconHandler = () => {
        if(props.loginStatus){
            return <LoggedInIcon {...props}/>
        }
        else{
            return <NotLoggedIcon {...props}/>
        }
    }

    return(
        <div className="userDetails">
            {IconHandler()}
        </div>
    )
}