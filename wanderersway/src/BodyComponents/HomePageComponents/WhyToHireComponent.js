import './WhyToHireComponent.css';
import WelcomeImage from './hire_travel_advisor.jpeg';
export const WhyToHireComponent = () => {
    return(
        <div className="main-component whyToHire">
            <div className="sub-component left-Component">
                <div className="header-sub-component"><h1>Why to hire a travel planner?</h1></div>
                <div className="Why-To-Hire-Content"><p>Planning a trip today can be a confusing a time taking task . Trip Advisor suggests you the best, 
                cheapest and safest way you can plan your travel to a destination in any region in world.</p>
                </div>
            </div>
            <div className="sub-component right-Component">
                <img src={WelcomeImage}/>
            </div>
        </div>
    )
}