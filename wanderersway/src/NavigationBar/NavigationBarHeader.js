import './NavigationBarHeader.css';
import {Logo} from './HeaderLogoSection/Logo.js'
import {NavigationLinks} from './NavigationLinksSection/NavigationLinks.js';
import { UserDetails } from './UserDetailsSection/UserDetails';

export const NavigationBar = (props) => {
    return(
        <div className="header" style={{filter:props.getFilter,pointerEvents:props.pointerEvt}}>
            <Logo/>
            <NavigationLinks/>
            <UserDetails  {...props}/>
        </div>
    )
}