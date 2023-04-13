import background from './../assets/backgrounds/backgroundReverse.svg';
import employee from './../assets/backgrounds/employeeSit.svg';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import emailIcon from './../assets/icons/emailICon.svg';
import line from './../assets/backgrounds/line.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import fileIcon from './../assets/icons/fileIcon.svg';
import './../styles/School.css';

const School = () => {
    return(
        <>
        <section className="School-container">
            <div className="School-title-container">
                <h1 className="School-title">ÁREA DE GESTIÓN PEDAGOGÍCA PRIMARIA</h1>
            </div>
            <div className="School-front-container">
                <figure className="School-front-image-container">
                    <img src={employee} alt="image" className="School-front-img"/>
                </figure>
                <h1 className="School-front-title">Especialistas</h1>
                <div className='School-background-container'>
                    <img className='School-background' src={background} alt="background" />
                </div>
            </div>
            <div className="School-staff__all">
                <article className="School-staff__article">
                    <div className="School-staff__container">
                        <figure className="School-staff__img-container">
                            <img className="School-staff__img"
                            src="https://i.postimg.cc/DySXG76k/foto-Docente1.png"
                            alt="Picture"/>
                            <div className='School-staff__data-container'>
                                <h3 className="School-staff__info-title">Dr. Juan Solano</h3>
                            </div>
                        </figure>
                        <div className="School-staff__info-container">
                            <div className='School-staff__info'>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure>  
                                    <p className="School-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="School-staff__info-title">juan@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='School-staff-line-container'>
                                <img src={line} alt="" className='School-staff-line'/>
                            </figure>
                            <p className="School-staff-info-about">A cargo de:</p>
                            <ul className='School-staff-info-about-list'>
                                <li className='School-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='School-staff-info-about-list-item'>Talavera</li>
                                <li className='School-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='School-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='School-staff-info-about-list-item'>Huancaray</li>
                                <li className='School-staff-info-about-list-item'>Huancarama</li>
                                <li className='School-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="School-staff__article">
                    <div className="School-staff__container">
                        <figure className="School-staff__img-container">
                            <img className="School-staff__img"
                            src="https://i.postimg.cc/DySXG76k/foto-Docente1.png"
                            alt="Picture"/>
                            <div className='School-staff__data-container'>
                                <h3 className="School-staff__info-title">Dr. Juan Solano</h3>
                            </div>
                        </figure>
                        <div className="School-staff__info-container">
                            <div className='School-staff__info'>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure>  
                                    <p className="School-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="School-staff__info-title">juan@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='School-staff-line-container'>
                                <img src={line} alt="" className='School-staff-line'/>
                            </figure>
                            <p className="School-staff-info-about">A cargo de:</p>
                            <ul className='School-staff-info-about-list'>
                                <li className='School-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='School-staff-info-about-list-item'>Talavera</li>
                                <li className='School-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='School-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='School-staff-info-about-list-item'>Huancaray</li>
                                <li className='School-staff-info-about-list-item'>Huancarama</li>
                                <li className='School-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="School-staff__article">
                    <div className="School-staff__container">
                        <figure className="School-staff__img-container">
                            <img className="School-staff__img"
                            src="https://i.postimg.cc/DySXG76k/foto-Docente1.png"
                            alt="Picture"/>
                            <div className='School-staff__data-container'>
                                <h3 className="School-staff__info-title">Dr. Juan Solano</h3>
                            </div>
                        </figure>
                        <div className="School-staff__info-container">
                            <div className='School-staff__info'>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure>  
                                    <p className="School-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="School-staff__info-title">juan@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='School-staff-line-container'>
                                <img src={line} alt="" className='School-staff-line'/>
                            </figure>
                            <p className="School-staff-info-about">A cargo de:</p>
                            <ul className='School-staff-info-about-list'>
                                <li className='School-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='School-staff-info-about-list-item'>Talavera</li>
                                <li className='School-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='School-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='School-staff-info-about-list-item'>Huancaray</li>
                                <li className='School-staff-info-about-list-item'>Huancarama</li>
                                <li className='School-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="School-staff__article">
                    <div className="School-staff__container">
                        <figure className="School-staff__img-container">
                            <img className="School-staff__img"
                            src="https://i.postimg.cc/DySXG76k/foto-Docente1.png"
                            alt="Picture"/>
                            <div className='School-staff__data-container'>
                                <h3 className="School-staff__info-title">Dr. Juan Solano</h3>
                            </div>
                        </figure>
                        <div className="School-staff__info-container">
                            <div className='School-staff__info'>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure>  
                                    <p className="School-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="School-staff__info-title">juan@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='School-staff-line-container'>
                                <img src={line} alt="" className='School-staff-line'/>
                            </figure>
                            <p className="School-staff-info-about">A cargo de:</p>
                            <ul className='School-staff-info-about-list'>
                                <li className='School-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='School-staff-info-about-list-item'>Talavera</li>
                                <li className='School-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='School-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='School-staff-info-about-list-item'>Huancaray</li>
                                <li className='School-staff-info-about-list-item'>Huancarama</li>
                                <li className='School-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="School-staff__article">
                    <div className="School-staff__container">
                        <figure className="School-staff__img-container">
                            <img className="School-staff__img"
                            src="https://i.postimg.cc/DySXG76k/foto-Docente1.png"
                            alt="Picture"/>
                            <div className='School-staff__data-container'>
                                <h3 className="School-staff__info-title">Dr. Juan Solano</h3>
                            </div>
                        </figure>
                        <div className="School-staff__info-container">
                            <div className='School-staff__info'>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure>  
                                    <p className="School-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="School-staff__info-title">juan@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='School-staff-line-container'>
                                <img src={line} alt="" className='School-staff-line'/>
                            </figure>
                            <p className="School-staff-info-about">A cargo de:</p>
                            <ul className='School-staff-info-about-list'>
                                <li className='School-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='School-staff-info-about-list-item'>Talavera</li>
                                <li className='School-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='School-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='School-staff-info-about-list-item'>Huancaray</li>
                                <li className='School-staff-info-about-list-item'>Huancarama</li>
                                <li className='School-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="School-staff__article">
                    <div className="School-staff__container">
                        <figure className="School-staff__img-container">
                            <img className="School-staff__img"
                            src="https://i.postimg.cc/DySXG76k/foto-Docente1.png"
                            alt="Picture"/>
                            <div className='School-staff__data-container'>
                                <h3 className="School-staff__info-title">Dr. Juan Solano</h3>
                            </div>
                        </figure>
                        <div className="School-staff__info-container">
                            <div className='School-staff__info'>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure>  
                                    <p className="School-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="School-staff__data-item">
                                    <figure className="School-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="School-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="School-staff__info-title">juan@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='School-staff-line-container'>
                                <img src={line} alt="" className='School-staff-line'/>
                            </figure>
                            <p className="School-staff-info-about">A cargo de:</p>
                            <ul className='School-staff-info-about-list'>
                                <li className='School-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='School-staff-info-about-list-item'>Talavera</li>
                                <li className='School-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='School-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='School-staff-info-about-list-item'>Huancaray</li>
                                <li className='School-staff-info-about-list-item'>Huancarama</li>
                                <li className='School-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
                
            </div>
            <div className='School-documents'>
                <h3 className='School-documents-title'>Documentos de Gestión</h3>
                <div className='School-documents-items-container'>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={pdfIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='School-documents'>
                <h3 className='School-documents-title'>Materiales</h3>
                <div className='School-documents-items-container'>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA 01-2017- DREA/UGEL-A-AGP-DIR.
                            Normas Complementarias para el desarrollo del año Escolar 2017 en IIEE del Ámbito de la UGEL Andahuaylas.
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                    <div className='School-documents-item'>
                        <p className='School-documents-item-description'>
                            DIRECTIVA-04-DREA-A-ESCOLAR-2017-WEB
                        </p>
                        <a clasName='School-documents-item-icon-container' href="">
                            <img src={fileIcon} alt="icon-link" className='School-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default School;