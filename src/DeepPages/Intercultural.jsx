import background from './../assets/backgrounds/backgroundReverse.svg';
import backgroundPreparatory from './../assets/backgrounds/BackgroundPreparatory.svg';
import employee from './../assets/backgrounds/employeeSit.svg';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import emailIcon from './../assets/icons/emailICon.svg';
import line from './../assets/backgrounds/line.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import wordIcon from './../assets/icons/wordIcon.svg';
import fileIcon from './../assets/icons/fileIcon.svg';

import './../styles/Intercultural.css';

const Intercultural = ( ) => {
    return(
        <>
        <section className="Intercultural-container">
            <div className="Intercultural-title-container">
                <h1 className="Intercultural-title">EDUCACIÓN BILINGÜE INTERCULTURAL</h1>
            </div>
            <div className="Intercultural-front-container">
                <figure className="Intercultural-front-image-container">
                    <img src={employee} alt="image" className="Intercultural-front-img"/>
                </figure>
                <h1 className="Intercultural-front-title">Especialistas</h1>
                <div className='Intercultural-background-container'>
                    <img className='Intercultural-background' src={background} alt="background" />
                </div>
            </div>
            <div className="Intercultural-staff__all">
                <article className="Intercultural-staff__article">
                    <div className="Intercultural-staff__container">
                        <figure className="Intercultural-staff__img-container">
                            <img className="Intercultural-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Intercultural-staff__data-container'>
                                <h3 className="Intercultural-staff__info-title">Prof. Guillermo Roman</h3>
                            </div>
                        </figure>
                        <div className="Intercultural-staff__info-container">
                            <div className='Intercultural-staff__info'>
                                <div className="Intercultural-staff__data-item">
                                    <figure className="Intercultural-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Intercultural-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Intercultural-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Intercultural-staff__data-item">
                                    <figure className="Intercultural-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Intercultural-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Intercultural-staff__info-title">Prof. Guillermo Roman</h3>
                                </div>
                            </div>
                            <figure className='Intercultural-staff-line-container'>
                                <img src={line} alt="" className='Intercultural-staff-line'/>
                            </figure>
                            <p className="Intercultural-staff-info-about">A cargo de:</p>
                            <ul className='Intercultural-staff-info-about-list'>
                                <li className='Intercultural-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Intercultural-staff-info-about-list-item'>Talavera</li>
                                <li className='Intercultural-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Intercultural-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Intercultural-staff-info-about-list-item'>Huancaray</li>
                                <li className='Intercultural-staff-info-about-list-item'>Huancarama</li>
                                <li className='Intercultural-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            <div className='Intercultural-documents'>
                <h3 className='Intercultural-documents-title'>Materiales</h3>
                <div className='Intercultural-documents-items-container'>
                    <div className='Intercultural-documents-item'>
                        <p className='Intercultural-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Intercultural-documents-item-icon-container' href="">
                            <img src={wordIcon} alt="icon-link" className='Intercultural-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Intercultural-documents-item'>
                        <p className='Intercultural-documents-item-description'>
                            SRACTCH (Para Windows) Permite la creación de historiestas interactivas que incorporen contenidos
                        </p>
                        <a className='Intercultural-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Intercultural-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Intercultural-documents-item'>
                        <p className='Intercultural-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Intercultural-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Intercultural-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Intercultural-documents-item'>
                        <p className='Intercultural-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Intercultural-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Intercultural-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Intercultural-documents-item'>
                        <p className='Intercultural-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Intercultural-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Intercultural-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Intercultural-documents-item'>
                        <p className='Intercultural-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Intercultural-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Intercultural-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Intercultural;