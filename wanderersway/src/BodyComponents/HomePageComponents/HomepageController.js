import { FooterComponent } from "./FooterComponent"
import { WelcomeComponent } from "./WelcomeComponent"
import { WhyToHireComponent } from "./WhyToHireComponent"

export const HomePageController = () => {
    return(
        <div className="HomePageController">
            <WelcomeComponent/>
            <WhyToHireComponent/>
            <FooterComponent/>
        </div>
    )
}