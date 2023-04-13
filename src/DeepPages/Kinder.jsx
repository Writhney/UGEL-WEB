import background from './../assets/backgrounds/backgroundReverse.svg';
import employee from './../assets/backgrounds/employeeSit.svg';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import emailIcon from './../assets/icons/emailICon.svg';
import line from './../assets/backgrounds/line.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import fileIcon from './../assets/icons/fileIcon.svg';



import './../styles/Kinder.css';
const Kinder = () => {
    return(
        <>
        <section className="Kinder-container">
            <div className="Kinder-title-container">
                <h1 className="Kinder-title">ÁREA DE GESTIÓN PEDAGOGÍCA INICIAL</h1>
            </div>
            <div className="Kinder-front-container">
                <figure className="Kinder-front-image-container">
                    <img src={employee} alt="image" className="Kinder-front-img"/>
                </figure>
                <h1 className="Kinder-front-title">Especialistas</h1>
                <div className='Kinder-background-container'>
                    <img className='Kinder-background' src={background} alt="background" />
                </div>
            </div>
            <div className="Kinder-staff__all">
                <article className="Kinder-staff__article">
                    <div className="Kinder-staff__container">
                        <figure className="Kinder-staff__img-container">
                            <img className="Kinder-staff__img"
                            src="https://i.postimg.cc/cHKfjBBq/foto-Docente.png"
                            alt="Picture"/>
                            <div className='Kinder-staff__data-container'>
                                <h3 className="Kinder-staff__info-title">Lic. Ruth Flores</h3>
                            </div>
                        </figure>
                        <div className="Kinder-staff__info-container">
                            <div className='Kinder-staff__info'>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Kinder-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Kinder-staff__info-title">ruth@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='Kinder-staff-line-container'>
                                <img src={line} alt="" className='Kinder-staff-line'/>
                            </figure>
                            <p className="Kinder-staff-info-about">A cargo de:</p>
                            <ul className='Kinder-staff-info-about-list'>
                                <li className='Kinder-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Kinder-staff-info-about-list-item'>Talavera</li>
                                <li className='Kinder-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Kinder-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancaray</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancarama</li>
                                <li className='Kinder-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Kinder-staff__article">
                    <div className="Kinder-staff__container">
                        <figure className="Kinder-staff__img-container">
                            <img className="Kinder-staff__img"
                            src="https://i.postimg.cc/cHKfjBBq/foto-Docente.png"
                            alt="Picture"/>
                            <div className='Kinder-staff__data-container'>
                                <h3 className="Kinder-staff__info-title">Lic. Ruth Flores</h3>
                            </div>
                        </figure>
                        <div className="Kinder-staff__info-container">
                            <div className='Kinder-staff__info'>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Kinder-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Kinder-staff__info-title">ruth@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='Kinder-staff-line-container'>
                                <img src={line} alt="" className='Kinder-staff-line'/>
                            </figure>
                            <p className="Kinder-staff-info-about">A cargo de:</p>
                            <ul className='Kinder-staff-info-about-list'>
                                <li className='Kinder-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Kinder-staff-info-about-list-item'>Talavera</li>
                                <li className='Kinder-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Kinder-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancaray</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancarama</li>
                                <li className='Kinder-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Kinder-staff__article">
                    <div className="Kinder-staff__container">
                        <figure className="Kinder-staff__img-container">
                            <img className="Kinder-staff__img"
                            src="https://i.postimg.cc/cHKfjBBq/foto-Docente.png"
                            alt="Picture"/>
                            <div className='Kinder-staff__data-container'>
                                <h3 className="Kinder-staff__info-title">Lic. Ruth Flores</h3>
                            </div>
                        </figure>
                        <div className="Kinder-staff__info-container">
                            <div className='Kinder-staff__info'>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Kinder-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Kinder-staff__info-title">ruth@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='Kinder-staff-line-container'>
                                <img src={line} alt="" className='Kinder-staff-line'/>
                            </figure>
                            <p className="Kinder-staff-info-about">A cargo de:</p>
                            <ul className='Kinder-staff-info-about-list'>
                                <li className='Kinder-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Kinder-staff-info-about-list-item'>Talavera</li>
                                <li className='Kinder-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Kinder-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancaray</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancarama</li>
                                <li className='Kinder-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Kinder-staff__article">
                    <div className="Kinder-staff__container">
                        <figure className="Kinder-staff__img-container">
                            <img className="Kinder-staff__img"
                            src="https://i.postimg.cc/cHKfjBBq/foto-Docente.png"
                            alt="Picture"/>
                            <div className='Kinder-staff__data-container'>
                                <h3 className="Kinder-staff__info-title">Lic. Ruth Flores</h3>
                            </div>
                        </figure>
                        <div className="Kinder-staff__info-container">
                            <div className='Kinder-staff__info'>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Kinder-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Kinder-staff__info-title">ruth@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='Kinder-staff-line-container'>
                                <img src={line} alt="" className='Kinder-staff-line'/>
                            </figure>
                            <p className="Kinder-staff-info-about">A cargo de:</p>
                            <ul className='Kinder-staff-info-about-list'>
                                <li className='Kinder-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Kinder-staff-info-about-list-item'>Talavera</li>
                                <li className='Kinder-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Kinder-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancaray</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancarama</li>
                                <li className='Kinder-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Kinder-staff__article">
                    <div className="Kinder-staff__container">
                        <figure className="Kinder-staff__img-container">
                            <img className="Kinder-staff__img"
                            src="https://i.postimg.cc/cHKfjBBq/foto-Docente.png"
                            alt="Picture"/>
                            <div className='Kinder-staff__data-container'>
                                <h3 className="Kinder-staff__info-title">Lic. Ruth Flores</h3>
                            </div>
                        </figure>
                        <div className="Kinder-staff__info-container">
                            <div className='Kinder-staff__info'>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Kinder-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Kinder-staff__info-title">ruth@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='Kinder-staff-line-container'>
                                <img src={line} alt="" className='Kinder-staff-line'/>
                            </figure>
                            <p className="Kinder-staff-info-about">A cargo de:</p>
                            <ul className='Kinder-staff-info-about-list'>
                                <li className='Kinder-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Kinder-staff-info-about-list-item'>Talavera</li>
                                <li className='Kinder-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Kinder-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancaray</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancarama</li>
                                <li className='Kinder-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="Kinder-staff__article">
                    <div className="Kinder-staff__container">
                        <figure className="Kinder-staff__img-container">
                            <img className="Kinder-staff__img"
                            src="https://i.postimg.cc/cHKfjBBq/foto-Docente.png"
                            alt="Picture"/>
                            <div className='Kinder-staff__data-container'>
                                <h3 className="Kinder-staff__info-title">Lic. Ruth Flores</h3>
                            </div>
                        </figure>
                        <div className="Kinder-staff__info-container">
                            <div className='Kinder-staff__info'>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Kinder-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Kinder-staff__data-item">
                                    <figure className="Kinder-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Kinder-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Kinder-staff__info-title">ruth@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='Kinder-staff-line-container'>
                                <img src={line} alt="" className='Kinder-staff-line'/>
                            </figure>
                            <p className="Kinder-staff-info-about">A cargo de:</p>
                            <ul className='Kinder-staff-info-about-list'>
                                <li className='Kinder-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Kinder-staff-info-about-list-item'>Talavera</li>
                                <li className='Kinder-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Kinder-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancaray</li>
                                <li className='Kinder-staff-info-about-list-item'>Huancarama</li>
                                <li className='Kinder-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            <div className='Kinder-documents'>
                <h3 className='Kidnder-documents-title'>Documentos de Gestión</h3>
                <div className='Kinder-documents-items-container'>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='Kinder-documents'>
                <h3 className='Kidnder-documents-title'>Materiales</h3>
                <div className='Kinder-documents-items-container'>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='Kinder-documents-item'>
                        <p className='Kinder-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='Kinder-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='Kinder-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Kinder;
