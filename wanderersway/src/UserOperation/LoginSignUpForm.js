import './LoginSignUpForm.css';
import Logo from '../NavigationBar/wanderer_logo5.PNG'; 
import { useEffect, useState } from 'react';
import { ApiInteraction } from './ApiInteraction';
import { SnackbarProvider, useSnackbar} from 'notistack';

export const LoginInputFields = (props) => {

    return(
        <>
            <input name="userName" placeholder="Enter Username Or Email" 
            type="email" className='box' value={props.emailvar} aria-label="userName" aria-required="true"
            onChange={(e) => props.setEmail(e.target.value)}/>

            <input name="password" placeholder="Enter Password"
             type="password" className='box' aria-label="password" aria-required="true"
             value={props.passwordvar} onChange={(e) => props.setPassword(e.target.value)}/>
        </>
    )
}

export const SignUpInputFields = (props) => {
    return(
        <>
            <input name="userName" placeholder="Enter Username Or Email" type="email" className='box' 
            value={props.email} onChange={(e)=>props.setEmail(e.target.value)}/>
            <input name="password" placeholder="Enter Password" type="password" className='box'
            value={props.passwordvar} onChange={(e) => props.setPassword(e.target.value)}/>
            <input name="confirmPassword" placeholder="Confirm Password" type="password" className='box'
            value={props.confirmPassword} onChange={(e)=> props.setConfirmPassword(e.target.value)}/>
        </>
    )
}

export const LoginOrSignUpForm = (props) => {

    /* 
        Working Architecture
        
        props contains following data :- 
        1. status :- form is for login or signup
        2. staus message :- indicate login or signup message

        based on status here input fields for login or signup are fetched
            if status === "Login" fetch <LoginInputFields/>
            else if status === 'Sign Up' fetch <SignUpInputFields/>
        
        Step-1
        At current component level few states of email, password and confirm password is maintained
        these state variables are passed to <LoginInputFields/> and <SignUpIputFields/>
        where their values are set using onChange method.

        Step-2
        once login/sign-up button is pressed the input values are validated here
        like for login there must be values present in email and password i.e it should not be empty
        And values must be present in inputfields in email and password and confirm password for sign up form

        TODO : validate the input in email field is in format <string>@<String>.<com/in/org...etc>
        TODO+1 : validate the input in password field contains uppercase, lowercase, digit and special character in it.

        Step-3
        Once the input values are validated then set email and password value in login useState variable

        Step-4
        Maintain a useEffect hook for login usestate variable. Such that if the value value changes then make a POST call
        to /user/login api if status is login 
        else make a POST call to user/add api
        and store response in LoggedUserDetails variable  this LoggedUserDetailsVariable we have got as a prop from
        App.js component also sore validity value in validity state variable which is also got as props from App.js .
        
        Stemp-5 (In App.js Component)
        if validity is true the replace Login Button from navigation bar to user Icon
    */


    var status = props.loginOrSignUpFormDisplay.displayStatus;
    const statusMessage = props.loginOrSignUpFormDisplay.displayMessage;

    // constants
    const loginConst = 'Login'
    const signUpConst = 'Sign Up' 
    const signUpMessage = 'New User Sign-Up Here';
    const LoginMessage = 'Login Here';

    // sanckbar

    const { enqueueSnackbar } = useSnackbar();

    // user login and signup logic 
    var [login, setLoginDetails] = useState({email :'', password: ''});
    var [email,setEmail] = useState('');
    var [password,setPassword] = useState('');
    var [confirmPasswword, setConfirmPassword] = useState('');
    var [loginStatus, setLoginStatus] = useState(false);
    var [validity,setValidity] = useState(false);
    var setLoggedUserDetails = props.setLoggedUserDetails;

    useEffect(() => {
        if(status === 'Login'){
            if(login.email && login.password){
                let userLogincred = login
                ApiInteraction.loginMethod(userLogincred).then((response) => {
                    console.log(response.data);
                    setLoggedUserDetails({email:response.data.user.emailId, fname:response.data.user.firstName
                    , lname:response.data.user.lastName, valid: response.data.validity});
                    setValidity(response.data.validity);
                    setLoginStatus(true);
                }).catch(enqueueSnackbar('User not exists', {variant: 'Error'}))
            }
        }else{
            if (login.email && login.password) {
                var newUser = { emailId: login.email, password: login.password, firstName: '', lastName: '' };
                console.log(newUser);
                ApiInteraction.signUpMethod(newUser).then((response) => {
                    console.log(response.data);
                    setLoggedUserDetails({
                        email: response.data.user.emailId, fname: response.data.user.firstName
                        , lname: response.data.user.lastName, valid: response.data.validity
                    });
                    setValidity(response.data.validity);
                    
                    setLoginStatus(true);
                }).catch((error) => {enqueueSnackbar('Unable to create User', {variant: 'Error'})})
            } 
        }
    },[login]);

    useEffect(()=> {
        if(validity === true){
            enqueueSnackbar('Sucessful Login', {variant: 'success'});
            //setLoginStatus(false);
        }
    },[validity]);


    useEffect(() => {
        if(validity){
            props.setLoginPopUpEffects({
                displayLoginPopUp: 'none',
                filter: 'none',
                scroll: 'static',
                pointerEvt: 'auto'
            });
        }
    },[sessionStorage.valid])

    const SignUpMethod = () => {
        if(status === 'Login'){
            props.setLoginOrSignUpFormDisplay({
                displayStatus : signUpConst,
                displayMessage : LoginMessage
            });
        }else{
            props.setLoginOrSignUpFormDisplay({
                displayStatus : loginConst,
                displayMessage : signUpMessage
            });
        }
    }

    const getInputFields = () => {
        if(status === 'Login'){
        return <LoginInputFields emailvar={email} passwordvar={password} setEmail={setEmail} setPassword={setPassword}/>
        }
        else{
            return <SignUpInputFields emailvar={email} passwordvar={password} setEmail={setEmail} setPassword={setPassword}
            confirmPasswword={confirmPasswword} setConfirmPassword={setConfirmPassword}/>
        }
    }
 
    const LoginOrSignUpClickEvent = (e) => {
        e.preventDefault();
        if (status === 'Login') {
            if (email && password) {
                setLoginDetails({ email: email, password: password });
                setPassword('');
                setConfirmPassword('');
            }else{
                enqueueSnackbar('Invalid Username or Password', {variant : 'Error'});
            }
        }else{
            if (email && password && confirmPasswword) {
                if(password === confirmPasswword){
                    setLoginDetails({ email: email, password: password });
                }else{
                    setPassword('');
                    setConfirmPassword('');
                    alert('Password Mis-match. Please re-enter your password');
                }
            }else{
                enqueueSnackbar('Invalid Username or Password', {variant: 'Error'});
            }
        }
    }
    
    

    return(
        <div className="form loginOrSignUpForm">
            <div className='left-side'>
                <img src={Logo}/>
            </div>
            <div className='right-side'>
                <form>
                    <h1>{status}</h1>
                    {getInputFields()}
                    <button type="submit" className="login-form-btn" onClick={(e) => LoginOrSignUpClickEvent(e)}>{status}</button>
                    <span className="newuser-span" onClick={() => SignUpMethod()}>{statusMessage}</span>
            </form>
            </div>
        </div>
    )
}

