import { FooterComponent } from "./FooterComponent"
import { OurSpeciality } from "./OurSpeciality"
import { WelcomeComponent } from "./WelcomeComponent"
import { WhyToHireComponent } from "./WhyToHireComponent"

export const HomePageController = () => {
    return(
        <div className="HomePageController">
            <WelcomeComponent/>
            <WhyToHireComponent/>
            <OurSpeciality/>
            <FooterComponent/>
        </div>
    )
}