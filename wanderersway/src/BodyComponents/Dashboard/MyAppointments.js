import { Button} from "@material-ui/core"
import { Link } from "react-router-dom"

import './MyAppointments.css';

const Appointments = [
    {
        Appointment_For : "Narendra Modi",
        Appointment_Date : '27-03-2022',
        Travel_Date : '08-05-2022',
        Travel_Destination : 'China',
        Travel_Budget : '20000-200000'
    }
]

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

    const  AppointmentTableRows = Appointments.map((appointment) => <tr>
        <td>{appointment.Appointment_For}</td>
        <td>{appointment.Appointment_Date}</td>
        <td>{appointment.Travel_Date}</td>
        <td>{appointment.Travel_Destination}</td>
        <td>{appointment.Travel_Budget}</td>
        <td><Button variant="contained" style={{backgroundColor:'blue',color:'white'}}>Cancel Appointment</Button></td>
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