import './WelcomeComponent.css';
import WelcomeImage from './hiker-ocean-extreme.jpg';
import { Link } from 'react-router-dom';
export const WelcomeComponent = () => {
    return(
        <div className="main-component WelcomeComponent">
            <div className="sub-component leftComponent">
                <img src={WelcomeImage}/>
            </div>
            <div className="sub-component rightComponent">
                <div className="explore-section">
                    <span>Hey! wanderer feeling bored. Lets explore new colours</span>
                    <Link to="/services"><div><button className="bookAppointment" onClick={() => sessionStorage.setItem('clickedLink','Our Services')}>Explore Our Services</button></div></Link>
                </div>
            </div>
        </div>
    )
}