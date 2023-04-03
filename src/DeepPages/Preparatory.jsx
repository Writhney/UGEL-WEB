import background from './../assets/backgrounds/backgroundReverse.svg';
import backgroundPreparatory from './../assets/backgrounds/BackgroundPreparatory.svg';
import employee from './../assets/backgrounds/employeeSit.svg';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import emailIcon from './../assets/icons/emailICon.svg';
import line from './../assets/backgrounds/line.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import wordIcon from './../assets/icons/wordIcon.svg';

import fileIcon from './../assets/icons/fileIcon.svg';
import './../styles/Preparatory.css';
import { waitForElementToBeRemoved } from '@testing-library/react';

const Preparatory = () => {
    return(
        <>
        <section className="Preparatory-container">
            <div className="Preparatory-title-container">
                <h1 className="Preparatory-title">ÁREA DE GESTIÓN PEDAGOGÍCA SECUNDARIA</h1>
            </div>
            <div className="Preparatory-front-container">
                <figure className="Preparatory-front-image-container">
                    <img src={employee} alt="image" className="Preparatory-front-img"/>
                </figure>
                <h1 className="Preparatory-front-title">Especialistas</h1>
                <div className='Preparatory-background-container'>
                    <img className='Preparatory-background' src={background} alt="background" />
                </div>
            </div>
            <div className="Preparatory-staff__all">
                <article className="Preparatory-staff__article">
                    <div className="Preparatory-staff__container">
                        <figure className="Preparatory-staff__img-container">
                            <img className="Preparatory-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Preparatory-staff__data-container'>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">guilleromo@gmail.com</p>
                                </div>
                            </div>
                        </figure>
                        <div className="Preparatory-staff__info-container">
                            <h3 className="Preparatory-staff__info-title">Prof. Guillermo Roman</h3>
                            <figure className='Preparatory-staff-line-container'>
                                <img src={line} alt="" className='Preparatory-staff-line'/>
                            </figure>
                            <p className="Preparatory-staff-info-about">A cargo de:</p>
                            <ul className='Preparatory-staff-info-about-list'>
                                <li className='Preparatory-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Talavera</li>
                                <li className='Preparatory-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Preparatory-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancaray</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancarama</li>
                                <li className='Preparatory-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Preparatory-staff__article">
                    <div className="Preparatory-staff__container">
                        <figure className="Preparatory-staff__img-container">
                            <img className="Preparatory-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Preparatory-staff__data-container'>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">guilleromo@gmail.com</p>
                                </div>
                            </div>
                        </figure>
                        <div className="Preparatory-staff__info-container">
                            <h3 className="Preparatory-staff__info-title">Prof. Guillermo Roman</h3>
                            <figure className='Preparatory-staff-line-container'>
                                <img src={line} alt="" className='Preparatory-staff-line'/>
                            </figure>
                            <p className="Preparatory-staff-info-about">A cargo de:</p>
                            <ul className='Preparatory-staff-info-about-list'>
                                <li className='Preparatory-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Talavera</li>
                                <li className='Preparatory-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Preparatory-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancaray</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancarama</li>
                                <li className='Preparatory-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Preparatory-staff__article">
                    <div className="Preparatory-staff__container">
                        <figure className="Preparatory-staff__img-container">
                            <img className="Preparatory-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Preparatory-staff__data-container'>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">guilleromo@gmail.com</p>
                                </div>
                            </div>
                        </figure>
                        <div className="Preparatory-staff__info-container">
                            <h3 className="Preparatory-staff__info-title">Prof. Guillermo Roman</h3>
                            <figure className='Preparatory-staff-line-container'>
                                <img src={line} alt="" className='Preparatory-staff-line'/>
                            </figure>
                            <p className="Preparatory-staff-info-about">A cargo de:</p>
                            <ul className='Preparatory-staff-info-about-list'>
                                <li className='Preparatory-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Talavera</li>
                                <li className='Preparatory-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Preparatory-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancaray</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancarama</li>
                                <li className='Preparatory-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Preparatory-staff__article">
                    <div className="Preparatory-staff__container">
                        <figure className="Preparatory-staff__img-container">
                            <img className="Preparatory-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Preparatory-staff__data-container'>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">guilleromo@gmail.com</p>
                                </div>
                            </div>
                        </figure>
                        <div className="Preparatory-staff__info-container">
                            <h3 className="Preparatory-staff__info-title">Prof. Guillermo Roman</h3>
                            <figure className='Preparatory-staff-line-container'>
                                <img src={line} alt="" className='Preparatory-staff-line'/>
                            </figure>
                            <p className="Preparatory-staff-info-about">A cargo de:</p>
                            <ul className='Preparatory-staff-info-about-list'>
                                <li className='Preparatory-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Talavera</li>
                                <li className='Preparatory-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Preparatory-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancaray</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancarama</li>
                                <li className='Preparatory-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Preparatory-staff__article">
                    <div className="Preparatory-staff__container">
                        <figure className="Preparatory-staff__img-container">
                            <img className="Preparatory-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Preparatory-staff__data-container'>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">guilleromo@gmail.com</p>
                                </div>
                            </div>
                        </figure>
                        <div className="Preparatory-staff__info-container">
                            <h3 className="Preparatory-staff__info-title">Prof. Guillermo Roman</h3>
                            <figure className='Preparatory-staff-line-container'>
                                <img src={line} alt="" className='Preparatory-staff-line'/>
                            </figure>
                            <p className="Preparatory-staff-info-about">A cargo de:</p>
                            <ul className='Preparatory-staff-info-about-list'>
                                <li className='Preparatory-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Talavera</li>
                                <li className='Preparatory-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Preparatory-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancaray</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancarama</li>
                                <li className='Preparatory-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Preparatory-staff__article">
                    <div className="Preparatory-staff__container">
                        <figure className="Preparatory-staff__img-container">
                            <img className="Preparatory-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Preparatory-staff__data-container'>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Preparatory-staff__data-item">
                                    <figure className="Preparatory-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Preparatory-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Preparatory-staff__data-icon-text">guilleromo@gmail.com</p>
                                </div>
                            </div>
                        </figure>
                        <div className="Preparatory-staff__info-container">
                            <h3 className="Preparatory-staff__info-title">Prof. Guillermo Roman</h3>
                            <figure className='Preparatory-staff-line-container'>
                                <img src={line} alt="" className='Preparatory-staff-line'/>
                            </figure>
                            <p className="Preparatory-staff-info-about">A cargo de:</p>
                            <ul className='Preparatory-staff-info-about-list'>
                                <li className='Preparatory-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Talavera</li>
                                <li className='Preparatory-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Preparatory-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancaray</li>
                                <li className='Preparatory-staff-info-about-list-item'>Huancarama</li>
                                <li className='Preparatory-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            <div className='Preparatory-areas'>
                <h3 className='Preparatory-areas-title'>
                    Programación Anual, unidades y sesiones de aprendizaje por áreas
                </h3>
                <div className='Preparatory-areas-container'> 
                    <div className='Preparatory-area-item' id='Toe'>
                        <p className='Preparatory-area-item-title'>
                            Tutoría y Orientación Educativa
                        </p>
                    </div>
                    <div className='Preparatory-area-item' id='Matematica'>
                        <p className='Preparatory-area-item-title'>
                            Matemática
                        </p>
                    </div>
                    <div className='Preparatory-area-item' id='Historia'>
                        <p className='Preparatory-area-item-title'>
                            Historia, Geografía y Economía
                        </p>
                    </div>
                    <div className='Preparatory-area-item' id='EFisica'>
                        <p className='Preparatory-area-item-title'>
                            Educacion Física
                        </p>
                    </div>
                    <div className='Preparatory-area-item' id='Cta'>
                        <p className='Preparatory-area-item-title'>
                            Ciencia Tecnología y Ambiente
                        </p>
                    </div>
                    <div className='Preparatory-area-item' id='Comunicacion'>
                        <p className='Preparatory-area-item-title'>
                            Comunicación
                        </p>
                    </div>
                    <div className='Preparatory-area-item' id='Ciudadania'>
                        <p className='Preparatory-area-item-title'>
                            Formación Ciudadana y Cívica
                        </p>
                    </div>
                </div>
            </div>
            <div className='Preparatory-areas-info-container' id='containerAreas'>
                

            </div>

        </section>
        </>
    )
}
export default Preparatory;

const Ready = () => {
    const containerAreas = document.getElementById('containerAreas');
    const AreaToe = document.getElementById('Toe');
    const AreaMatematica = document.getElementById('Matematica');
    const AreaHistoria = document.getElementById('Historia');
    const AreaEduFisica = document.getElementById('EFisica');
    const AreaCta = document.getElementById('Cta');
    const AreaComunicacion = document.getElementById('Comunicacion');
    const AreaCiudadania = document.getElementById('Ciudadania');


    
    const ShowAreaToe = () => {
        containerAreas.innerHTML= `
                <div class="Preparatory-front-container">
                    <figure class="Preparatory-front-image-container">
                        <img src=${employee} alt="image" class="Preparatory-front-img"/>
                    </figure>
                    <h1 class="Preparatory-front-title-area">Tutoría y Orientación Educativa</h1>
                    <div class='Preparatory-background-container-area'>
                        <img class='Preparatory-background-area' src=${backgroundPreparatory} alt="background" />
                    </div>
                </div>
                
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Plan de Tutoría Institucional</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Madre de Dios.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Cusco
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Apurimac
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a class='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Plan de Tutoría Aula</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>
            <div class='Preparatory-documents'>
            <h3 class='Preparatory-documents-title'>Sesión de Tutoría</h3>
            <div class='Preparatory-documents-items-container'>
                <div class='Preparatory-documents-item'>
                    <p class='Preparatory-documents-item-description'>
                        DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                        Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                    </p>
                    <a clasName='Preparatory-documents-item-icon-container' href="">
                        <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                    </a>
                </div>
                <div class='Preparatory-documents-item'>
                    <p class='Preparatory-documents-item-description'>
                        DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                    </p>
                    <a clasName='Preparatory-documents-item-icon-container' href="">
                        <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                    </a>
                </div>
                <div class='Preparatory-documents-item'>
                    <p class='Preparatory-documents-item-description'>
                        DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                    </p>
                    <a clasName='Preparatory-documents-item-icon-container' href="">
                        <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                    </a>
                </div>
                <div class='Preparatory-documents-item'>
                    <p class='Preparatory-documents-item-description'>
                        DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                    </p>
                    <a clasName='Preparatory-documents-item-icon-container' href="">
                        <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                    </a>
                </div>
                <div class='Preparatory-documents-item'>
                    <p class='Preparatory-documents-item-description'>
                        DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                    </p>
                    <a clasName='Preparatory-documents-item-icon-container' href="">
                        <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                    </a>
                </div>
                <div class='Preparatory-documents-item'>
                    <p class='Preparatory-documents-item-description'>
                        DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                    </p>
                    <a clasName='Preparatory-documents-item-icon-container' href="">
                        <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                    </a>
                </div>
                <div class='Preparatory-documents-item'>
                    <p class='Preparatory-documents-item-description'>
                        DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                    </p>
                    <a clasName='Preparatory-documents-item-icon-container' href="">
                        <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                    </a>
                </div>
                <div class='Preparatory-documents-item'>
                    <p class='Preparatory-documents-item-description'>
                        DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                    </p>
                    <a clasName='Preparatory-documents-item-icon-container' href="">
                        <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                    </a>
                </div>
            </div>
        </div>
        
        
        `
    }
    AreaToe.addEventListener('click', ShowAreaToe);
    
    const ShowAreaMate = () => {
        containerAreas.innerHTML= `
                <div class="Preparatory-front-container">
                    <figure class="Preparatory-front-image-container">
                        <img src=${employee} alt="image" class="Preparatory-front-img"/>
                    </figure>
                    <h1 class="Preparatory-front-title-area">Matemática</h1>
                    <div class='Preparatory-background-container-area'>
                        <img class='Preparatory-background-area' src=${backgroundPreparatory} alt="background" />
                    </div>
                </div>
                
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Programación Anual</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Madre de Dios.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Cusco
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Apurimac
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a class='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Documentos Pedagógicos</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>       
        
        `
    }
    AreaMatematica.addEventListener('click', ShowAreaMate);
    
    const ShowHistoria = () => {
        containerAreas.innerHTML= `
                <div class="Preparatory-front-container">
                    <figure class="Preparatory-front-image-container">
                        <img src=${employee} alt="image" class="Preparatory-front-img"/>
                    </figure>
                    <h1 class="Preparatory-front-title-area">Historia, Geografía y Economía</h1>
                    <div class='Preparatory-background-container-area'>
                        <img class='Preparatory-background-area' src=${backgroundPreparatory} alt="background" />
                    </div>
                </div>
                
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Programación Anual</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Madre de Dios.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Cusco
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Apurimac
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a class='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Documentos Pedagógicos</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>       
        
        `
    }
    AreaHistoria.addEventListener('click', ShowHistoria);
    
    const ShowEduFisica = () => {
        containerAreas.innerHTML= `
                <div class="Preparatory-front-container">
                    <figure class="Preparatory-front-image-container">
                        <img src=${employee} alt="image" class="Preparatory-front-img"/>
                    </figure>
                    <h1 class="Preparatory-front-title-area">Educación Física</h1>
                    <div class='Preparatory-background-container-area'>
                        <img class='Preparatory-background-area' src=${backgroundPreparatory} alt="background" />
                    </div>
                </div>
                
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Programación Anual</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Madre de Dios.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Cusco
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Apurimac
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a class='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Documentos Pedagógicos</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>       
        
        `
    }
    AreaEduFisica.addEventListener('click', ShowEduFisica);
    
    const ShowCta = () => {
        containerAreas.innerHTML= `
                <div class="Preparatory-front-container">
                    <figure class="Preparatory-front-image-container">
                        <img src=${employee} alt="image" class="Preparatory-front-img"/>
                    </figure>
                    <h1 class="Preparatory-front-title-area">Ciencia Tecnología y ambiente</h1>
                    <div class='Preparatory-background-container-area'>
                        <img class='Preparatory-background-area' src=${backgroundPreparatory} alt="background" />
                    </div>
                </div>
                
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Programación Anual</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Madre de Dios.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Cusco
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Apurimac
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a class='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Documentos Pedagógicos</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>       
        
        `
    }
    AreaCta.addEventListener('click', ShowCta);

    const ShowComunicacion = () => {
        containerAreas.innerHTML= `
                <div class="Preparatory-front-container">
                    <figure class="Preparatory-front-image-container">
                        <img src=${employee} alt="image" class="Preparatory-front-img"/>
                    </figure>
                    <h1 class="Preparatory-front-title-area">Comunicación</h1>
                    <div class='Preparatory-background-container-area'>
                        <img class='Preparatory-background-area' src=${backgroundPreparatory} alt="background" />
                    </div>
                </div>
                
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Programación Anual</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Madre de Dios.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Cusco
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Apurimac
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a class='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Documentos Pedagógicos</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>       
        
        `
    }
    AreaComunicacion.addEventListener('click', ShowComunicacion);
    
    const ShowCiudadania = () => {
        containerAreas.innerHTML= `
                <div class="Preparatory-front-container">
                    <figure class="Preparatory-front-image-container">
                        <img src=${employee} alt="image" class="Preparatory-front-img"/>
                    </figure>
                    <h1 class="Preparatory-front-title-area">Formación Ciudadana y Cívica</h1>
                    <div class='Preparatory-background-container-area'>
                        <img class='Preparatory-background-area' src=${backgroundPreparatory} alt="background" />
                    </div>
                </div>
                
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Programación Anual</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Madre de Dios.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Cusco
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            PTI Apurimac
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${wordIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a class='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>
                <div class='Preparatory-documents'>
                <h3 class='Preparatory-documents-title'>Documentos Pedagógicos</h3>
                <div class='Preparatory-documents-items-container'>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Preparatory-documents-item'>
                        <p class='Preparatory-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Preparatory-documents-item-icon-container' href="">
                            <img src=${fileIcon} alt="icon-link" class='Preparatory-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>       
        
        `
    }
    AreaCiudadania.addEventListener('click', ShowCiudadania);

}

let change = setInterval(isLoaded, 1000);
function isLoaded (){
    if (document.readyState !== 'loading'){
        //console.log('state', document.readyState);
        Ready();
        //delete document.change;
       
        
    }
}