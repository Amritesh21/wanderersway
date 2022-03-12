import './OurJourneyComponent.css'
import JourneyImage from './Journey.jpg';
export const OurJourneyComponent = () =>{
    return(
        <div className="OurJourney">
            <div className='left-component-About'>
                <h1>Our Journey</h1>
                <img src={JourneyImage}/>
            </div>
            <div className='right-component-About'>
                <div className='content'>
                    <h2>Lets explore more colours of life</h2>
                    <span>
                        Traveling and planning a tour is not at all an easy task because one needs to plan a lot of things in travel like where to stay? how to travel? 
                        What to eat? at an unknown place is very difficult at expensive. 
                        So by experiencing all these things while traveling our founder Amritesh decide to start a firm that will plan al traveling way like how to travel? What to eat? 
                        What all Places to Explore? Where to stay? in a budget friendly way so that even a middle class family could travel and explore different colours of life
                    </span>
                </div>
            </div>
        </div>
    )
}