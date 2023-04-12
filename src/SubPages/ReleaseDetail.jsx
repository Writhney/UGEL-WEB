import background from './../assets/backgrounds/backgroundReverse.svg';
import pdfIcon from './../assets/icons/pdfIcon.svg';
import './../styles/ReleaseDetail.css';

const ReleaseDetail = () => {
    return(
        <>
        <section className="Release-detail-container">
            <div className="Release-detail-info-container">
                <h3 className="Release-detail-info-title">CUADRO DE MÉRITO DEL PROCESO DE REASIGNACIÓN EXCEPCIONAL DOCENTE 2023 - UGEL ANDAHUAYLAS</h3>
                <p className="Release-detail-info-date">Publicado el 16/01/2023</p>
                <p className="Release-detail-info-description">
                    Según la RVM. N° 150-2022-MINEDU, Aprueba Norma Técnica denominada "Disposiciones que regulan los procedimientos para el destaque de los profesores en el marco de la ley de Reforma Magisterial y su Reglamento” La Unidad de Gestión Educativa Local de Andahuaylas, hace de conocimiento LAS PRESICIONES A TOMAR EN CUENTA, PARA EL PRESENTE AÑO LECTIVO 2023.
                    El destaque es el desplazamiento temporal y excepcional de un profesor nombrado o especialista, desde su cargo de origen a otro cargo igual de la misma modalidad, nivel o ciclo educativo, que se encuentra en la misma u otra IGED. Procede por las siguientes causales: a) necesidad institucional, b) unidad familiar y c) salud.
                </p>
                <p className="Release-detail-info-description">
                El expediente del docente solicitante debe contener:  
                a) FUT. Dirigido al Director de II.EE, acompañando los doc. Causales de destaque: Necesidad Institucional, Unidad familiar, Salud.
                b) Informe Escalafonario Actual.
                c) Declaración Jurada que manifiesta pleno conocimiento y sujeción a lo dispuesto en la Norma Técnica.
                d) El Director que aprueba la solicitud de Destaque, remite a la UGEL Andahuaylas solicitando el destaque del profesor acompañando al expediente el Anexo 1. de la Norma Técnica.
                e) Copia de Titulo Pedagógico, en caso de Secundaria.
                </p>
                <p className="Release-detail-info-description">
                NOTA. Recepción de Expedientes HASTA EL VIERNES 20-01-2023 (Mesa de Partes UGEL Andahuaylas), Por motivo de validación de Plazas por el MINEDU 
                </p>
                <p className="Release-detail-info-description-note">
                OFICINA DE CSP_UGEL-A.
                </p>
            </div>
            <p className='Release-detail-add-title'>Adjuntos</p>
            <div className="Release-detail-add-container">
                <figure className="Release-detail-add-background-container">
                    <img src={background} alt="" className="Release-detail-add-background" />
                </figure>
                <div className='Release-detail-add-item'>
                    <a className='Release-detail-add-item-icon-container' href="">
                        <img src={pdfIcon} alt="icon-link" className='Release-detail-add-item-icon'/>
                    </a>
                    <p className='Release-detail-add-item-description'>
                        Normas
                    </p> 
                </div>
                <div className='Release-detail-add-item'>
                    <a className='Release-detail-add-item-icon-container' href="">
                        <img src={pdfIcon} alt="icon-link" className='Release-detail-add-item-icon'/>
                    </a>
                    <p className='Release-detail-add-item-description'>
                        Cronograma
                    </p> 
                </div>
            </div>
        </section>
        </>
    )
}
export default ReleaseDetail;