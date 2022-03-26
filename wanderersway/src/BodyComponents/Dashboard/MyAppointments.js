import { Button} from "@material-ui/core"
import { Link } from "react-router-dom"

export const MyAppointment = () => {
    return(
        <div className="MyAppointmentContainer">
            <Link to="/dashboard" style={{textDecoration:'none'}}><Button>Back</Button></Link>
        </div>
    )
}