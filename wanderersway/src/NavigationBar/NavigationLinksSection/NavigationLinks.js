import {Link} from 'react-router-dom';
import './NavigationLinks.css';
export const NavigationItemsCreation = () => {
    const liClassName = "navItem"; 
    var NavigationLinks = [
        {
            id: "id1",
            section: "Home",
            link: "/"
        },
        {
            id: "id2",
            section: "Our Fees",
            link: "/fees"
        },
        {
            id: "id3",
            section: "About Us",
            link: "/about"
        },
        {
            id: "id4",
            section: "Our Journey",
            link: "/journey"
        },
        {
            id: "id5",
            section: "Contact Us",
            link: "/contact"
        }
    ];

    var NavItems =  NavigationLinks.map((NavItems) => 
        <li key={NavItems.id} className={liClassName}>
                {NavItems.section}
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