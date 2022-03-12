import { FooterComponent } from "./FooterComponent"
import { OurSpeciality } from "./OurSpeciality"
import { WelcomeComponent } from "./WelcomeComponent"
import { WhyToHireComponent } from "./WhyToHireComponent"

export const HomePageController = (props) => {
    return(
        <div className="HomePageController" style={{filter:props.getFilter,position:props.scroll,pointerEvents:props.pointerEvt}}>
            <WelcomeComponent/>
            <WhyToHireComponent/>
            <OurSpeciality/>
            <FooterComponent/>
        </div>
    )
}