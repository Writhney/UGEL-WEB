import ReleaseImg from './../assets/backgrounds/Release.svg';
import Release from './../assets/img/Release.png';
import backgroundCircle from './../assets/backgrounds/circle.svg';

import './../styles/ReleasesList.css';
const ReleasesList = ( ) => {
    return(
        <>

              <figure className="ReleaseList-background-container">
                <img src={backgroundCircle} alt="background" className='ReleaseList-background'/>
              </figure>  

            
            <section className='ReleasesList-container'>
                <div className='ReleasesList-container-head'>
                    <figure className='ReleasesList-head-container-figure'>
                        <img src={ReleaseImg} alt="image" className='ReleasesList-head-figure'/>
                    </figure>
                    <h2 className='ReleasesList-head-title'>
                        COMUNICADOS
                    </h2>
                </div>
                <div className='ReleasesList-container-items'>
                    <div className='ReleasesList-item'>
                        <figure className='ReleasesList-item-img-container'>
                            <img className='ReleasesList-item-img' src={Release} alt="img" />
                        </figure>
                        <div className='ReleasesList-item-info-container'>
                            <a className='ReleasesList-item-info-link' href="#">
                                <p className='ReleasesList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                                <h4 className='ReleasesList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                                <p className='ReleasesList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                            </a>
                        </div>
                    </div>
                    <div className='ReleasesList-item'>
                        <figure className='ReleasesList-item-img-container'>
                            <img className='ReleasesList-item-img' src={Release} alt="img" />
                        </figure>
                        <div className='ReleasesList-item-info-container'>
                            <a className='ReleasesList-item-info-link' href="#">
                                <p className='ReleasesList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                                <h4 className='ReleasesList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                                <p className='ReleasesList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                            </a>
                        </div>
                    </div>
                    <div className='ReleasesList-item'>
                        <figure className='ReleasesList-item-img-container'>
                            <img className='ReleasesList-item-img' src={Release} alt="img" />
                        </figure>
                        <div className='ReleasesList-item-info-container'>
                            <a className='ReleasesList-item-info-link' href="#">
                                <p className='ReleasesList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                                <h4 className='ReleasesList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                                <p className='ReleasesList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                            </a>
                        </div>
                    </div>
                    <div className='ReleasesList-item'>
                        <figure className='ReleasesList-item-img-container'>
                            <img className='ReleasesList-item-img' src={Release} alt="img" />
                        </figure>
                        <div className='ReleasesList-item-info-container'>
                            <a className='ReleasesList-item-info-link' href="#">
                                <p className='ReleasesList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                                <h4 className='ReleasesList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                                <p className='ReleasesList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                            </a>
                        </div>
                    </div>
                    <div className='ReleasesList-item'>
                        <figure className='ReleasesList-item-img-container'>
                            <img className='ReleasesList-item-img' src={Release} alt="img" />
                        </figure>
                        <div className='ReleasesList-item-info-container'>
                            <a className='ReleasesList-item-info-link' href="#">
                                <p className='ReleasesList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                                <h4 className='ReleasesList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                                <p className='ReleasesList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default ReleasesList;