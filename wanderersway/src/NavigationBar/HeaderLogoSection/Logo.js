import LogoImage from '../wanderer_logo5.PNG'
import './Logo.css';
export const Logo = () => {
    return(
        <div className="LogoContainer">
            <img className="LogoImage" src={LogoImage}/>
        </div>
    )
}