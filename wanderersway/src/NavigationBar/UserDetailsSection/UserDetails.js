import UserIcon from '../userIcon.png';
import './UserDetails.css';
import {LoginOrSignUp} from '../../UserOperation/LoginOrSignUp';
import React, { useState, useMemo, useEffect } from 'react';

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
    var logout = () => {
        sessionStorage.setItem('email','');
        sessionStorage.setItem('firstName','');
        sessionStorage.setItem('lastName','');
        sessionStorage.setItem('valid',false);
    }
    return(
        <>
            <img className="userIcon" src={UserIcon}/>
            <div className="userDetailsPopUp">
                <button className='bookAppointment logout-button' onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export const UserDetails = (props) => {

    var [renderStatus,setRenderStatus] = useState(props.loginStatus);

    useEffect(() => {
        console.log(props.loginStatus);
        setRenderStatus(props.loginStatus);
    },[props.status])

    var IconHandler = useMemo(function updateLogin() {
        if(renderStatus === "true"){
            return <LoggedInIcon {...props}/>
        }
        else{
            return <NotLoggedIcon {...props}/>
        }
    },[renderStatus])

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