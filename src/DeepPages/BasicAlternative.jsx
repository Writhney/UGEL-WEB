import background from './../assets/backgrounds/backgroundReverse.svg';
import backgroundPreparatory from './../assets/backgrounds/BackgroundPreparatory.svg';
import employee from './../assets/backgrounds/employeeSit.svg';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import emailIcon from './../assets/icons/emailICon.svg';
import line from './../assets/backgrounds/line.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import wordIcon from './../assets/icons/wordIcon.svg';
import fileIcon from './../assets/icons/fileIcon.svg';

import './../styles/BasicAlternative.css';

const BasicAlternative = ( ) => {
    return(
        <>
        <section className="Basic-container">
            <div className="Basic-title-container">
                <h1 className="Basic-title">EDUCACIÓN BÁSICA ALTERNATIVA</h1>
            </div>
            <div className="Basic-front-container">
                <figure className="Basic-front-image-container">
                    <img src={employee} alt="image" className="Basic-front-img"/>
                </figure>
                <h1 className="Basic-front-title">Especialistas</h1>
                <div className='Basic-background-container'>
                    <img className='Basic-background' src={background} alt="background" />
                </div>
            </div>
            <div className="Basic-staff__all">
                <article className="Basic-staff__article">
                    <div className="Basic-staff__container">
                        <figure className="Basic-staff__img-container">
                            <img className="Basic-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Basic-staff__data-container'>
                                <h3 className="Basic-staff__info-title">Prof. Guillermo Roman</h3>
                            </div>
                        </figure>
                        <div className="Basic-staff__info-container">
                            <div className='Basic-staff__info'>
                                <div className="Basic-staff__data-item">
                                    <figure className="Basic-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Basic-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Basic-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Basic-staff__data-item">
                                    <figure className="Basic-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Basic-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Basic-staff__info-title">Prof. Guillermo Roman</h3>
                                </div>
                            </div>
                            <figure className='Basic-staff-line-container'>
                                <img src={line} alt="" className='Basic-staff-line'/>
                            </figure>
                            <p className="Basic-staff-info-about">A cargo de:</p>
                            <ul className='Basic-staff-info-about-list'>
                                <li className='Basic-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Basic-staff-info-about-list-item'>Talavera</li>
                                <li className='Basic-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Basic-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Basic-staff-info-about-list-item'>Huancaray</li>
                                <li className='Basic-staff-info-about-list-item'>Huancarama</li>
                                <li className='Basic-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Basic-staff__article">
                    <div className="Basic-staff__container">
                        <figure className="Basic-staff__img-container">
                            <img className="Basic-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Basic-staff__data-container'>
                                <h3 className="Basic-staff__info-title">Prof. Guillermo Roman</h3>
                            </div>
                        </figure>
                        <div className="Basic-staff__info-container">
                            <div className='Basic-staff__info'>
                                <div className="Basic-staff__data-item">
                                    <figure className="Basic-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Basic-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Basic-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Basic-staff__data-item">
                                    <figure className="Basic-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Basic-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Basic-staff__info-title">Prof. Guillermo Roman</h3>
                                </div>
                            </div>
                            <figure className='Basic-staff-line-container'>
                                <img src={line} alt="" className='Basic-staff-line'/>
                            </figure>
                            <p className="Basic-staff-info-about">A cargo de:</p>
                            <ul className='Basic-staff-info-about-list'>
                                <li className='Basic-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Basic-staff-info-about-list-item'>Talavera</li>
                                <li className='Basic-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Basic-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Basic-staff-info-about-list-item'>Huancaray</li>
                                <li className='Basic-staff-info-about-list-item'>Huancarama</li>
                                <li className='Basic-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Basic-staff__article">
                    <div className="Basic-staff__container">
                        <figure className="Basic-staff__img-container">
                            <img className="Basic-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Basic-staff__data-container'>
                                <h3 className="Basic-staff__info-title">Prof. Guillermo Roman</h3>
                            </div>
                        </figure>
                        <div className="Basic-staff__info-container">
                            <div className='Basic-staff__info'>
                                <div className="Basic-staff__data-item">
                                    <figure className="Basic-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Basic-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Basic-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Basic-staff__data-item">
                                    <figure className="Basic-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Basic-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Basic-staff__info-title">Prof. Guillermo Roman</h3>
                                </div>
                            </div>
                            <figure className='Basic-staff-line-container'>
                                <img src={line} alt="" className='Basic-staff-line'/>
                            </figure>
                            <p className="Basic-staff-info-about">A cargo de:</p>
                            <ul className='Basic-staff-info-about-list'>
                                <li className='Basic-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Basic-staff-info-about-list-item'>Talavera</li>
                                <li className='Basic-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Basic-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Basic-staff-info-about-list-item'>Huancaray</li>
                                <li className='Basic-staff-info-about-list-item'>Huancarama</li>
                                <li className='Basic-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>

            </div>
            <div className='Basic-documents'>
                <h3 className='Basic-documents-title'>Materiales</h3>
                <div className='Basic-documents-items-container'>
                    <div className='Basic-documents-item'>
                        <p className='Basic-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Basic-documents-item-icon-container' href="">
                            <img src={wordIcon} alt="icon-link" className='Basic-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Basic-documents-item'>
                        <p className='Basic-documents-item-description'>
                            SRACTCH (Para Windows) Permite la creación de historiestas interactivas que incorporen contenidos
                        </p>
                        <a className='Basic-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Basic-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Basic-documents-item'>
                        <p className='Basic-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Basic-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Basic-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Basic-documents-item'>
                        <p className='Basic-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Basic-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Basic-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Basic-documents-item'>
                        <p className='Basic-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Basic-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Basic-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Basic-documents-item'>
                        <p className='Basic-documents-item-description'>
                            GENMAGIC (Para Windows) Podras encontrar mas de 200 actividades interactivas
                        </p>
                        <a className='Basic-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Basic-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default BasicAlternative;