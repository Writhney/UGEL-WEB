import './../styles/Direction.css';
import personBusiness from './../assets/photos/personBusiness.png';

const Direction = () => {
    return(
        <>
        <section className="Direction-container">
            <div className="Direction-front-container">
                <h1 className="Direction-front-title">DIRECCIÓN</h1>
            </div>
            <div className='Direction-items-container'>
                <div className="Direction-item">
                    <div className="Direction-item-about-container">
                       <h4 className="Direction-about-subtitle">Despacho Directoral</h4>
                        <p className="Direction-about-description">
                            La Unidad de Gestión Educativa Local de Andahuaylas, es el Órgano de Ejecución desconcentrado del Ministerio de Educación, responsable de adecuar, ejecutar y administrar la política educativa para asegurar un servicio educativo de calidad con equidad.
                            El titular de la Unidad de Gestión Educativa Local de Andahuaylas depende orgánicamente de la Dirección Regional de Educación Apurímac y es el funcionario con mayor nivel jerárquico en su ámbito, con autoridad y facultad para adoptar decisiones resolutivas y administrativas de acuerdo a Ley.
                        </p> 
                    </div>
                    <div className="Direction-info-item-container">
                        <figure className="Direction-info-item-img-container">
                            <img className="Direction-info-item-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Direction-info-item-description-container">
                            <h4 className="Direction-info-item-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Direction-info-item-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Direction-info-item-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className="Direction-item">
                    <div className="Direction-item-about-container">
                       <h4 className="Direction-about-subtitle">Dirección funciones</h4>
                        <p className="Direction-about-description">
                        Es el órgano de Dirección con mayor nivel jerárquico en su ámbito, con autoridad y facultad para adoptar decisiones resolutivas y administrativas de acuerdo a Ley. Sus funciones son:
                        </p>
                        <ul className="Direction-about-list">
                            <li className="Direction-about-list-item">Formular y contribuir en los lineamientos de la política educativa y asistir a la formulación de la política educativa regional y nacional</li>
                            <li className="Direction-about-list-item">Conducir y concertar la aplicación de la normatividad educativa nacional, regional y local y emitir normas complementarias</li>
                            <li className="Direction-about-list-item">Conducir la formulación, ejecución y evaluación del Proyecto Educativo Local y los Planes Operativos Anuales, en concordancia con el Consejo Participativo Local</li>
                            <li className="Direction-about-list-item">Impulsar el proceso de descentralización de la gestión en las Instituciones Educativas, fortaleciendo su autonomía y participación</li>
                            <li className="Direction-about-list-item">Delinear estrategias para disminuir el analfabetismo y promover la ejecución de los programas estratégicos</li>
                            <li className="Direction-about-list-item">Identificar necesidades de capacitación de personal de las Instituciones Educativas y desarrollar programas de formación continua</li>
                            <li className="Direction-about-list-item">Suscribir convenios, contratos y acuerdos con entidades públicas y privadas, nacionales e internacionales, los cuales serán encaminados a mejorar la calidad de la educación, la cultura, el deporte, la recreación, la ciencia y la tecnología</li>
                            <li className="Direction-about-list-item">Impulsar el funcionamiento del Consejo Participativo Local de Educación, en coordinación con el gobierno local, a fin de generar acuerdos concertados y promover la vigilancia y el control ciudadano</li>
                            <li className="Direction-about-list-item">Orientar la formulación, ejecución y evaluación del presupuesto participativo de la sede institucional y las instituciones educativas de su jurisdicción</li>
                            <li className="Direction-about-list-item">Evaluar la gestión educativa de su ámbito, adoptando las acciones preventivas y correctivas pertinentes</li>
                            <li className="Direction-about-list-item">Asesorar y asegurar que las Instituciones Educativas, cuenten al inicio del año escolar con su Proyecto Educativo Institucional (PEI), Plan Anual de Trabajo (PAT), Reglamento Interno (RI) y el Informe Ejecutivo de Gestión Anual</li>
                            <li className="Direction-about-list-item">Conducir el proceso de evaluación e ingreso del personal docente y administrativo, así como desarrollar acciones del personal, atendiendo los requerimientos de la Institución Educativa en coordinación con la Dirección Regional de Educación de Apurímac</li>
                            <li className="Direction-about-list-item">Diseñar y ejecutar desde la presidencia de los diferentes comités locales, las campañas establecidas por el Ministerio de Educación</li>
                            <li className="Direction-about-list-item">Presidir las juntas del SUB-CAFAE</li>
                            <li className="Direction-about-list-item">Presidir las Comisión de Nombramientos y Reasignaciones del personal de su jurisdicción</li>
                            <li className="Direction-about-list-item">Presidir las Reuniones del Comité de Gestión Presupuestaria de la UGEL de Andahuaylas</li>
                            <li className="Direction-about-list-item">El órgano de Dirección cuenta con personal encargado de desarrollar las acci  ones de actas y certificados, trámite documentario e imagen institucional</li>
                        </ul>
                    </div>
                </div>
                <div className="Direction-item">
                    <div className="Direction-item-about-container">
                       <h4 className="Direction-about-subtitle">Secretaría Directoral</h4>
                        <p className="Direction-about-description">
                            Depende jerárquicamente del Director de la UGEL de Andahuaylas y cumple las siguientes funciones:
                        </p> 
                        <ul className="Direction-about-list">
                            <li className="Direction-about-list-item">Recepcionar, registrar, clasificar y distribuir los documentos que ingresan al despacho de la Dirección</li>
                            <li className="Direction-about-list-item">Tomar dictado, redactar según las indicaciones del Director, digitar la correspondencia, preparar la documentación para el despacho y firma de la Dirección</li>
                            <li className="Direction-about-list-item">Organizar y mantener actualizado el archivo de acuerdo a las normas vigentes, cuidando y estableciendo la seguridad, conservación y confidenciabilidad</li>
                            <li className="Direction-about-list-item">Realizar el seguimiento y control de la documentación que se encuentra en trámite e informar al público usuario sobre su situación</li>
                            <li className="Direction-about-list-item">Preparar los pedidos de materiales y útiles de oficina para la Dirección, los recepciona, distribuye y cuida, en su seguridad y control</li>
                            <label htmlFor="#" className='Direction-about-list-item-more' id='verMas'>Ver mas</label>
                            <li className="Direction-about-list-item-not-visible">Gestionar la producción e impresión de los documentos que sean requeridos por el despacho</li>
                            <li className="Direction-about-list-item-not-visible">Velar por la seguridad, conservación y mantenimiento del mobiliario, equipo y acervo documentario y mantiene actualizado el margesí de bienes</li>
                            <li className="Direction-about-list-item-not-visible">Atender y efectuar llamadas telefónicas, remitir y recepcionar documentos vía fax, en cumplimento de las actividades administrativas</li>
                            <li className="Direction-about-list-item-not-visible">Registrar el control de asistencia, inasistencia, permisos, licencias, vacaciones, desplazamiento interno y externo, así como hojas de producción del personal de Dirección</li>
                            <li className="Direction-about-list-item-not-visible">Organizar solicitud del Director (a) para la agenda de actividades del día, concertar citas y reuniones previstas en la agenda</li>
                            <li className="Direction-about-list-item-not-visible">Organizar y mantener la ambientación de las oficinas a su cargo</li>
                            <li className="Direction-about-list-item-not-visible">Elaborar el consolidado de producción estadística de los documentos ingresados al despacho</li>
                            <li className="Direction-about-list-item-not-visible">Realizar otras funciones de su competencia que le encargue el Director</li>
                        </ul>
                    </div>
                    <div className="Direction-info-item-container">
                        <figure className="Direction-info-item-img-container">
                            <img className="Direction-info-item-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Direction-info-item-description-container">
                            <h4 className="Direction-info-item-description-name">Noemi Medina Espinoza</h4>
                            <p className="Direction-info-item-description-email">noemi@ugelandahuaylas.edu.pe</p>
                            <p className="Direction-info-item-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className="Direction-item">
                    <div className="Direction-item-about-container">
                       <h4 className="Direction-about-subtitle">Imagen Institucional</h4>
                        <p className="Direction-about-description">
                            Depende jerárquicamente del Director de la UGEL de Andahuaylas y cumple las siguientes funciones:                        </p> 
                        <ul className="Direction-about-list">
                            <li className="Direction-about-list-item">Elaborar el Plan de Imagen Institucional de acuerdo a los objetivos de la Gestión Educativa</li>
                            <li className="Direction-about-list-item">Promueve y proyecta una buena imagen institucional hacia la comunidad y mantiene la información actualizada sobre la política educativa, acciones y servicio educativo</li>
                            <li className="Direction-about-list-item">Atiende requerimientos de información provenientes de la superioridad y de los medios de comunicación social</li>
                            <li className="Direction-about-list-item">Participa y coordina con las diferentes Áreas para la óptima ejecución de cursos, foros, seminarios, aniversarios, celebraciones y eventos diversos</li>
                            <li className="Direction-about-list-item">Programa, atiende y ejecuta las acciones protocolares de la Dirección que tengan previstas en la UGEL Andahuaylas</li>
                            <label htmlFor="" className='Direction-about-list-item-more' id='verMas2'>Ver mas</label>
                            <li className="Direction-about-list-item-not-visible-2">Mantiene la coordinación entre la Sede Institucional con el Ministerio de Educación, como también con la Dirección Regional de Educación de Apurímac</li>
                            <li className="Direction-about-list-item-not-visible-2">Conducir la comunicación y propaganda interna y externa de la Sede Institucional</li>
                            <li className="Direction-about-list-item-not-visible-2">Elaborar el periódico mural</li>
                            <li className="Direction-about-list-item-not-visible-2">Realizar sondeos de opinión entre los usuarios y los trabajadores de la UGEL de Andahuaylas, para la tabulación, interpretación y realización de las campañas de difusión</li>
                        </ul>
                    </div>
                    <div className="Direction-info-item-container">
                        <figure className="Direction-info-item-img-container">
                            <img className="Direction-info-item-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Direction-info-item-description-container">
                            <h4 className="Direction-info-item-description-name">Noemi Medina Espinoza</h4>
                            <p className="Direction-info-item-description-email">noemi@ugelandahuaylas.edu.pe</p>
                            <p className="Direction-info-item-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className="Direction-item">
                    <div className="Direction-item-about-container">
                       <h4 className="Direction-about-subtitle">Trámite Documentario</h4>
                        <p className="Direction-about-description">
                        Depende jerárquicamente del Director, cumple las siguientes funciones: </p> 
                        <ul className="Direction-about-list">
                            <li className="Direction-about-list-item">Dirigir y supervisar la expedición y visación de certificados de estudios y constancias de firma de actas de acuerdo a las actas que obran en los archivos</li>
                            <li className="Direction-about-list-item">Recepcionar, registrar y foliar los expedientes y documentos que ingresan</li>
                            <li className="Direction-about-list-item">Orientar y controlar la certificación y autentificación de copias de documentos originales que obran en los archivos de la UGEL de Andahuaylas</li>
                            <li className="Direction-about-list-item">Promover y participar en coordinación con el Área de Gestión Institucional en la racionalización de procedimientos y trámites</li>
                            <li className="Direction-about-list-item">Coordinar con la Dirección y los Órganos de Línea el trámite oportuno y la conservación de los expedientes</li>
                            <label htmlFor="" className='Direction-about-list-item-more' id='verMas3'>Ver mas</label>
                            <li className="Direction-about-list-item-not-visible-3">Difundir y capacitar al personal de la UGEL de Andahuaylas y de las Instituciones Educativas en materia de trámite documentario y archivo</li>
                            <li className="Direction-about-list-item-not-visible-3">Dirigir y controlar la conservación, custodia y depuración de la documentación destinada al archivo de acuerdo a la normatividad legal vigente</li>
                            <li className="Direction-about-list-item-not-visible-3">Realizar otras funciones de su competencia que le encargue el Director</li>
                        </ul>
                    </div>
                    <div className="Direction-info-item-container">
                        <figure className="Direction-info-item-img-container">
                            <img className="Direction-info-item-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Direction-info-item-description-container">
                            <h4 className="Direction-info-item-description-name">Noemi Medina Espinoza</h4>
                            <p className="Direction-info-item-description-email">noemi@ugelandahuaylas.edu.pe</p>
                            <p className="Direction-info-item-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
            
            
            </div>
        </section>
        </>
    )
}
export default Direction;


window.document.addEventListener('DOMContentLoaded', () => {
    const ItemNotVisible2 = [...document.querySelectorAll('.Direction-about-list-item-not-visible-2')];
    const ItemNotVisible3 = [...document.querySelectorAll('.Direction-about-list-item-not-visible-3')];
    
    const ShowMore2 = window.document.getElementById('verMas2');
    const ShowMore3 = window.document.getElementById('verMas3');
    
    let clickTimes = 1;
    const ShowMore = window.document.getElementById('verMas');
    const ItemNotVisible = [...document.querySelectorAll('.Direction-about-list-item-not-visible')];
    
    const ShowText = () => {
        ItemNotVisible.forEach(element => {
            element.classList.toggle('Direction-about-list-item-visible', clickTimes % 2 !== 0 );
        });
        clickTimes++;
    }
    ShowMore.addEventListener('click', ShowText);

    let clickTimes2 = 1;
    const ShowText2 = () => {
        ItemNotVisible2.forEach(element => {
            element.classList.toggle('Direction-about-list-item-visible', clickTimes2 % 2 !== 0 );
        });
        clickTimes2++;
        
    }
    ShowMore2.addEventListener('click', ShowText2);
    let clickTimes3 = 1;
    const ShowText3 = () => {
        ItemNotVisible3.forEach(element => {
            element.classList.toggle('Direction-about-list-item-visible', clickTimes3 % 2 !== 0 );
        });
        clickTimes3++;
    }
    ShowMore3.addEventListener('click', ShowText3);
    
    

});






