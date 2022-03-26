import { Button, makeStyles } from "@material-ui/core"
import { Link, Route, Routes } from "react-router-dom"
import { MyAppointment } from "./MyAppointments"
import { MyProfile } from "./MyProfile"
import './DashBoard.css'
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
    DashBoardAppointmentButton : {
        backgroundColor: 'Blue',
        color: 'white',
        position:'relative',
        padding: '100px',
        margin: '50px',
        left: '25%',
        '&:hover':{
            color: 'blue'
        }
    },
    DashboardProfileButton : {
        backgroundColor: 'red',
        color: 'white',
        position:'relative',
        padding: '100px',
        margin: '50px',
        left: '25%',
        '&:hover':{
            color: 'red'
        }
    }
})

export const DashBoard = () => {
    const classes = useStyles();
    return(
        <div className="DashBoardContainer">
            <div style={{width: '100%'}}>
            <Link to='/dashboard/MyAppointments' style={{textDecoration:'none'}}><Button variant="contained" className={classes.DashBoardAppointmentButton}>My Appointments</Button></Link>
            <Link to='/dashboard/MyProfile' style={{textDecoration:'none'}}><Button variant="contained" className={classes.DashboardProfileButton}>My Profile</Button></Link>
            </div>
        </div>
    )
}