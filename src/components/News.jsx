import './../styles/News.css';
const News = () => {
    return(
      <>
    <div className='News-principal-container'>
        <a href="#" className="News-link-title">
            <h2 className="News-title">NOTICIAS</h2>
        </a>
        <section className="News-container">
            
            <span className="News-item">
                <figure className="News-item-container-img">
                    <a href="News-link-item">
                        <img src="https://i.postimg.cc/jdVVfFXs/DSC-0433.jpg" alt="imagen" className="News-item-img" />
                    </a>
                </figure>
                <div className='News-item-container-info mod-position-info-big'>
                    <p className="News-item-date">Publicado 18/01/2023 15:31</p>
                    <h4 className="News-item-title">CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
            </span>
            
            <span className="News-item">
                <figure className="News-item-container-img">
                    <a href="News-link-item">
                        <img src="https://i.postimg.cc/5N8hSS78/DSC-0628.jpg" alt="imagen" className="News-item-img" />
                    </a>
                </figure>
                <div className='News-item-container-info'>
                    <p className='News-item-date mod-size-date'>Publicado 18/01/2023 15:31</p>
                    <h4 className='News-item-title mod-size-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
            </span>

            <span className="News-item">
                <figure className="News-item-container-img">
                    <a href="News-link-item">
                        <img src="https://i.postimg.cc/sxht8YVd/IMG-2346.jpg" alt="imagen" className="News-item-img" />
                    </a>                
                </figure>
                <div className='News-item-container-info'>
                    <p className='News-item-date mod-size-date'>Publicado 18/01/2023 15:31</p>
                    <h4 className='News-item-title mod-size-title'>CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS.</h4>
                </div>
            </span>
        </section>
        <button className='News-button'>Ver mas</button>
        </div>    
    </>  
    )
    
}
export default News;