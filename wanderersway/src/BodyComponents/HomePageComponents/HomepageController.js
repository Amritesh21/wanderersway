import { OurSpeciality } from "./OurSpeciality"
import { WelcomeComponent } from "./WelcomeComponent"
import { WhyToHireComponent } from "./WhyToHireComponent"
import './HomePageController.css';

export const HomePageController = (props) => {
    return(
        <div className="HomePageController" style={{filter:props.loginPopUpEffects.filter, pointerEvents:props.loginPopUpEffects.pointerEvt, position:props.loginPopUpEffects.scroll}}>
            <WelcomeComponent/>
            <WhyToHireComponent/>
            <OurSpeciality/>
        </div>
    )
}