import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationLinks.css';
export const NavigationItemsCreation = () => {

    if(sessionStorage.getItem('clickedLink') === null){ sessionStorage.setItem('clickedLink','Home') }

    const [clickedLink, setClickedLink] = useState(sessionStorage.getItem('clickedLink'));

    useEffect(() => {
        sessionStorage.setItem('clickedLink',clickedLink);
    },[clickedLink])

    useEffect(() => {
        console.log('link')
    },[sessionStorage])


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
            section: "Our Services",
            link: "/services",
            class: "services"
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
        <li key={NavItems.id} className={NavItems.section === clickedLink ? "activeLink " + liClassName : liClassName} >
                <NavLink to={NavItems.link} className='navlink' onClick={() => setClickedLink(NavItems.section)}>{NavItems.section}</NavLink>
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