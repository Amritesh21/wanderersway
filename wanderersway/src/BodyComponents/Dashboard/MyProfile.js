import { Button } from "@material-ui/core"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Logo from '../../NavigationBar/userIcon.png'; 
import { ApiInteraction } from "../../UserOperation/ApiInteraction";
import { TextFieldForAppointment } from "../OurServices/BookAppointmentComponent"
import './MyProfile.css';

export const MyProfile = () => {

    const navigate = useNavigate();

    const [userVariable, setUserVariable] = useState({
        firstName: sessionStorage.getItem('firstName'),
        lastName: sessionStorage.getItem('lastName'),
        emailId: sessionStorage.getItem('email'),
        city: sessionStorage.getItem('city'),
        state: sessionStorage.getItem('state'),
        pin: sessionStorage.getItem('pin'),
        phno: sessionStorage.getItem('phno')
    })

    const [firstName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState(sessionStorage.getItem('city'));
    const [state, setState] = useState(sessionStorage.getItem('state'));
    const [pin, setPin] = useState(sessionStorage.getItem('pin'));
    const [phno, setPhno] = useState(sessionStorage.getItem('phno'));

    const UpdateUserDetails = () => {
        setUserVariable({
            firstName: firstName,
            lastName: lastName,
            pin: pin,
            phno: phno,
            city: city,
            state: state,
            emailId: sessionStorage.getItem('email')
        })
    }

    useEffect(() => {
        if(userVariable.firstName !== ''){
        console.log(userVariable.firstName);
        console.log(userVariable.email);
        console.log(userVariable.pin);
        var updation = false;
        ApiInteraction.updateMethod(userVariable).then((response) => {
            console.log(response.data);
             //navigate('/dashboard');
        })
    }
    },[userVariable]);

    return(
        <div className="MyProfileContainer">
            <div className='left-side-myprofile'>
                <img src={Logo}/>
            </div>
            <div className="FormContainer">
            <TextFieldForAppointment labelVal={"Email"} valueVar={sessionStorage.getItem('email')}/>
            <div style={{display:'flex'}}>
            <TextFieldForAppointment labelVal={"First Name"} valueVar={firstName} setValueVar={setFirstName}/>
            <TextFieldForAppointment labelVal={"Last Name"} valueVar={lastName} setValueVar={setLastName}/>
            </div>
            <div style={{display:'flex'}}>
            <TextFieldForAppointment labelVal={"Resenditial Town"} valueVar={city} setValueVar={setCity}/>
            <TextFieldForAppointment labelVal={"Resenditial State"} valueVar={state} setValueVar={setState}/>
            </div>
            <TextFieldForAppointment labelVal={"Area PIN"} valueVar={pin} setValueVar={setPin}/>
            <TextFieldForAppointment labelVal={"Phone No."} valueVar={phno} setValueVar={setPhno}/>
            <div style={{display:'flex'}}>
            <Button variant="contained" style={{margin:'10px', backgroundColor:'purple', color:'white'}} onClick={(e) => UpdateUserDetails(e)}>Confirm/Update</Button>
            <Link to="/dashboard" style={{textDecoration:'none'}}><Button variant='contained' style={{margin:'10px', backgroundColor:'red',color:'white'}}>Back</Button></Link>
            </div>
            </div>
        </div>
    )
}