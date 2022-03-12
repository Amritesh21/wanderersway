import { AboutUsComponent } from "./AboutUsComponent";
import { OurJourneyComponent } from "./OurJourneyComponent";
import './AboutPageBundler.css';

export const AboutPageBundler = () => {
    return(
        <div className="AboutPageBundler">
            <AboutUsComponent/>
            <OurJourneyComponent/>
        </div>
    );
}