import background from './../assets/backgrounds/background1.svg';
import employee from './../assets/icons/employee.svg';
import './../styles/AdministrativeProcesses.css';

const AdministrativeProcesses = () => {
    return(
    <>
    <section className="Admi-process-container">
        <div className="Admi-process-front-container">
            <figure className="Admi-process-front-image-container">
                <img src={employee} alt="image" className="Admi-process-front-img"/>
            </figure>
            <h1 className="Admi-process-front-title">Procesos Administrativos</h1>
            <div className='Insti-manage-background-container'>
                <img className='Insti-manage-background' src={background} alt="background" />
            </div>
        </div>
        <div className='Admi-process-info-container'>
            <div className='Admi-process-item'>
                    <div className='Admi-process-item-info-container'>
                        <p className='Admi-process-info-description'>
                            La Comisión Permanente de Procesos Administrativos (Docentes - Ley 24029 y su modificatoria 25012; D.S. 019-90-ED y su Modificatoria D.S. 011-2007-ED), esta comisión se constituye mediante Resolución Directoral del Titular de la UGEL, por el periodo de un (1) año. La Comisión Permanente de Procesos Administrativos estará constituida por cuatro (4) miembros titulares y contará con cuatro (4) suplentes; de los cuales serán tres (3) representantes designados por la entidad y un (1) representante de los profesores.
                            En el caso de los representantes de la entidad uno será el jefe de personal o quien haga sus veces, y otro la presidirá. La Comisión podrá contar con el asesoramiento de los profesionales que sean necesarios.
                            El profesor suspendido en el ejercicio de sus funciones o separado temporalmente del servicio, tiene derecho a reincorporarse automáticamente, al término de la sanción, a otra plaza distinta a la que ocupaba y que determina la administración. La autoridad educativa inmediata comunicará al órgano correspondiente la reincorporación de dicha plaza.
                            La estabilidad en el servicio se suspende con el inicio de un proceso administrativo pudiendo ser puesto al docente a disposición de la autoridad correspondiente mientras dure el mismo.
                        </p>
                        <p className='Admi-process-info-description'>
                            La Comisión permanente de Procesos Administrativos Disciplinarios (Administrativos - D.L. 276 "Ley de Bases de la Carrera Administrativa y de Remuneraciones del Sector Público" D.S. 005-90-PCM), estará constituida por los tres Miembros Titulares y tres suplentes. Entre los Titulares, el Presidente es un funcionario designado por el Director, del Órgano de Ejecución Desconcentrado, el Secretario es el Jefe de Personal o el que haga a sus veces el Representante es el Representante de los Trabajadores Administrativos. Entre los Miembros Suplentes, el Presidente es un funcionario designado por el Director del Órgano de Ejecución Desconcentrado, el Secretario es el Especialista (e) del Área de Gestión Administrativa y el Representante de los Trabajadores Administrativos.
                            Para cumplir de sus Fines, la COPROAD tiene las siguientes Funciones Generales y podrá contar con el Asesoramiento de Profesionales Abogados.
                        </p>
                        <ul className='Admi-process-info-list-container'>
                            <li className='Admi-process-info-list-item'>Recepcionar, estudiar, analizar y examinar los expedientes y pruebas que se presentan como materia de Proceso Administrativos y/o Administrativos Disciplinarios</li>
                            <li className='Admi-process-info-list-item'>Investigar los casos, solicitando los informes respectivos, examinar las pruebas que se presentan y elevar un Informe a la Dirección, recomendando las sanciones que son de aplicación</li>
                            <li className='Admi-process-info-list-item'>Solicitar los informes adicionales necesarios a las diferentes entidades educativas</li>
                            <li className='Admi-process-info-list-item'>Solicitar el Órgano de Control Institucional la aplicación de las investigaciones, así como remitir informes de verificación, para los casos que se encuentran en giro de resolver por la comisión</li>
                            <li className='Admi-process-info-list-item'>Cursar la debida notificación de apertura de Proceso Administrativo o Administrativo Disciplinario, a los procesados</li>
                            <li className='Admi-process-info-list-item'>Resolver recursos Impugnativos de Reconsideración del Personal que ha sido materia de proceso administrativo o administrativo disciplinario</li>
                            <li className='Admi-process-info-list-item'>Mantener al día y registrar en el Libro de Actas, los acuerdos tomados por la Comisión</li>
                            <li className='Admi-process-info-list-item'>Proporcionar las facilidades a los Procesados y/o Apoderados a fin de conocer el estado de su expediente, así como facilitar a solicitud del interesado copias Certificadas y el uso de Informe Oral</li>
                            <li className='Admi-process-info-list-item'>Elaborar los proyectos de Resolución de Instauración de Proceso Administrativo o Administrativo Disciplinario</li>
                            <li className='Admi-process-info-list-item'>Elevar el expediente de Instauración y Finalización de los Procesos Administrativos y/o Administrativos Disciplinarios, al Titular de la UGEL Andahuaylas levar el Informe final de los procesos, al Titular de la UGEL, recomendando las sanciones que sean de aplicación al procesado</li>
                        </ul>
                    </div>
            </div>
        </div>
    </section>
        
    </>
    )
}
export default AdministrativeProcesses;