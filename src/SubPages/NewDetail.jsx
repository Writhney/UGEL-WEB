import background from './../assets/backgrounds/backgroundReverse.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import people from './../assets/backgrounds/PeoepleWait.svg';
import wordIcon from './../assets/icons/wordIcon.svg';
import excelIcon from './../assets/icons/excelIcon.svg';
import formIcon from './../assets/icons/formIcon.svg';
import './../styles/NewDetail.css';

const NewDetail = () => {
    return(
        <>
        <section className="New-detail-container">
            <div className="New-detail-info-container">
                <h3 className="New-detail-info-title">IMPLEMENTAN EL PROCESO DE MONITOREO Y ACOMPAÑAMIENTO A LA GESTIÓN ESCOLAR Y AL FUNCIONAMIENTO DE LA EDUCACIÓN A DISTANCIA EN EL MARCO DE LA ESTRATEGIA NACIONAL APRENDO EN CASA EN LA PROVINCIA DE ANDAHUAYLAS.</h3>
                <p className="New-detail-info-date">Publicado el 16/01/2023</p>
                <p className="New-detail-info-description">
                    La Unidad de Gestión Educativa Local Andahuaylas, comunica a los postulantes para el cargo de Profesional de la SEDE UGEL Andahuaylas el Cuadro final de Selección de Contrato de Personal Administrativo D.L. 276 - 2022, el Proceso de Adjudicación se llevara acabo de acuerdo al cronograma establecido.
                </p>
                <figure className='New-detail-info-img-container'>
                    <img class="New-detail-info-img" src="https://i.postimg.cc/5N8hSS78/DSC-0628.jpg" alt="img"></img>
                </figure>
            </div>
            <p className='New-detail-add-title'>Adjuntos</p>
            <div className="New-detail-add-container">
                <figure className="New-detail-add-background-container">
                    <img src={background} alt="" className="New-detail-add-background" />
                </figure>
                <div className='New-detail-add-item'>
                    <a className='New-detail-add-item-icon-container' href="">
                        <img src={pdfIcon} alt="icon-link" className='New-detail-add-item-icon'/>
                    </a>
                    <label className='New-detail-add-item-description'>
                        Resolución
                    </label> 
                </div>
            </div>
        </section>
        
        </>
    )
}
export default NewDetail;