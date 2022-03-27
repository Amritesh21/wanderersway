import { Box, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import './ServiceViewer.css'

const serviceList = [
     {
        name: 'Explore Manali',
        price: 25000,
        continent: 'Asia',
        Companion : 'Family/Friends',
        image: 'https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg'
    },
    {
        name: 'Explore Dubai',
        price: 100000,
        continent: 'Asia',
        Companion : 'Single',
        image: 'https://imageio.forbes.com/specials-images/imageserve/5f709d82fa4f131fa2114a74/0x0.jpg?format=jpg&width=1200&fit=bounds'
    },
    {
        name: 'Explore Maldives',
        price: 100000,
        continent: 'Asia',
        Companion : 'Couple',
        image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'Explore Tanzania',
        price: 80000,
        continent: 'Africa',
        Companion : 'Couple',
        image: 'https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'Explore Nanital',
        price: 10000,
        continent: 'Asia',
        Companion : 'Family/Friends',
        image: 'https://media.istockphoto.com/photos/young-tourist-woman-traveller-with-backpack-sitting-in-nature-writing-picture-id1173069390?k=20&m=1173069390&s=612x612&w=0&h=BuTOM5nustINz1cs8f05ycJ616gF6D_kBEE_f-7KQG8='
    },
    {
        name: 'Explore Andaman',
        price: 25000,
        continent: 'Asia',
        Companion : 'Couple',
        image: 'https://image.shutterstock.com/image-photo/stylish-hipster-woman-traveler-backpack-600w-459280000.jpg'
    },
    {
        name: 'Explore Russia',
        price: 100000,
        continent: 'Europe',
        Companion : 'Single',
        image: 'https://thumbs.dreamstime.com/b/happy-family-road-trip-car-having-fun-summer-vacation-186437886.jpg'
    },
    {
        name: 'Explore Brazil',
        price: 50000,
        continent: 'South America',
        Companion : 'Family/Friends',
        image: 'https://thumbs.dreamstime.com/b/young-hipster-friends-road-trip-summers-day-60592958.jpg'
    },
]

export const ServiceContainer = (props) => {
    const bookService = () => {
        sessionStorage.setItem('TravelBudget',props.service.price);
        sessionStorage.setItem('TravelCompanion', props.service.Companion);
        sessionStorage.setItem('TravelDestination',props.service.name);
    }


    const porpsServicePrice = () => {
        if((props.serviceFilter.travelCompanion !== '' && props.serviceFilter.travelCompanion.toLowerCase() !== props.service.Companion.toLowerCase())){
            console.log(props.service.price);
            console.log(props.serviceFilter.travelBudget[1])
            console.log(props.serviceFilter.travelBudget[0])
            return null
        }else{
            if((props.service.price >= props.serviceFilter.travelBudget[0] && props.service.price <= props.serviceFilter.travelBudget[1])){
            return(
                <div className='ServiceContatinerBinder' style={{
                    backgroundImage: `url(${props.service.image})`,
                    backgroundPosition: 'center',
                    border: '2px solid purple',
                    backgroundSize: 'cover'
                }}>   
                    <h3 style={{
                       backgroundColor: 'white',
                       marginTop: '0px',
                       borderRadius: '5px',
                       outline: 'none'
                    }}>{props.service.name}</h3>
                    <div className='ServiceDetailsContainer' style={{
                        display:'flex', 
                        flexDirection:'column',
                        backgroundColor:'white', 
                        position:'relative', 
                        top: '52%', 
                        textAlign:'center',
                        borderRadius: '10px',
                        }}>
                        <span>Minimum Budget: {props.service.price} INR</span>
                        <span>Continent: {props.service.continent}</span>
                        <span>Companion: {props.service.Companion}</span>
                        <div>
                        <Link to="/bookAppointment"><button id="bookAppointment" onClick={() => bookService()}>Book Appointment</button></Link>
                        </div>
                    </div>
                </div>
            )
                    }
        }
    }
    return(
        <>
        { porpsServicePrice()}
        
        </>
    )
}

/*
    TODO: Caste this in the form of table
*/


export const ServicesViewer = (props) => {
    sessionStorage.setItem('TravelBudget',null);
    sessionStorage.setItem('TravelCompanion',null);
    sessionStorage.setItem('TravelDestination',null);
    const ServiceContainerHandler = serviceList.map((service) => <ServiceContainer service={service} {...props}/>)
    return(
        <div className="ServiceViewer">
            <div className="ServiceListGrid"> 
                {ServiceContainerHandler}
            </div>
        </div>
    )
}