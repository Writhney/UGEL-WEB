import facebookIcon from './../assets/icons/facebookIcon.svg';
import './../styles/FloatButton.css';

const FloatButton = () => {
    return(
        <>
        <div className='Button-container'>
           <a target="_blank" href="https://www.facebook.com/UgelAndahuaylasA/?locale=es_LA" className="Button-link">
            <figure className="Button-icon-container">
                <img src={facebookIcon} alt="icon" className="Button-icon" />
            </figure> 
            </a> 
        </div>
        
        </>
    )
}
export default FloatButton;