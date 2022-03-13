import './LoginSignUpForm.css';
import Logo from '../NavigationBar/wanderer_logo5.PNG'; 
import { useState } from 'react';

export const LoginInputFields = (props) => {

    return(
        <>
            <input name="userName" placeholder="Enter Username Or Email" 
            type="email" className='box' value={props.emailvar} 
            onChange={(e) => props.setEmail(e.target.value)}/>

            <input name="password" placeholder="Enter Password"
             type="password" className='box'
             value={props.passwordvar} onChange={(e) => props.setPassword(e.target.value)}/>
        </>
    )
}

export const SignUpInputFields = () => {
    return(
        <>
            <input name="userName" placeholder="Enter Username Or Email" type="email" className='box'/>
            <input name="password" placeholder="Enter Password" type="password" className='box'/>
            <input name="password" placeholder="Confirm Password" type="password" className='box'/>
        </>
    )
}

export const LoginOrSignUpForm = (props) => {

  //  const [status, setStatus]  = useState(props.status);
    var status = props.status;
    var setStatus = props.setStatus;
    const loginConst = 'Login'
    const signUpConst = 'Sign Up' 
    const signUpMessage = 'New User Sign-Up Here';
    const LoginMessage = 'Login Here';
    const statusMessage = props.statusMessage;
    const setStatusMessage = props.setStatusMessage;

    // user login and signup logic 

    var [login, setLoginDetails] = useState({email :'', password: ''});
    var [email,setEmail] = useState('');
    var [password,setPassword] = useState('');

    const SignUpMethod = () => {
        if(status === 'Login'){
            setStatus(signUpConst);
            setStatusMessage(LoginMessage);
            props.setStatus(signUpConst);
        }else{
            setStatus(loginConst);
            setStatusMessage(signUpMessage);
            props.setStatus(loginConst);
        }
    }

    const getInputFields = () => {
        if(status === 'Login'){
        return <LoginInputFields emailvar={email} passwordvar={password} setEmail={setEmail} setPassword={setPassword}/>
        }
        else{
            return <SignUpInputFields/>
        }
    }
 
    const LoginOrSignUpClickEvent = (e) => {
        e.preventDefault();
        if(email && password){
            setLoginDetails({email:email,password:password});
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
