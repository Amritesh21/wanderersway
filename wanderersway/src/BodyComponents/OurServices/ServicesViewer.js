import { Box } from "@material-ui/core"

const serviceList = [
     {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion'
    },
    {
        name: 'name',
        price: 'price',
        continent: 'continent',
        bestFor : 'companion'
    },
]

export const ServiceContainer = (props) => {
    return(
        <div style={{
            height : '300px',
           backgroundColor: 'skyblue',
            position: 'relative',
            width: '95%',
            margin: '10px 4px'
        }}>   
            <h3>{props.service.name}</h3>
            <div style={{display:'flex', flexDirection:'column'}}>
                <span>price: {props.service.price}</span>
                <span>continent: {props.service.continent}</span>
                <span>bestFor: {props.service.companion}</span>
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