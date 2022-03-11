import PlanningIcon from './planning-icon.jpg';
import BudgetIcon from './budget_friendly.png';
import ExpertIcon from './expert_icon.jpg';
import EmergencyIcon from './e-support_icon.jpg';
import './OurSpeciality.css';

export const OurSpeciality = () => {
    return(
        <div className="OurSpeciality">
            <div className="TagLine-OS"><h1>Speciality Of Our Services</h1></div>
            <div className="special-items-os">
                <div>
                    <div className="limit-width">
                    <img src={PlanningIcon}/>
                    <h2>Planning</h2>
                    Instead of searching and planning  through countless websites, guidebooks or post from your friends on social media,
                    you deserve a hassle-free vacation planned by a professional, saving your valuable time
                    </div>
                </div>
                <div>
                    <div className="limit-width">
                    <img src={BudgetIcon}/>
                    <h2>Budget friendly</h2>
                    We through our years of experience in travelling will suggest you the least expensive way of travelling and 
                    staying in any region in world
                    </div>
                </div>
                <div>
                    <div className="limit-width">
                    <img src={ExpertIcon}/>
                    <h2>Emergency support</h2>
                    We have contacts and links at various different locations of world so that in case any you are trap in an
                    emergency we could easily help you through our links and contacts all over the world.
                    </div>
                </div>
                <div>
                    <div className="limit-width">
                    <img src={EmergencyIcon}/>
                    <h2>Expert advice</h2>
                    We have a team and also have contacts with various experienced travelers so that you will be provided with the best 
                    travel advises and a smooth and hassle free travel can be planed for you.
                    </div>
                </div>
            </div>
        </div>
    );
}