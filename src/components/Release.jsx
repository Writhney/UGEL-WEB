import './../styles/Release.css';
import releaseImg from '../assets/img/Release.png';
import release2 from '../assets/img/Release2.png';
import { NavLink } from 'react-router-dom';

const Release = () => {
    return(
        <>
        <div className='Release-principal-container'>
        <NavLink to="/COMUNICADOS" className="Release-link-title">
            <h2 className="Release-title">COMUNICADOS</h2>
        </NavLink>
        <section className="Release-container">
          <a href="Release-link-item"> 
            <div className="Release-item Release-item--input">
                <figure className="Release-item-container-img">
                    <img src={releaseImg} alt="imagen" className="Release-item-img" />
                </figure>
                <div className='Release-item-container-info mod-position-info-big'>
                    <p className="Release-item-date">Publicado 18/01/2023 15:31</p>
                    <h4 className="Release-item-title">CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
            </div>
          </a> 
          <a href="Release-link-item">  
            <div className="Release-item Release-item--input">
                <figure className="Release-item-container-img">
                    <img src={release2} alt="imagen" className="Release-item-img" />
                </figure>
                <div className='Release-item-container-info'>
                    <p className='Release-item-date mod-size-date'>Publicado 18/01/2023 15:31</p>
                    <h4 className='Release-item-title mod-size-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
                
            </div>
          </a>
          <a href="Release-link-item">
            <div className="Release-item Release-item--input">
                <figure className="Release-item-container-img">
                    <img src={release2} alt="imagen" className="Release-item-img" />        
                </figure>
                <div className='Release-item-container-info'>
                    <p className='Release-item-date mod-size-date'>Publicado 18/01/2023 15:31</p>
                    <h4 className='Release-item-title mod-size-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
            </div>
            </a>  
        </section>
        <div className='Release-button'>
            <NavLink to="/COMUNICADOS" target="_blank" className='Release-link-button'>Ver mas</NavLink>
        </div>
        </div>
        </>
    )
}
export default Release;