import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import Logo from '../../NavigationBar/wanderer_logo5.PNG'; 
import { TextFieldForAppointment } from "../OurServices/BookAppointmentComponent"
import './MyProfile.css';

export const MyProfile = () => {
    return(
        <div className="MyProfileContainer">
            <div className='left-side-myprofile'>
                <img src={Logo}/>
            </div>
            <div className="FormContainer">
            <TextFieldForAppointment labelVal={"Email"}/>
            <div style={{display:'flex'}}>
            <TextFieldForAppointment labelVal={"First Name"}/>
            <TextFieldForAppointment labelVal={"Last Name"}/>
            </div>
            <div style={{display:'flex'}}>
            <TextFieldForAppointment labelVal={"Resenditial Town"}/>
            <TextFieldForAppointment labelVal={"Resenditial State"}/>
            </div>
            <TextFieldForAppointment labelVal={"Area PIN"}/>
            <TextFieldForAppointment labelVal={"Phone No."}/>
            <div style={{display:'flex'}}>
            <Button variant="contained" style={{margin:'10px', backgroundColor:'purple', color:'white'}}>Confirm/Update</Button>
            <Link to="/dashboard" style={{textDecoration:'none'}}><Button variant='contained' style={{margin:'10px', backgroundColor:'red',color:'white'}}>Back</Button></Link>
            </div>
            </div>
        </div>
    )
}