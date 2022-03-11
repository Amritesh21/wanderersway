import Logo from '../NavigationBar/wanderer_logo5.PNG'; 
import './LoginOrSignUp.css'
export const LoginOrSignUp = (props) => {

    var getlog = props.getLogin;

    const setOnClickValues = () => {
        props.setLogin('none')
        props.setFilter('none');
    }

    return(
        <div className="LoginSignUp" style={{display: getlog}}>
            <button id='close' onClick={() => setOnClickValues()}>X</button>
        </div>
    )
}