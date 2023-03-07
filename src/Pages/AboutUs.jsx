import './../styles/AboutUs.css';
import locationIcon from './../assets/icons/locationIcon.svg';
import EmailIcon from './../assets/icons/emailICon.svg';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import facebookIcon from './../assets/icons/facebookIconB.svg';
import youtubeIcon from './../assets/icons/YoutubeIconB.svg';
import webIcon from './../assets/icons/webIcon.png';
import people from './../assets/icons/PeopleWaiting.svg';
import background from './../assets/backgrounds/background1.svg';
const AboutUs = () => {
    return(
        <>
        <section className='About-container'>
            <div className='About-background-container'>
                <img className='About-background' src={background} alt="background" />
            </div>

            <div className='About-element-container'>
                
                <figure className='About-element-img-container'>
                    <img src={people} alt="image" className='About-element-img' />
                </figure>
            </div>
            <div className='About-info-container'>
                <h1 className='About-element-title'>Contactenos</h1>
                <div className='About-info-item'>
                    <figure className='About-info-icon-container'>
                        <svg className='About-info-icon' width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.5497" cy="13.4229" r="5.28376" stroke="black" />
                            <path d="M24.5993 12.5497C24.5993 15.871 23.1329 19.2633 20.8384 22.6578C18.6232 25.9347 15.6691 29.1664 12.6192 32.2828C10.4068 30.4608 7.46158 27.2804 5.0232 23.7193C2.44244 19.9502 0.5 15.8557 0.5 12.5497C0.5 5.89482 5.89482 0.5 12.5497 0.5C19.2045 0.5 24.5993 5.89482 24.5993 12.5497Z" stroke="black"/>
                        </svg>
                    </figure>
                    <p className='About-info-icon-description'>Jr. Alfonso Ugarte N° 346, Andahuaylas, Perú</p>
                </div>
                <div className='About-info-item'>
                    <figure className='About-info-icon-container'>
                        <svg className='About-info-icon' width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.20382 8.43135L6.98215 3.43258C6.86802 3.17581 6.65088 2.97425 6.37897 2.90338C2.77483 1.96411 1.31568 5.0624 1.01447 6.87523C1.00418 6.93715 1.00131 7.00049 1.00413 7.06319C1.68048 22.1193 15.5189 27.4829 20.896 26.4488C24.6959 25.718 24.8564 23.3769 24.8411 21.6967C24.8375 21.3082 24.6087 20.9553 24.2567 20.791L19.1395 18.403C18.8158 18.2519 18.4311 18.2801 18.1577 18.5103C17.648 18.9395 17.3098 19.37 17.0921 19.7589C16.7619 20.3491 16.0711 20.9292 15.4382 20.6908C13.7078 20.039 11.5354 18.6564 9.91176 16.708C7.64499 14.2831 6.26675 11.3804 6.80301 11.1123C8.58479 10.2214 9.1411 9.33049 9.26211 8.83469C9.29529 8.69876 9.26065 8.55921 9.20382 8.43135Z" stroke="black"/>
                            <path d="M14.6785 8.41813C15.7839 8.21088 18.409 8.62535 18.8235 12.3559M14.6785 4.68759C17.1655 4.48034 22.1395 6.13834 22.554 12.3559M14.6785 1.16445C18.8235 -0.078956 26.9063 5.9312 26.0773 12.3559" stroke="black"/>
                        </svg>
                    </figure>
                    <p className='About-info-icon-description'>(083) 421526 / (083) 425222</p>
                </div>
                <div className='About-info-item'>
                    <figure className='About-info-icon-container'>
                        <svg className='About-info-icon' width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H32M1 1V22M1 1L11.418 10.0632M32 1V22M32 1L21.582 10.0632M32 22H1M32 22L21.582 10.0632M1 22L11.418 10.0632M11.418 10.0632L15.8437 13.9132C16.22 14.2406 16.78 14.2406 17.1563 13.9132L21.582 10.0632" stroke="black"/>
                        </svg>
                    </figure>
                    <p className='About-info-icon-description'>mesadepartes@ugelandahuaylas.gob.pe</p>
                </div>
                <div className='About-info-item'>
                    <figure className='About-info-icon-container'>
                        <img src={webIcon} alt="icon" className='About-info-icon'/>
                    </figure>
                    <p className='About-info-icon-description'>http://www.ugelandahuaylas.gob.pe</p>
                </div>
                <div className='About-info-item'>
                    <figure className='About-info-icon-container'>
                        <img src={facebookIcon} alt="icon" />
                    </figure>
                    <p className='About-info-icon-description'>UGEL Andahuaylas - Apurímac</p>
                </div>
                <div className='About-info-item'>
                    <figure className='About-info-icon-container'>
                        <img src={youtubeIcon} alt="icon" />
                    </figure>
                    <p className='About-info-icon-description'>Ugel Andahuaylas</p>
                </div>

            </div>

        </section>
        </>
    )
}

export default AboutUs;