import { Button} from "@material-ui/core"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { ApiInteraction } from "../../UserOperation/ApiInteraction";

import './MyAppointments.css';

export const ApoointmentTableHeader = () => {
    return(
        <>
            <tr>
                <td>Appointment For</td>
                <td>Appointment Date</td>
                <td>Travel Date</td>
                <td>Travel Destination</td>
                <td>Travel Budget</td>
                <td></td>
            </tr>
        </>
    )
}

export const AppointmentTableRow = () => {
    return  (
        <>
            <tr>
                <td></td>
            </tr>
        </>
    )
}

export const MyAppointment = () => {

    const [appointments, setAppointments] = useState([
        {
            appointmentDateTime: "",
            email: "",
            firstName: "",
            lastName: "",
            travelBudget: "",
            travelCompanion: "",
            travelDestination: "",
            travelMonth: "",
            status: ""
        }
    ])

    useEffect(() => {
        ApiInteraction.getAppointment(sessionStorage.getItem('email')).then((response) => {
            setAppointments(response.data);
        })
    },[])

    const cancelAppointment = () => {
        ApiInteraction.cancelAppointment(sessionStorage.getItem('email')).then((response) => {
            setAppointments(response.data);
        }) 
    }

    const  AppointmentTableRows = appointments.map((appointment) => <tr>
        <td>{appointment.firstName} {appointment.lastName}</td>
        <td>{appointment.appointmentDateTime}</td>
        <td>{appointment.travelMonth}</td>
        <td>{appointment.travelDestination}</td>
        <td>{appointment.travelBudget}</td>
        <td><Button variant="contained" onClick={()=> cancelAppointment()} style={{backgroundColor:'blue',color:'white'}}>{appointment.status === 'booked' ? 'Cancel Appointment' : 'Canceled'}</Button></td>
    </tr>)

    return(
        <div className="MyAppointmentContainer">
            <div className="Upcomming-Appointments">
                <h1>My Upcomming Appointments</h1>
                <table>
                    {ApoointmentTableHeader()}
                    {AppointmentTableRows}
                </table>
            </div>
            <div className="Recent-Appointments">
                <h1>Recent Appointments</h1>
                <table>
                    {ApoointmentTableHeader()}
                    {AppointmentTableRows}
                </table>
            </div>
            <Link to="/dashboard" style={{textDecoration:'none'}}><Button variant='contained' style={{backgroundColor:'red', color:'white', margin:'20px'}}>Back</Button></Link>
        </div>
    )
}