import { NavLink } from 'react-router-dom';
import './../styles/News.css';
const News = () => {
    return(
      <>
    <div className='News-principal-container'>
        <NavLink to="/NOTICIAS" className="News-link-title">
            <h2 className="News-title">NOTICIAS</h2>
        </NavLink>
        <section className="News-container">
            
        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className="News-link-item">
            <div className="News-item News-item--input">
                <figure className="News-item-container-img">
                        <img src="https://i.postimg.cc/jdVVfFXs/DSC-0433.jpg" alt="imagen" className="News-item-img" />
                </figure>
                <div className='News-item-container-info mod-position-info-big-news'>
                    <p className="News-item-date">Publicado 18/01/2023 15:31</p>
                    <h4 className="News-item-title">CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
            </div>
        </NavLink>  
        <NavLink to='/NOTICIAS/NOTICIADETALLADA' className="News-link-item">
            <div className="News-item News-item--input">
                <figure className="News-item-container-img">
                    
                        <img src="https://i.postimg.cc/5N8hSS78/DSC-0628.jpg" alt="imagen" className="News-item-img" />
                    
                </figure>
                <div className='News-item-container-info'>
                    <p className='News-item-date mod-size-date'>Publicado 18/01/2023 15:31</p>
                    <h4 className='News-item-title mod-size-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
            </div>
        </NavLink>
        <a className="News-link-item">
            <div className="News-item News-item--input">
                <figure className="News-item-container-img">
                    
                        <img src="https://i.postimg.cc/Wbd9jqGK/DSC-0941.jpg" alt="imagen" className="News-item-img" />
                                    
                </figure>
                <div className='News-item-container-info'>
                    <p className='News-item-date mod-size-date'>Publicado 18/01/2023 15:31</p>
                    <h4 className='News-item-title mod-size-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
            </div>
        </a>
        </section>
        <div className='News-button'>
            <NavLink to="/NOTICIAS" target="_blank" className='news-link-button'>Ver mas</NavLink>
        </div>
    </div>    
    </>  
    )
    
}
export default News;