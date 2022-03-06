import './NavigationBarHeader.css';
import {Logo} from './HeaderLogoSection/Logo.js'
import {NavigationLinks} from './NavigationLinksSection/NavigationLinks.js';
import { UserDetails } from './UserDetailsSection/UserDetails';

export const NavigationBar = () => {
    return(
        <div className="header">
            <Logo/>
            <NavigationLinks/>
            <UserDetails/>
        </div>
    )
}