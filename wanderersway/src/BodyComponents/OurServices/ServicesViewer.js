import { Box, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import './ServiceViewer.css'

const serviceList = [
     {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion',
        image: 'https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion',
        image: 'https://imageio.forbes.com/specials-images/imageserve/5f709d82fa4f131fa2114a74/0x0.jpg?format=jpg&width=1200&fit=bounds'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion',
        image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion',
        image: 'https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion',
        image: 'https://media.istockphoto.com/photos/young-tourist-woman-traveller-with-backpack-sitting-in-nature-writing-picture-id1173069390?k=20&m=1173069390&s=612x612&w=0&h=BuTOM5nustINz1cs8f05ycJ616gF6D_kBEE_f-7KQG8='
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion',
        image: 'https://image.shutterstock.com/image-photo/stylish-hipster-woman-traveler-backpack-600w-459280000.jpg'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion',
        image: 'https://thumbs.dreamstime.com/b/happy-family-road-trip-car-having-fun-summer-vacation-186437886.jpg'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion',
        image: 'https://thumbs.dreamstime.com/b/young-hipster-friends-road-trip-summers-day-60592958.jpg'
    },
]

export const ServiceContainer = (props) => {
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
                <span>price: {props.service.price}</span>
                <span>continent: {props.service.continent}</span>
                <span>bestFor: {props.service.companion}</span>
                <div>
                <Link to="/bookAppointment"><button id="bookAppointment">Book Appointment</button></Link>
                </div>
            </div>
        </div>
    )
}

/*
    TODO: Caste this in the form of table
*/


export const ServicesViewer = () => {
    const ServiceContainerHandler = serviceList.map((service) => <ServiceContainer service={service}/>)
    return(
        <div className="ServiceViewer">
            <div className="ServiceListGrid"> 
                {ServiceContainerHandler}
            </div>
        </div>
    )
}