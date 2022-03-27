import { ServiceSearchBar } from "./ServiceSearchBar"
import './Services.css';
import { SearchFilterComponent } from "./SearchFilterComponent";
import { ServicesViewer } from "./ServicesViewer";
import { BookAppointment } from "./BookAppointmentComponent";
import { useEffect, useState } from "react";

export const OurServices = () => {

    const [serviceFilter, setServiceFilter] = useState({
        travelCompanion : '',
        travelBudget : [0,100000]
    })

    useEffect(() => {
        console.log(serviceFilter);
    },[serviceFilter])

    return(
        <div className="OurServicesBundler">
           <ServiceSearchBar/>
           <div className="ServiceBody">
               <SearchFilterComponent serviceFilter={serviceFilter} setServiceFilter={setServiceFilter}/>
               <ServicesViewer serviceFilter={serviceFilter}/>
           </div>
        </div>
    )
}