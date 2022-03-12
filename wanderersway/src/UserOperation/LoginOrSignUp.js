import { useState } from 'react';
import Logo from '../NavigationBar/wanderer_logo5.PNG'; 
import './LoginOrSignUp.css'
import { LoginOrSignUpForm } from './LoginSignUpForm';
export const LoginOrSignUp = (props) => {

    const [userStatus, setUserStatus] = useState('Login');
    const [statusMessage, setStatusMessage] = useState('New User Sign-Up Here');

    var getlog = props.getLogin;

    const setOnClickValues = () => {
        props.setLogin('none')
        props.setFilter('none');
        props.setscroll('static');
        props.setPointerEvt('auto')
        setUserStatus('Login');
        setStatusMessage('New User Sign-Up Here');
    }

    return(
        <div className="LoginSignUp" style={{display: getlog}}>
            <button id='close' onClick={() => setOnClickValues()}>X</button>
            <LoginOrSignUpForm status={userStatus} setStatus={setUserStatus} statusMessage={statusMessage} setStatusMessage={setStatusMessage}/>
        </div>
    )
}