import background from './../assets/backgrounds/backgroundReverse.svg';
import employee from './../assets/backgrounds/employeeSit.svg';

import './../styles/Otic.css';
import phoneIcon from './../assets/icons/phoneIcon.svg';
import emailIcon from './../assets/icons/emailICon.svg';
import line from './../assets/backgrounds/line.svg';

const OticDite = () => {
    return(
        <>
        <section className="Otic-container">
            <div className="Otic-title-container">
                <h1 className="Otic-title">OTIC-DITE</h1>
                <h1 className="Otic-title">Oficina de tecnologías de la información y comunicación. Dirección de innovación de tecnologías educativas</h1>
            </div>
            <div className="Otic-front-container">
                <figure className="Otic-front-image-container">
                    <img src={employee} alt="image" className="Otic-front-img"/>
                </figure>
                <h1 className="Otic-front-title">Especialistas</h1>
                <div className='Otic-background-container'>
                    <img className='Otic-background' src={background} alt="background" />
                </div>
            </div>
            <div className="Otic-staff__all">
                <article className="Otic-staff__article">
                    <div className="Otic-staff__container">
                        <figure className="Otic-staff__img-container">
                            <img className="Otic-staff__img"
                            src="https://i.postimg.cc/1tftmNqg/docente3.png"
                            alt="Picture"/>
                            <div className='Otic-staff__data-container'>
                                <h3 className="Otic-staff__info-title">Prof. Guillero Roman</h3>
                            </div>
                        </figure>
                        <div className="Otic-staff__info-container">
                            <div className='Otic-staff__info'>
                                <div className="Otic-staff__data-item">
                                    <figure className="Otic-staff__data-item-icon-container">
                                        <img src={phoneIcon} alt="icon" className="Otic-staff__data-item-icon" />
                                    </figure>  
                                    <p className="Otic-staff__data-icon-text">999 999 999</p>
                                </div>
                                <div className="Otic-staff__data-item">
                                    <figure className="Otic-staff__data-item-icon-container">
                                        <img src={emailIcon} alt="icon" className="Otic-staff__data-item-icon" />
                                    </figure> 
                                    <h3 className="Otic-staff__info-title">guillermo@gmail.com</h3>
                                </div>
                            </div>
                            <figure className='Otic-staff-line-container'>
                                <img src={line} alt="" className='Otic-staff-line'/>
                            </figure>
                            <p className="Otic-staff-info-about">A cargo de:</p>
                            <ul className='Otic-staff-info-about-list'>
                                <li className='Otic-staff-info-about-list-item'>Andahuaylas</li>
                                <li className='Otic-staff-info-about-list-item'>Talavera</li>
                                <li className='Otic-staff-info-about-list-item'>San Jeronimo</li>
                                <li className='Otic-staff-info-about-list-item'>José María Arguedas</li>
                                <li className='Otic-staff-info-about-list-item'>Huancaray</li>
                                <li className='Otic-staff-info-about-list-item'>Huancarama</li>
                                <li className='Otic-staff-info-about-list-item'>Kaquiabamba</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
            <div className="Otic-info-container">
                <h1 className="Otic-info-title">Actividades que desarrollan</h1>
                <div className="Otic-info-items-container">
                    <div className="Otic-info-item">
                        <h3 className="Otic-info-item-title">OTIC</h3>
                        <p className="Otic-info-item-description">
                        Otic pone en operatividad los equipos tecnológicos implementados en ls IIEE. De nivel Inicial, Primaria y secudnaria, como ; mantenimiento, instalación de software, solución de problemas tecnicas
                        </p>
                        <p className="Otic-info-item-description">
                            A nivel UGEL
                        </p>
                    </div>
                    <div className="Otic-info-item">
                        <h3 className="Otic-info-item-title">DITE</h3>
                        <p className="Otic-info-item-description">
                            DITE. Su función es capacitar a los docentes en la parte pedagógica y/o en el uso de los equipos tecnológicos implementados en las IIEE. De nivel inicial, primaria y secundaria                    </p>
                        <p className="Otic-info-item-description">
                            A nivel UGEL
                        </p>
                    </div>
                </div>
                <p className="Otic-info-item-description">
                    En la región Apurímac las Instituciones Educativa tienen una implementación con equipos tecnológicos  del Ministerio de Educación (Servidores, conectividad, laptops XO, Proyectores, Tablet, Televisores), del Gobierno Regional con el Proyecto Aulas Virtuales (Computadoras, cableado estructurado, cableado de red, construcción de infraestructura) en un 20% de instituciones a nivel regional. Asimismo los gobiernos locales realizan la implementación a las Instituciones Educativas de los cuales no se tiene la información precisa y El Ministerio de Educación a través de la OTIC brinda el servicio de acceso a internet por medio satelital (VSAT) con equipos de la empresa GILAT, operadores de telefonía  (Telefónica, Viettel,), Servicio de Televisión Educativa en Instituciones de nivel Secundaria por las empresas (DIRECT TV, CLARO, MOVISTAR).
                </p>
                <p className="Otic-info-item-description">
                La Dirección Regional de Educación de Apurímac, a través de la Dirección de Gestión Pedagógica  dentro de las funciones que le compete establece:
                </p>
                <ul className='Otic-info-list'>
                    <li className='Otic-info-list-item'>Aplicar estrategias orientadas a mejorar la calidad de los servicios educativos de los diferentes niveles y modalidades educativas</li>
                    <li className='Otic-info-list-item'>Monitorear y evaluar el servicio educativo que prestan las Instituciones Educativas para asegurar la calidad de la educación en coordinación con las UGEL</li>
                </ul>

            </div>

        </section>
        </>
    )
}
export default OticDite;