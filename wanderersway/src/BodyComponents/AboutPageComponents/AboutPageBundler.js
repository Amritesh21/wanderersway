import { AboutUsComponent } from "./AboutUsComponent";
import { OurJourneyComponent } from "./OurJourneyComponent";

export const AboutPageBundler = () => {
    return(
        <div className="AboutPageBundler">
            <AboutUsComponent/>
            <OurJourneyComponent/>
        </div>
    );
}