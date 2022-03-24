import UserIcon from '../userIcon.png';
import './UserDetails.css';
import {LoginOrSignUp} from '../../UserOperation/LoginOrSignUp';
import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@material-ui/core';

export const NotLoggedIcon = (props) => {
    const login = () => {
        props.setLoginPopUpEffects({
            displayLoginPopUp: 'block',
            filter: 'blur(4px)',
            scroll: 'fixed',
            pointerEvt: 'none'
        });
    }

    return(
        <button onClick={login}  className='bookAppointment login-button'>Login</button>
    )
}

export const LoggedInIcon = (props) => {
    var logout = () => {
        sessionStorage.setItem('email','');
        sessionStorage.setItem('firstName','');
        sessionStorage.setItem('lastName','');
        sessionStorage.setItem('valid',false);
        props.setLoginStatus(false);
    }
    return(
        <>
            <img className="userIcon" src={UserIcon}/>
            <div className="userDetailsPopUp">
                <div id="userWelcomeMessage">
                    <img src={UserIcon}/>
                    <div className="profile-buttons-container">
                    <button className='profile-button'>DashBoard</button>
                    <button className='profile-button'>Edit Profile</button>
                    <button className='profile-button'>View Appointments</button>
                    </div>
                </div>
                <button className='bookAppointment logout-button' onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export const UserDetails = (props) => {

    var IconHandler = useMemo(function updateLogin() {
        if(props.loginStatus === true){
            return <LoggedInIcon {...props}/>
        }
        else{
            return <NotLoggedIcon {...props}/>
        }
    },[props.loginStatus])

    /*const IconHandler = () => {
        if(renderStatus === true){
            return <LoggedInIcon {...props}/>
        }
        else{
            return <NotLoggedIcon {...props}/>
        }
    }*/

    return(
        <div className="userDetails">
            {IconHandler}
        </div>
    )
}