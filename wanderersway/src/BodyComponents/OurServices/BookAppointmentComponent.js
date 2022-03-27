import { Button, FormControlLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from "@material-ui/core"
import AppointmentImg from './appointmentImage.PNG'; 

import { useEffect, useState } from "react"
import { Navigate, useNavigate } from 'react-router-dom';
import './BookAppointmentComponent.css'
import { ApiInteraction } from "../../UserOperation/ApiInteraction";

const useStyles = makeStyles({
    bookAppointmentFormBtn : {
        backgroundColor: 'red',
        color: 'white',
        '&:hover':{
            backgroundColor:'purple'
        }
    },
    appointmentTextField : {
        backgroundColor: 'white',
        color:'black'
    }
})

export const TextFieldForAppointment = (props) => {
    const classes = useStyles();

    return(
        <div style={{margin:'20px'}}>
                <TextField className={classes.appointmentTextField} required label={props.labelVal} variant="outlined" value={props.valueVar} onChange={(e) => props.setValueVar(e.target.value)}/> 
        </div>
    )
}

export const BookAppointment = () => {
    
    const classes = useStyles()

    const navigate = useNavigate();

    const [travelRange, setTravelRange] = useState("Domestic");
    var newDate = new Date();
    var year = new Date().getFullYear();
    var month = new Date().getMonth()+1;
    var date = new Date().getDate();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var monthString = year.toString() + "-"+ (month.toString().length < 2 ? "0"+ month.toString() : month.toString())
    var dateTimeString = year.toString()+"-"+(month.toString().length < 2 ? "0"+ month.toString() : month.toString())+"-"+(date.toString().length < 2 ? "0"+ date.toString() : date.toString())+"T"+(hour.toString().length < 2 ? "0"+ hour.toString() : hour.toString())+":"+(minute.toString().length < 2 ? "0"+ minute.toString() : minute.toString())
    const [travelMonth, setTravelMonth] = useState(monthString);
    //newDate.getDate()+"-"+newDate.getMonth()+"-"+newDate.getYear()+" "+newDate.getHours()+":"+newDate.getMinutes()
    const [appointmentDateTime, setAppointmentDateTime] = useState(dateTimeString)

    const [firstName, setFirstName] = useState(sessionStorage.getItem('firstName'));
    const [lastName, setLastName] = useState(sessionStorage.getItem('lastName'));

    const [appointmentObj, setAppointmentObj] = useState({
        firstName: '',
        lastName: '',
        travelMonth: '',
        travelBudget: '',
        travelDestination: '',
        travelCompanion: '',
        appointmentDateTime: '',
        email: sessionStorage.getItem('email')
    })

    const BookAppointmentFunction = () => {
        setAppointmentObj({
            firstName: firstName,
            lastName: lastName,
            travelMonth: travelMonth,
            travelBudget: sessionStorage.getItem('TravelBudget'),
            travelDestination: sessionStorage.getItem('TravelDestination'),
            travelCompanion: sessionStorage.getItem('TravelCompanion'),
            appointmentDateTime: appointmentDateTime,
            email: sessionStorage.getItem('email')
        })
    }


    useEffect(() => {
        if(appointmentObj.lastName !==''){
            sessionStorage.setItem('clickedLink','Home');
            ApiInteraction.addAppointment(appointmentObj).then((response) => {
                console.log(response);
            })
            navigate('/');
        }
    },[appointmentObj])

    return (
        <div className="appointmentContainer">
            <div className="appointmentImageContainer">
                <img src={AppointmentImg}/>
            </div>
            <div className="appointmentFormContainer">
                <form className='bookAppointmentComponent'>
                    <h1>Book An Appointment With Us</h1>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <TextFieldForAppointment labelVal={"First Name"} valueVar={firstName} setValueVar={setFirstName}/>
                        <TextFieldForAppointment labelVal={"Last Name"} valueVar={lastName} setValueVar={setLastName}/>
                    </div>
                    <TextFieldForAppointment labelVal={"Travel Destination"} valueVar={sessionStorage.getItem('TravelDestination')}/>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <TextFieldForAppointment labelVal={"Travel Budget"} valueVar={sessionStorage.getItem('TravelBudget')}/>
                        <TextFieldForAppointment labelVal={"Travel Companion"} valueVar={sessionStorage.getItem('TravelCompanion')}/>
                    </div>
                    {/*<Typography varient="h6">You want to travel ?</Typography>
                    <RadioGroup value={travelRange} onChange={(e) => setTravelRange(e.target.value)}>
                        <FormControlLabel value="Domestic" label={"Domestic"} control={<Radio />} />
                        <FormControlLabel value="International" label={"International"} control={<Radio />} />
                    </RadioGroup>*/}
                    <div class="dateFields" style={{display:'flex'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                        <Typography varient="h6">Month and Year of travel</Typography>
                        <input type="month" id="travelmonth" name="travelmonth" min="2022-03" max="2023-03" value={travelMonth} onChange={(e) => setTravelMonth(e.target.value)} />
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                        <Typography varient="h6">Select Appointment Time Slot</Typography>
                        <input type="datetime-local" id="appointmentTime" name="start" min={dateTimeString} value={appointmentDateTime} onChange={(e) => setAppointmentDateTime(e.target.value)} />
                        </div>
                    </div>
                    <Button variant="contained" className={classes.bookAppointmentFormBtn} onClick={() => BookAppointmentFunction()}>Book Appointment Now</Button>
                </form>
            </div>
        </div>
    )
}