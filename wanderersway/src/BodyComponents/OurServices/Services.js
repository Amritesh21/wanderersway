import { ServiceSearchBar } from "./ServiceSearchBar"
import './Services.css';
import { SearchFilterComponent } from "./SearchFilterComponent";
import { ServicesViewer } from "./ServicesViewer";
import { BookAppointment } from "./BookAppointmentComponent";

export const OurServices = () => {
    return(
        <div className="OurServicesBundler">
           <ServiceSearchBar/>
           <div className="ServiceBody">
               <SearchFilterComponent/>
               <ServicesViewer/>
           </div>
        </div>
    )
}