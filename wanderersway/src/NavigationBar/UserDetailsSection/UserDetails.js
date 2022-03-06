import UserIcon from '../userIcon.png';
import './UserDetails.css';
export const UserDetails = () => {
    return(
        <div className="userDetails">
            <img className="userIcon" src={UserIcon}/>
            <div className="userDetailsPopUp">
            </div>
        </div>
    )
}