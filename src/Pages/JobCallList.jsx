import releaseImg from '../assets/backgrounds/Release.svg';
import backgroundCircle from './../assets/backgrounds/circle.svg';

import './../styles/JobCallList.css';
const JobCallList = () => {
    return(
        <>
        <figure className="Job-background-container">
            <img src={backgroundCircle} alt="background" className='Job-background'/>
        </figure>  

        <section className="Job-container">
            <div className="Job-hero-container">
                <figure className="Job-hero-img-container">
                    <img src={releaseImg} alt="image" className="Job-hero-img"/>
                </figure>
                <h2 className="Job-hero-title">CONVOCATORIAS</h2>
            </div>
            <div className='Job-status-container'>
                <di className='Job-status-item-v'>
                    <p className='Job-status-item-title'>VIGENTE</p>
                </di>
                <div className='Job-status-item-p'>
                    <p className='Job-status-item-title'>EN PROCESO</p>
                </div>
                <div className='Job-status-item-c'>
                    <p className='Job-status-item-title'>CONCLUIDA</p>
                </div>
            </div>
            <div className='Job-container-items'>
                <div className='Job-item'>
                    <figure className='Job-item-img-container'>
                        <img className='Job-item-img' src='https://i.postimg.cc/Wbd9jqGK/DSC-0941.jpg' alt="img" />
                    </figure>
                    <div className='Job-item-info-container'>
                        <a className='Job-item-info-link' href="#">
                            <span className="Job-item-info-state">Vigente</span>
                            <p className='Job-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='Job-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='Job-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </a>
                    </div>
                </div>
                <div className='Job-item'>
                    <figure className='Job-item-img-container'>
                        <img className='Job-item-img' src='https://i.postimg.cc/5N8hSS78/DSC-0628.jpg' alt="img" />
                    </figure>
                    <div className='Job-item-info-container'>
                        <a className='Job-item-info-link' href="#">
                            <p className="Job-item-info-state">Vigente</p>
                            <p className='Job-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='Job-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='Job-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </a>
                    </div>
                </div>
                <div className='Job-item'>
                    <figure className='Job-item-img-container'>
                        <img className='Job-item-img' src='https://i.postimg.cc/5N8hSS78/DSC-0628.jpg' alt="img" />
                    </figure>
                    <div className='Job-item-info-container'>
                        <a className='Job-item-info-link' href="#">
                            <p className="Job-item-info-state">Vigente</p>
                            <p className='Job-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='Job-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='Job-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </a>
                    </div>
                </div>
                <div className='Job-item'>
                    <figure className='Job-item-img-container'>
                        <img className='Job-item-img' src='https://i.postimg.cc/5N8hSS78/DSC-0628.jpg' alt="img" />
                    </figure>
                    <div className='Job-item-info-container'>
                        <a className='Job-item-info-link' href="#">
                            <p className="Job-item-info-state">Vigente</p>
                            <p className='Job-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='Job-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='Job-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default JobCallList;