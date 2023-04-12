import ReleaseImg from './../assets/backgrounds/Release.svg';
import Release from './../assets/img/Release.png';
import backgroundCircle from './../assets/backgrounds/circle.svg';

import './../styles/NewsList.css';
import { NavLink } from 'react-router-dom';

const NewssList = () => {
    return(
     <>
        
    <figure className="NewsList-background-container">
            <img src={backgroundCircle} alt="background" className='NewsList-background'/>
          </figure>  

        
        <section className='NewsList-container'>
            <div className='NewsList-container-head'>
                <figure className='NewsList-head-container-figure'>
                    <img src={ReleaseImg} alt="image" className='NewsList-head-figure'/>
                </figure>
                <h2 className='NewsList-head-title'>
                    NOTICIAS
                </h2>
            </div>
            <div className='NewsList-container-items'>
                <div className='NewsList-item'>
                    <figure className='NewsList-item-img-container'>
                        <img className='NewsList-item-img' src='https://i.postimg.cc/Wbd9jqGK/DSC-0941.jpg' alt="img" />
                    </figure>
                    <div className='NewsList-item-info-container'>
                        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className='NewsList-item-info-link' href="#">
                            <p className='NewsList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='NewsList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='NewsList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </NavLink>
                    </div>
                </div>
                <div className='NewsList-item'>
                    <figure className='NewsList-item-img-container'>
                        <img className='NewsList-item-img' src='https://i.postimg.cc/5N8hSS78/DSC-0628.jpg' alt="img" />
                    </figure>
                    <div className='NewsList-item-info-container'>
                        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className='NewsList-item-info-link' href="#">
                            <p className='NewsList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='NewsList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='NewsList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </NavLink>
                    </div>
                </div>
                <div className='NewsList-item'>
                    <figure className='NewsList-item-img-container'>
                        <img className='NewsList-item-img' src='https://i.postimg.cc/jdVVfFXs/DSC-0433.jpg' alt="img" />
                    </figure>
                    <div className='NewsList-item-info-container'>
                        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className='NewsList-item-info-link' href="#">
                            <p className='NewsList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='NewsList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='NewsList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </NavLink>
                    </div>
                </div><div className='NewsList-item'>
                    <figure className='NewsList-item-img-container'>
                        <img className='NewsList-item-img' src='https://i.postimg.cc/Wbd9jqGK/DSC-0941.jpg' alt="img" />
                    </figure>
                    <div className='NewsList-item-info-container'>
                        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className='NewsList-item-info-link' href="#">
                            <p className='NewsList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='NewsList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='NewsList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </NavLink>
                    </div>
                </div>
                <div className='NewsList-item'>
                    <figure className='NewsList-item-img-container'>
                        <img className='NewsList-item-img' src='https://i.postimg.cc/5N8hSS78/DSC-0628.jpg' alt="img" />
                    </figure>
                    <div className='NewsList-item-info-container'>
                        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className='NewsList-item-info-link' href="#">
                            <p className='NewsList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='NewsList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='NewsList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </NavLink>
                    </div>
                </div>
                <div className='NewsList-item'>
                    <figure className='NewsList-item-img-container'>
                        <img className='NewsList-item-img' src='https://i.postimg.cc/jdVVfFXs/DSC-0433.jpg' alt="img" />
                    </figure>
                    <div className='NewsList-item-info-container'>
                        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className='NewsList-item-info-link' href="#">
                            <p className='NewsList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='NewsList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='NewsList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </NavLink>
                    </div>
                </div>
                <div className='NewsList-item'>
                    <figure className='NewsList-item-img-container'>
                        <img className='NewsList-item-img' src='https://i.postimg.cc/Wbd9jqGK/DSC-0941.jpg' alt="img" />
                    </figure>
                    <div className='NewsList-item-info-container'>
                        <NavLink to='/NOTICIAS/NOTICIADETALLADA'className='NewsList-item-info-link' href="#">
                            <p className='NewsList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='NewsList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='NewsList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </NavLink>
                    </div>
                </div>
                <div className='NewsList-item'>
                    <figure className='NewsList-item-img-container'>
                        <img className='NewsList-item-img' src='https://i.postimg.cc/5N8hSS78/DSC-0628.jpg' alt="img" />
                    </figure>
                    <div className='NewsList-item-info-container'>
                        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className='NewsList-item-info-link' href="#">
                            <p className='NewsList-item-info-date'>Publicado el 18/01/2023 15:31</p>
                            <h4 className='NewsList-item-info-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                            <p className='NewsList-item-info-description'>Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento" La Unidad de Gestión Educativa Local de...</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
  
    </>   
    )
    
}

export default NewssList;