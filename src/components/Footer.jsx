import locationIcon from './../assets/icons/locationIcon.svg';
import emailIcon from './../assets/icons/emailICon.svg';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import facebookIcon from './../assets/icons/facebookIcon.svg';
import youtubeIcon from './../assets/icons/YoutubeIcon.svg';
import rowIcon from './../assets/icons/rowIcon.svg';


import './../styles/Footer.css';



const Footer = () => {
    return(
        <>
        <footer className="Footer">
            <div className="Footer-container">
                <div className="Footer-direction-container">
                    <figure className="Footer-icon-container">
                        <img src={locationIcon} alt="icon" className="Footer-icon" />
                    </figure>  
                    <p className="Footer-icon-text">Jr. Alfonso Ugarte N° 346, Andahuaylas, Perú</p>
                </div>
                <div className="Footer-direction-container">
                    <figure className="Footer-icon-container">
                        <img src={emailIcon} alt="icon" className="Footer-icon" />
                    </figure>  
                    <p className="Footer-icon-text">Mesadepartes@ugelandahuaylas.edu.pe</p>
                </div>
                <div className="Footer-direction-container">
                    <figure className="Footer-icon-container">
                        <img src={phoneIcon} alt="icon" className="Footer-icon" />
                    </figure>  
                    <p className="Footer-icon-text">999 999 999</p>
                </div>
                <div className="Footer-socialNetworks-container">
                    <a target="_blank" href="https://www.facebook.com/UgelAndahuaylasA/?locale=es_LA" className="Footer-socialNetworks-link">
                       <figure className="Footer-socialNetworks-icon-container">
                            <img src={facebookIcon} alt="icon" className="Footer-socialNetworks-icon" />
                        </figure> 
                    </a>
                    <a target="_blank" href="https://www.youtube.com/@ugelandahuaylas8739" className="Footer-socialNetworks-link">
                       <figure className="Footer-socialNetworks-icon-container">
                            <img src={youtubeIcon} alt="icon" className="Footer-socialNetworks-icon" />
                        </figure> 
                    </a>
                </div>
                <p className="Footer-copyright">
                Copyright © 2023.Todos los Derechos Reservados. Unidad de Gestión Educativa Local - Andahuaylas - Apurímac
                </p>
                
                   <figure className="Footer-row-container"><a href="#">
                        <img src={rowIcon} alt="icon" className="Footer-row" /></a>
                    </figure> 
                
                
            </div>

        </footer>
        </>
    )
}
export default Footer;