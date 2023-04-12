import background from './../assets/backgrounds/backgroundReverse.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import people from './../assets/backgrounds/PeoepleWait.svg';
import wordIcon from './../assets/icons/wordIcon.svg';
import excelIcon from './../assets/icons/excelIcon.svg';
import formIcon from './../assets/icons/formIcon.svg';

import './../styles/JobCallDetail.css';

const JobCallDetail = () => {
    return(
        <>
        <section className="Job-detail-container">
            <div className="Job-detail-info-container">
                <h3 className="Job-detail-info-title">CONTRATO DE PERSONAL ADMINISTRATIVO D.LEG. 276 (2022) - UGEL A</h3>
                <p className="Job-detail-info-date">Publicado el 16/01/2023</p>
                <p className='Job-detail-info-state'>Concluida</p>
                <p className="Job-detail-info-description">
                    La Unidad de Gestión Educativa Local Andahuaylas, comunica a los postulantes para el cargo de Profesional de la SEDE UGEL Andahuaylas el Cuadro final de Selección de Contrato de Personal Administrativo D.L. 276 - 2022, el Proceso de Adjudicación se llevara acabo de acuerdo al cronograma establecido.
                </p>
                <p className="Job-detail-info-description-note">
                OFICINA DE CSP_UGEL-A.
                </p>
            </div>
            <p className='Job-detail-add-title'>Adjuntos</p>
            <div className="Job-detail-add-container">
                <figure className="Job-detail-add-background-container">
                    <img src={background} alt="" className="Job-detail-add-background" />
                </figure>
                <div className='Job-detail-add-item'>
                    <a className='Job-detail-add-item-icon-container' href="">
                        <img src={pdfIcon} alt="icon-link" className='Job-detail-add-item-icon'/>
                    </a>
                    <label className='Job-detail-add-item-description'>
                        Normas
                    </label> 
                </div>
                <div className='Job-detail-add-item'>
                    <a className='Job-detail-add-item-icon-container' href="">
                        <img src={wordIcon} alt="icon-link" className='Job-detail-add-item-icon'/>
                    </a>
                    <label className="Job-detail-add-item-description">
                        Cronograma
                    </label> 
                </div>
                <div className='Job-detail-add-item'>
                    <a className='Job-detail-add-item-icon-container' href="">
                        <img src={formIcon} alt="icon-link" className='Job-detail-add-item-icon'/>
                    </a>
                    <label className="Job-detail-add-item-description">
                        Formulario
                    </label> 
                </div>
                <div className='Job-detail-add-item'>
                    <a className='Job-detail-add-item-icon-container' href="">
                        <img src={excelIcon} alt="icon-link" className='Job-detail-add-item-icon'/>
                    </a>
                    <label className="Job-detail-add-item-description">
                       Lista
                    </label> 
                </div>
            </div>
                <p className='Job-detail-add-title'>Resultados Preliminares</p>
            <div className="Job-detail-add-container">
                <div className='Job-detail-add-item'>
                    <a className='Job-detail-add-item-icon-container' href="">
                        <img src={pdfIcon} alt="icon-link" className='Job-detail-add-item-icon'/>
                    </a>
                    <label className="Job-detail-add-item-description">
                        Resultados
                    </label> 
                </div>
            </div>
                <p className='Job-detail-add-title'>Resultados Finales</p>
            <div className="Job-detail-add-container">
                <div className='Job-detail-add-item'>
                    <a className='Job-detail-add-item-icon-container' href="">
                        <img src={pdfIcon} alt="icon-link" className='Job-detail-add-item-icon'/>
                    </a>
                    <label className="Job-detail-add-item-description">
                        Resultados
                    </label> 
                </div>
            </div>
            <figure className='Job-detail-people-container'>
                <img src={people} alt="" className='Job-detail-people'/>
            </figure>
        </section>

        </>
    )
}
export default JobCallDetail;