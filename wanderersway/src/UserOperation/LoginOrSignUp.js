import { SnackbarProvider } from 'notistack';
import { useState } from 'react';
import Logo from '../NavigationBar/wanderer_logo5.PNG'; 
import './LoginOrSignUp.css'
import { LoginOrSignUpForm } from './LoginSignUpForm';
export const LoginOrSignUp = (props) => {

    const [loginOrSignUpFormDisplay, setLoginOrSignUpFormDisplay] = useState({
        displayStatus : 'Login',
        displayMessage : 'New User Sign-Up Here'
    }); 

    var getlog = props.loginPopUpEffects.displayLoginPopUp;

    const setOnClickValues = () => {
        props.setLoginPopUpEffects({
            displayLoginPopUp: 'none',
            filter: 'none',
            scroll: 'static',
            pointerEvt: 'auto'
        });
        setLoginOrSignUpFormDisplay({
            displayStatus: 'Login',
            displayMessage : 'New User Sign-Up Here'
        })
    }

    return(
        <div className="LoginSignUp" style={{display: getlog}}>
            <button id='close' onClick={() => setOnClickValues()}>X</button>
            <SnackbarProvider maxSnack={1}>
            <LoginOrSignUpForm loginOrSignUpFormDisplay={loginOrSignUpFormDisplay} setLoginOrSignUpFormDisplay={setLoginOrSignUpFormDisplay} closeWindow={setOnClickValues} {...props}/>
            </SnackbarProvider>
        </div>
    )
}