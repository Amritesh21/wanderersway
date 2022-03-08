import './WelcomeComponent.css';
import WelcomeImage from './hiker-ocean-extreme.jpg';
export const WelcomeComponent = () => {
    return(
        <div className="main-component WelcomeComponent">
            <div className="sub-component leftComponent">
                <img src={WelcomeImage}/>
            </div>
            <div className="sub-component rightComponent">
                <div className="explore-section">
                    <span>Hey! wanderer feeling bored. Lets explore new colours</span>
                    <div><button class="bookAppointment">Book An appointment</button></div>
                </div>
            </div>
        </div>
    )
}