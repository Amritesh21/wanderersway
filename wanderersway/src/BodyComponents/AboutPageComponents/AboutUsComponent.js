import './AboutUsComponent.css';
import AboutUsImg from './AboutUsImage.jpg';
export const AboutUsComponent = () => {
    return(
        <div className="AboutUs">
            <div className='AboutContent'>
                <span>
                    <h1>About Us</h1>
                <p>We are one of the leading trip advisor and trip planner. We give you advise based on  your chosen  travel time, duration and  destination.
                 We give advise on how to travel around the world? When to travel? Where to travel ?  How to travel? and many more. 
                 We have links with several community of travelers around the world who can assist you well on traveling.
                 We keep on updating our travel planning based on customer reviews and suggestion.
                 So if you want to travel just make us know your date of travel and  destination and rest we will plan for you.</p>
                 <p>We are one of the leading trip advisor and trip planner. We give you advise based on  your chosen  travel time, duration and  destination. 
                 We give advise on how to travel? When to travel? Where to travel ?  How to travel? and many more. 
                 We have links with several community of travelers who can assist you well on travelling.
                  We keep on updating our travel planning based on customer reviews and suggestion. 
                 So if you want to travel just make us know your date of travel and  destination and rest we will plan for you.</p> 
                </span>
            </div>
            <img src={AboutUsImg}/>
        </div>
    )
}