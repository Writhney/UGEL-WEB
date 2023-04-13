import background from './../assets/backgrounds/backgroundReverse.svg';
import backgroundPreparatory from './../assets/backgrounds/BackgroundPreparatory.svg';
import employee from './../assets/backgrounds/employeeSit.svg';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import emailIcon from './../assets/icons/emailICon.svg';
import line from './../assets/backgrounds/line.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import wordIcon from './../assets/icons/wordIcon.svg';
import fileIcon from './../assets/icons/fileIcon.svg';

import './../styles/TechResourceCenter.css';

const TechResourceCenter = ( ) => {
    return(
        <>
        <section className="Tech-container">
            <div className="Tech-title-container">
                <h1 className="Tech-title">CENTRO DE RECURSOS TECNOLÓGICOS</h1>
            </div>
            <div className="Tech-front-container">
                <figure className="Tech-front-image-container">
                    <img src={employee} alt="image" className="Tech-front-img"/>
                </figure>
                <h1 className="Tech-front-title">Especialistas</h1>
                <div className='Tech-background-container'>
                    <img className='Tech-background' src={background} alt="background" />
                </div>
            </div>
            <div className="Tech-staff__all">
                <article className="Tech-staff__article">
                    <div className="Tech-staff__container">
                        <figure className="Tech-staff__img-container">
                            <img className="Tech-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Tech-staff__data-container'>
                                <h3 className="Tech-staff__info-title">Prof. Guillero Roman</h3>
                            </div>
                        </figure>
                        <div className="Tech-staff__info-container">
                            <div className='Tech-staff__info'>
                                <div className="Tech-staff__data-item">
                                    <figure className="Tech-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Tech-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Tech-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Tech-staff__data-item">
                                    <figure className="Tech-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Tech-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Tech-staff__info-title">guillermo@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='Tech-staff-line-container'>
                                <img src={line} alt="" className='Tech-staff-line'/>
                            </figure>
                            <p className="Tech-staff-info-about">A cargo de:</p>
                            <ul className='Tech-staff-info-about-list'>
                                <li className='Tech-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Tech-staff-info-about-list-item'>Talavera</li>
                                <li className='Tech-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Tech-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Tech-staff-info-about-list-item'>Huancaray</li>
                                <li className='Tech-staff-info-about-list-item'>Huancarama</li>
                                <li className='Tech-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            <div className='Tech-documents'>
                <h3 className='Kidnder-documents-title'>Software Educativo</h3>
                <div className='Tech-documents-items-container'>
                    <div className='Tech-documents-item'>
                        <p className='Tech-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a clasName='Tech-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Tech-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Tech-documents-item'>
                        <p className='Tech-documents-item-description'>
                            SRACTCH (Para Windows) Permite la creación de historiestas interactivas que incorporen contenidos
                        </p>
                        <a clasName='Tech-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Tech-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Tech-documents-item'>
                        <p className='Tech-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a clasName='Tech-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Tech-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Tech-documents-item'>
                        <p className='Tech-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a clasName='Tech-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Tech-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Tech-documents-item'>
                        <p className='Tech-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a clasName='Tech-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Tech-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Tech-documents-item'>
                        <p className='Tech-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a clasName='Tech-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Tech-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default TechResourceCenter;