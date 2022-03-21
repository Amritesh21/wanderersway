import { AboutUsComponent } from "./AboutUsComponent";
import { OurJourneyComponent } from "./OurJourneyComponent";
import './AboutPageBundler.css';

export const AboutPageBundler = (props) => {
    return(
        <div className="AboutPageBundler" style={{filter:props.loginPopUpEffects.filter, pointerEvents:props.loginPopUpEffects.pointerEvt, position:props.loginPopUpEffects.scroll}}>
            <AboutUsComponent/>
            <OurJourneyComponent/>
        </div>
    );
}