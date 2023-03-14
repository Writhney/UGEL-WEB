import background from './../assets/backgrounds/background1.svg';
import employee from './../assets/icons/employee.svg';
import personBusiness from './../assets/photos/personBusiness.png';
import './../styles/InstitutionalControl.css';
const InstitutionalControl = () => {
    return(
        <>
         <section className="Insti-control-container">
        <div className="Insti-control-front-container">
            <figure className="Insti-control-front-image-container">
                <img src={employee} alt="image" className="Insti-control-front-img"/>
            </figure>
            <h1 className="Insti-control-front-title">Control Institucional</h1>
            <div className='Insti-manage-background-container'>
                <img className='Insti-manage-background' src={background} alt="background" />
            </div>
        </div>
        <div className='Insti-control-info-container'>
                <div className='Insti-control-item'>
                    <div className='Insti-control-item-info-container'>
                        <p className='Insti-control-info-description'>
                        El Órgano de Control, es responsable de programar, ejecutar y evaluar acciones de control administrativo, financiero, educativo e investigaciones en el ámbito de la jurisdicción de la Unidad de Gestión Educativa Local de Andahuaylas, de conformidad con las Normas del Sistema Nacional de Control y demás disposiciones pertinentes.
                        Orgánicamente depende de la Unidad de Gestión Educativa Local de Andahuaylas y funcionalmente de la Contraloría General de la República, y como tal forma parte del Sistema Nacional de Control del Sector Educación.
                        Está representado por el Director del Área de Control Institucional, tiene acceso a toda información y documentación, incluyendo las de tipo calificada como secreta, confidencial o reservada. 
                        Estructura Orgánica:
                        </p>
                        <ul className='Insti-control-info-list-container'>
                            <li className='Insti-control-info-list-item'>Director del Área de Control Institucional</li>
                            <li className='Insti-control-info-list-item'>Auditor I</li>
                            <li className='Insti-control-info-list-item'>Especialista en Inspectoría I</li>
                            <li className='Insti-control-info-list-item'>Secretaría I</li>
                        </ul>
                        <p className='Insti-control-info-description'>
                          Sus funciones específicas son:  
                        </p>
                        <ul className='Insti-control-info-list-container'>
                            <label htmlFor="" className='Insti-control-info-list-item-more' id=''>Ver mas</label>

                            <li className='Insti-control-info-list-item-not-visible'>Conducir y desarrollar sus actividades en concordancia a la Ley del Sistema Nacional de Control, Normas de Auditoría Gubernamental, Normas de Control Interno, Lineamientos de Directivas y otros dispositivos emanados de la Contraloría General de la República</li>
                            <li className='Insti-control-info-list-item-not-visible'>Efectuar control preventivo sin carácter vinculante, al órgano de alto nivel de la entidad, con el propósito de optimizar la supervisión y mejora de los procesos, prácticas e instrumentos de control interno, sin que ello genere prejuzgamiento en opinión que comprometa el ejercicio de su función, vía el control posterior</li>
                            <li className='Insti-control-info-list-item-not-visible'>Elaborar y proponer el Plan Anual de Auditoria Gubernamental (PAAG), así como las acciones de control posterior por encargo de la Sede de Auditoria Regional de Apurímac, como de la Unidad de Gestión Educativa Local Andahuaylas</li>
                            <li className='Insti-control-info-list-item-not-visible'>Ejecutar el seguimiento de las medidas correctivas para implementar las recomendaciones emergentes de las acciones de control realizadas tanto por Auditoria Interna, Externa y Contraloría General, elevándose el informe a la superioridad</li>
                            <li className='Insti-control-info-list-item-not-visible'>Efectuar auditoría a los estados financieros y presupuestarios de la UGEL Andahuaylas, conforme a las Normas del Sistema Nacional de Control</li>
                            <li className='Insti-control-info-list-item-not-visible'>Cumplir dentro de los plazos establecidos con remitir la documentación requerida por la Sede de la Auditoría Regional de Apurímac</li>
                            <li className='Insti-control-info-list-item-not-visible'>Promover y efectuar acciones de capacitación al personal de la Sede y del ámbito jurisdiccional de la UGEL Andahuaylas</li>
                            <li className='Insti-control-info-list-item-not-visible'>Dirigir y evaluar el control interno posterior, la eficiencia institucional de conformidad a la normatividad del Sistema Nacional de Control</li>
                            <li className='Insti-control-info-list-item-not-visible'>Absolver consultas de carácter legal formuladas por las Dependencias, trabajadores de la Institución y usuarios del Sector en asuntos de su competencia</li>
                            <li className='Insti-control-info-list-item-not-visible'>Las demás funciones que le asigne la Unidad de Gestión Educativa Local de Andahuaylas</li>

                        </ul>

                    </div>
                    <div className="Insti-control-item-card-container">
                        <figure className="Insti-control-item-card-img-container">
                            <img className="Insti-control-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Insti-control-item-card-description-container">
                            <h4 className="Insti-control-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Insti-control-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Insti-control-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
        </div>
        </section>    
        </>
    )
}
export default InstitutionalControl;