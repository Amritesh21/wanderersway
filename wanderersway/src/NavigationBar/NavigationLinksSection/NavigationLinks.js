import {NavLink} from 'react-router-dom';
import './NavigationLinks.css';
export const NavigationItemsCreation = () => {
    const liClassName = "navItem"; 
    var NavigationLinks = [
        {
            id: "id1",
            section: "Home",
            link: "/",
            class: 'home'
        },
        {
            id: "id2",
            section: "Our Fees",
            link: "/fees",
            class: "fees"
        },
        {
            id: "id3",
            section: "About Us",
            link: "/AboutUs",
            class: "about"
        },
        {
            id: "id4",
            section: "Contact Us",
            link: "/contact",
            class: "contact"

        }
    ];

    var NavItems =  NavigationLinks.map((NavItems) => 
        <li key={NavItems.id} className={NavItems.class + " " + liClassName}>
                <NavLink to={NavItems.link} className='navlink'>{NavItems.section}</NavLink>
        </li>
    )

    return(
        <>
            {NavItems}
        </>
    )
}

export const NavigationLinks = () => {
    return(
        <div className="NavigationSection">
            <ul>
                <NavigationItemsCreation/>
            </ul>
        </div>
    )
}