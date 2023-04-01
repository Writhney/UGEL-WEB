import background from './../assets/backgrounds/background1.svg';
import employee from './../assets/backgrounds/employeeShowPic.svg';
import personBusiness from './../assets/photos/personBusiness.png';
import './../styles/EducationalManagement.css';
import { NavLink } from 'react-router-dom';

function readyEducation (){
    const buttonInicial = document.getElementById('inicial');
    const buttonPrimaria = document.getElementById('primaria');
    const buttonSecundaria = document.getElementById('secundaria');

    const containerInfo = document.getElementById('containerInfo');
    
    const loadInfoInicial = () => {
        containerInfo.innerHTML = `
        <div class='Edu-manage-section-container'>
        <h3 class='Edu-manage-section-title'>Educación Inicial</h3>
        <p class='Edu-manage-section-description'>Jerárquicamente depende del Director del Área de Gestión Pedagógica.</p>
        <p class='Edu-manage-section-description'>Sus funciones específicas son: </p>
        <ul class='Edu-manage-section-list'>
        <li class='Edu-manage-section-list-item'>Asesorar y ejecutar la política y normatividad educativa, supervisando su ampliación en el ámbito de la Unidad de Gestión Educativa Local de Andahuaylas</li>
        <li class='Edu-manage-section-list-item'>Ejecutar las Normas Técnico Pedagógicas y demás dispositivos del nivel</li>
        <li class='Edu-manage-section-list-item'>Participar en la formulación y evaluación del PEI y Plan Operativo Institucional (POI)</li>
        <li class='Edu-manage-section-list-item'>Programar, ejecutar y evaluar las capacitaciones que se realizan</li>
        <li class='Edu-manage-section-list-item'>Orientar el cumplimiento de las normas vigentes a los Directores de las Instituciones Educativas</li>
        <li class='Edu-manage-section-list-item'>Dar el tratamiento adecuado a los expedientes del nivel</li>
        <li class='Edu-manage-section-list-item'>Realizar reuniones de inter aprendizajes con Directores de las Instituciones Educativas de la UGEL Andahuaylas para atender la problemática y necesidades de las REDES, el desarrollo curricular y la producción de materiales educativos adecuados a su ámbito de ejecución</li>
        <li class='Edu-manage-section-list-item'>Participar en acciones de interaprendizaje docente</li>
        <li class='Edu-manage-section-list-item'>Participar en las reuniones del equipo técnico, asumiendo las responsabilidades que se deriven de los acuerdos</li>
        <li class='Edu-manage-section-list-item'>Elaborar informes técnicos y opinar en asuntos de su competencia oportunamente</li>
        <li class='Edu-manage-section-list-item'>Programar, coordinar, ejecutar y evaluar las funciones inherentes a su cargo, dando cuenta al Director del Área de Gestión Pedagógica</li>
        <li class='Edu-manage-section-list-item'>Diseñar y proponer a la dirección sistemas de evaluación curricular orientados al mejoramiento del servicio educativo</li>
        <li class='Edu-manage-section-list-item'>Diseñar, experimentar y validar nuevos enfoques, estrategias y/o sistemas pedagógicos y tecnológicos apropiados a la realidad de la UGEL Andahuaylas</li>
        <li class='Edu-manage-section-list-item'>Coordinar, supervisar y evaluar las actividades de investigación y experimentación de aspectos educacionales y de perfeccionamiento docente en el desarrollo de programas educativos</li>
        <li class='Edu-manage-section-list-item'>Planificar, supervisar y evaluar las actividades y/o desarrollo de las acciones de programas no escolarizados</li>
        <li class='Edu-manage-section-list-item'>Asumir el rol de coordinador de turno del equipo técnico de los especialistas de Educación de los diferentes niveles</li>
        <li class='Edu-manage-section-list-item'>Cumplir las demás funciones afines al cargo y las que le delegue el Director del Área de Gestión Pedagógica</li>
        <li class='Edu-manage-section-list-item'>Participar en las actividades programadas de las Redes Educativas</li>
        </ul>
        </div>`
    }
    buttonInicial.addEventListener('click', loadInfoInicial);
    
    const loadInfoPrimaria = () => {
        containerInfo.innerHTML = `
        <div class='Edu-manage-section-container --mod-color'>
        <h3 class='Edu-manage-section-title'>Educación Pimaria</h3>
        <p class='Edu-manage-section-description'>Jerárquicamente depende del Director del Área de Gestión Pedagógica.</p>
        <p class='Edu-manage-section-description'>Sus funciones específicas son: </p>
        <ul class='Edu-manage-section-list'>
        <li class='Edu-manage-section-list-item'>Asesorar y ejecutar la política y normatividad educativa, supervisando su ampliación en el ámbito de la UGEL Andahuaylas</li>
        <li class='Edu-manage-section-list-item'>Ejecutar las normas técnico pedagógicas y demás dispositivos del nivel primario</li>
        <li class='Edu-manage-section-list-item'>Participar en la formulación y evaluación del PEI y Plan Operativo Institucional</li>
        <li class='Edu-manage-section-list-item'>Programar, ejecutar y evaluar las capacitaciones, para mejorar los niveles de aprendizaje</li>
        <li class='Edu-manage-section-list-item'>Orientar el cumplimiento de las normas vigentes a los Directores de las Instituciones Educativas del nivel y modalidad: EBE, EBA y EBR</li>
        <li class='Edu-manage-section-list-item'>Dar el tratamiento adecuado a los expedientes del nivel y modalidad</li>
        <li class='Edu-manage-section-list-item'>Realizar reuniones de inter aprendizajes con Directores de las II.EE. del ámbito de la UGEL Andahuaylas para atender la problemática y necesidades de las MICROREDES y REDES Educativas distritales, así como la producción de materiales educativos adecuados a su ámbito de ejecución</li>
        <li class='Edu-manage-section-list-item'>Participar en acciones de interaprendizaje docente</li>
        <li class='Edu-manage-section-list-item'>Participar en las reuniones del equipo técnico, asumiendo las responsabilidades que se deriven de los acuerdos</li>
        <li class='Edu-manage-section-list-item'>Elaborar informes técnicos y opinar en asuntos de su competencia oportunamente</li>
        <li class='Edu-manage-section-list-item'>Programar, coordinar, ejecutar y evaluar las funciones inherentes a su cargo, dando cuenta al Director del Área de Gestión Pedagógica</li>
        <li class='Edu-manage-section-list-item'>Diseñar y proponer a la dirección sistemas de evaluación curricular orientados al mejoramiento del servicio educativo</li>
        <li class='Edu-manage-section-list-item'>Diseñar y validar nuevos enfoques, estrategias y/o sistemas pedagógicos y tecnológicos, apropiados a la realidad de la UGEL Andahuaylas en base a los resultados de la evaluación censal en logros de aprendizaje</li>
        <li class='Edu-manage-section-list-item'>Coordinar, supervisar y evaluar las actividades de investigación, experimentación de aspectos educacionales y de perfeccionamiento docente en el desarrollo de programas educativos</li>
        <li class='Edu-manage-section-list-item'>Planificar, supervisar y evaluar las actividades y/o desarrollo de las acciones de Programas No Escolarizados</li>
        <li class='Edu-manage-section-list-item'>Asumir el rol de coordinador de turno del equipo técnico de los Especialistas de Educación de los diferentes Niveles</li>
        <li class='Edu-manage-section-list-item'>Cumplir las demás funciones afines al cargo y las que le delegue el Director del Área de Gestión Pedagógica</li>
        <li class='Edu-manage-section-list-item'>Participar en las actividades programadas de las Microredes y Redes Educativas distritales</li>
        <li class='Edu-manage-section-list-item'>Estimular resolutivamente al personal directivo y docente de buen desempeño del nivel y modalidad</li>
        </ul>
        </div>
        `
    }
    buttonPrimaria.addEventListener('click', loadInfoPrimaria);
    
    const loadInfoSecundaria = () => {
        containerInfo.innerHTML = `
        <div class='Edu-manage-section-container --mod-color-secundaria'>
        <h3 class='Edu-manage-section-title'>Educación Secundaria</h3>
        <p class='Edu-manage-section-description'>Jerárquicamente depende del Director del Área de Gestión Pedagógica.</p>
        <p class='Edu-manage-section-description'>Sus funciones específicas son: </p>
        <ul class='Edu-manage-section-list'>
        <li class='Edu-manage-section-list-item'>Asesorar y ejecutar la política educativa, en el ámbito de la UGEL Andahuaylas</li>
        <li class='Edu-manage-section-list-item'>Ejecutar las Normas Técnico Pedagógicas y demás dispositivos del nivel secundario</li>
        <li class='Edu-manage-section-list-item'>Participar en la formulación y evaluación del PEI y Plan Operativo Institucional</li>
        <li class='Edu-manage-section-list-item'>Programar, ejecutar y evaluar las capacitaciones que se realizan a nivel de la UGEL</li>
        <li class='Edu-manage-section-list-item'>Orientar el cumplimiento de las normas vigentes a los Directores de las Instituciones Educativas del nivel y modalidad</li>
        <li class='Edu-manage-section-list-item'>Dar el tratamiento adecuado a los expedientes del nivel y modalidad</li>
        <li class='Edu-manage-section-list-item'>Realizar reuniones de inter aprendizajes con Directores de las Instituciones Educativas del ámbito de la UGEL para atender la problemática y necesidades de las Microrredes y Redes Educativas distritales, así como la producción de materiales educativos adecuados a su ámbito de ejecución</li>
        <li class='Edu-manage-section-list-item'>Participar en acciones de interaprendizaje docente</li>
        <li class='Edu-manage-section-list-item'>Participar en las reuniones del Equipo Técnico, asumiendo las responsabilidades que se deriven de los acuerdos</li>
        <li class='Edu-manage-section-list-item'>Elaborar informes técnicos y opinar en asuntos de su competencia oportunamente</li>
        <li class='Edu-manage-section-list-item'>Programar, coordinar, ejecutar y evaluar las funciones inherentes a su cargo, dando cuenta al Director del Área</li>
        <li class='Edu-manage-section-list-item'>Diseñar y proponer a la Dirección, sistemas de evaluación curricular orientados al mejoramiento del servicio educativo</li>
        <li class='Edu-manage-section-list-item'>Diseñar experimentar y validar nuevos enfoques, estrategias y/o sistemas pedagógicos y tecnológicos, apropiados a la realidad de la UGEL</li>
        <li class='Edu-manage-section-list-item'>Coordinar, supervisar y evaluar las actividades de investigación, experimentación de los aspectos educacionales y de perfeccionamiento docente en el desarrollo de los programas educativos</li>
        <li class='Edu-manage-section-list-item'>Planificar, supervisar y evaluar las actividades educativas y los Programas Escolarizados y Programas No Escolarizados</li>
        <li class='Edu-manage-section-list-item'>Asumir el rol de coordinador de los Especialistas de Educación</li>
        <li class='Edu-manage-section-list-item'>Cumplir las demás funciones afines al cargo y otras que le delegue el Director del Área</li>
        <li class='Edu-manage-section-list-item'>Participar en las actividades programadas de las Microredes y Redes Educativas distritales del ámbito de la UGEL</li>
        </ul>
        </div>
        
        
        
        
        `
    }
    buttonSecundaria.addEventListener('click', loadInfoSecundaria);
}

let isReady = setInterval(isLoaded, 1000);
function isLoaded (){
    if (document.readyState !== 'loading'){
        //console.log('state', document.readyState);
        readyEducation();
    }
}

const EducationalManagement = () => {
    return(
        <>
    <section className="Edu-manage-container">
        <div className="Edu-manage-front-container">
            <figure className="Edu-manage-front-image-container">
                <img src={employee} alt="image" className="Edu-manage-front-img"/>
            </figure>
            <h1 className="Edu-manage-front-title">Gestión Pedagógica</h1>
            <div className='Edu-manage-background-container'>
                <img className='Edu-manage-background' src={background} alt="background" />
            </div>
        </div>
        <div className='Edu-manage-info-container'>
                <div className='Edu-manage-item'>
                    <div className='Edu-manage-item-info-container'>
                        <p className='Edu-manage-info-description'>
                            El Área de Gestión Pedagógica, es responsable de realizar acciones de capacitación, asesoramiento, monitoreo, orientación, investigación, adecuación, supervisión y evaluación de las acciones educativas, culturales, recreativas y deportivas, de acuerdo a la Política Sectorial y planes de desarrollo Local, depende de la Unidad de Gestión Educativa Local de Andahuaylas.
                            El Jefe de Área es nominado por el Director y depende directamente de Él.
                            Estrusctura Orgánica:
                        </p>
                        <ul className='Edu-manage-info-list-container'>
                            <li className='Edu-manage-info-list-item'>Secretaría</li>
                            <li className='Edu-manage-info-list-item'>Equipo Técnico</li>
                        </ul>
                        <p className='Edu-manage-info-description'>Sus funciones Específicas son:</p>
                        <ul className='Edu-manage-info-list-container'>
                            <li className='Edu-manage-info-list-item'>Dirigir, coordinar, orientar, supervisar y evaluar las actividades que desarrolla la Dirección a su cargo</li>
                            <li className='Edu-manage-info-list-item'>Promover, dirigir, orientar y coordinar con la Dirección Regional de Educación, la realización de estudios e investigaciones destinadas al desarrollo de la educación, cultura, recreación y deporte</li>
                            <label htmlFor="" className='Edu-manage-info-list-item-more' id=''>Ver mas</label>
                            <li className='Edu-manage-info-list-item-not-visible'>Comprometer la participación activa de instituciones públicas y privadas en las acciones educativas, culturales, deportivas y recreacionales, mediante el establecimiento de convenios, acuerdos y desarrollo de programas de carácter multisectorial</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Brindar asesoramiento en asuntos técnicos pedagógicos al equipo técnico, directores de centros educativos de diferentes niveles y modalidades</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Coordinar la ejecución y desarrollo de los programas especiales escolarizados y no escolarizados</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Diseñar y proponer sistemas de evaluación curricular orientados al mejoramiento del servicio educativo</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Promover y coordinar acciones educativas relacionadas con la Educación Intercultural Bilingüe</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Coordinar con la Dirección Regional de Educación, las acciones para la adecuación y aplicación de los contenidos curriculares y programas educativos, acorde con las características de la UGEL Andahuaylas</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Programar y coordinar la participación de los sectores público, privado, comunal y estudiantil en acciones relacionadas con la cultura, deporte y recreación</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Orientar y brindar asesoramiento técnico en acciones de carácter educativo, cultural, deportivo y recreacional</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Programar, coordinar y realizar acciones de capacitación y actualización docente</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Dirigir, supervisar y garantizar el desarrollo de las actividades educativas, culturales, deportivas y recreacionales</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Coordinar con la Dirección Regional de Educación, el desarrollo de acciones de carácter educativo, cultural, deportivo y recreacional</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Mantener relaciones con las instituciones públicas descentralizadas que desarrollen actividades afines con la Unidad de Gestión Educativa Local de Andahuaylas</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Orientar y asesorar la adecuada aplicación de las normas y disposiciones técnica-pedagógicas</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Propiciar y fomentar el desarrollo de organizaciones estudiantiles de carácter educativo, cultural y artístico</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Evaluar, controlar e informar sobre el avance del Plan Operativo Institucional de la Dirección a su cargo</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Proyectar resoluciones inherentes al Área de Gestión Pedagógica</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Participar en reuniones del Consejo Participativo de Educación (COPAED) de la UGEL-Andahuaylas</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Revisar y firmar los informes y demás documentos que se elaboran en el Área de Gestión Pedagógica</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Asumir las demás funciones afines al cargo que le delegue el Director de la Unidad de Gestión Educativa Local de Andahuaylas</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Acompañar en las acciones de asesoramiento, monitoreo y supervisión a centros y programas educativos</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Promover reuniones de coordinación y planificación de las acciones cumplidas</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Evaluar los resultados de la evaluación censal (logros de aprendizaje)</li>
                            <li className='Edu-manage-info-list-item-not-visible'>Propiciar los proyectos innovadores</li>
                        </ul>
                    </div>
                    <div className="Edu-manage-item-card-container">
                        <figure className="Edu-manage-item-card-img-container">
                            <img className="Edu-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Edu-manage-item-card-description-container">
                            <h4 className="Edu-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Edu-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Edu-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='Edu-manage-item-info-container'>
        <h3 className='Edu-manage-subtitle'>Áreas de Gestión Pedagogica</h3>
        <div className='Edu-manage-buttoms-container'>
            <NavLink to='/AREASGESTION/GESTIONPEDAGOGICA/INICIAL' className='Edu-management-buttom-link-container-inicial'>
                AGP - INICIAL
            </NavLink>
            <a className='Edu-management-buttom-link-container-primaria'>
                AGP - PRIMARIA
            </a>
            <a className='Edu-management-buttom-link-container-secundaria'>
                SECUNDARIA
            </a>
            <a className='Edu-management-buttom-link-container-tecnologico'>
                CENTRO DE RECURSOS TECNOLÓGICOS
            </a>
            <a className='Edu-management-buttom-link-container-otic'>
                OTIC - DITE
            </a>
            <a className='Edu-management-buttom-link-container-alternativa'>
                EDUCACIÓN BÁSICA ALTERNATIVA
            </a>
            <a className='Edu-management-buttom-link-container-intercultural'>
                EDUCACIÓN BILINÜE INTERCULTURAL
            </a>
        </div>
        </div>
        <div className='Edu-manage-item-info-container'>
        <h3 className='Edu-manage-subtitle'>Educación Básica Regular</h3>
        <div className='Edu-manage-status-container'>
            <div className='Edu-manage-status-item-v' id='inicial'>
                <p className='Edu-manage-status-item-title'>INICIAL</p>
            </div>
            <div className='Edu-manage-status-item-p' id='primaria'>
                <p className='Edu-manage-status-item-title'>PRIMARIA</p>
            </div>
            <div className='Edu-manage-status-item-c' id='secundaria'>
                <p className='Edu-manage-status-item-title'>SECUNDARIA</p>
            </div>             
        </div>
        <div className='Edu-manage-stutus-info-conatiner' id='containerInfo'>
        </div>
        </div>
        <div className='Edu-manage-item-info-container'>
        <h3 className='Edu-manage-subtitle'>Educación Básica Alternativa</h3>
        <p className='Edu-manage-info-description'>
            Jerárquicamente depende del Director del Área de Gestión Pedagógica.
            Sus funciones específicas son:
        </p>
        <ul className='Edu-manage-info-list-container'>
            <li className='Edu-manage-info-list-item'>Planificar, programar, orientar, ejecutar y evaluar las acciones técnico pedagógicas, desarrollar planes y programas, aplicar métodos y técnicas de aprendizaje</li>
            <li className='Edu-manage-info-list-item'>Organizar mediante convocatorias en su ámbito las acciones de alfabetización que se desarrollan en los Centros de Educación Básica Alternativa seleccionados como experimentales y en los Círculos de Alfabetización</li>
            <li className='Edu-manage-info-list-item'>Coordinar con los centros y programas de educación de jóvenes y adultos y con la Dirección Regional de Educación, las medidas que permitan mejorar su funcionamiento y su conversión a CEBA</li>
            <li className='Edu-manage-info-list-item'>Promover, coordinar y organizar la recreación de Programas No Escolarizados, principalmente en las zonas urbano-marginales</li>
            <li className='Edu-manage-info-list-item'>Realizar acciones de investigación y sistematización de experiencias que contribuyan al perfeccionamiento de planes curriculares y a la creación de una tecnología educativa acorde a la realidad de la UGEL Andahuaylas</li>
            <li className='Edu-manage-info-list-item'>Programar, coordinar y ejecutar las acciones de supervisión y monitoreo a las Instituciones Educativas de Educación Alternativa</li>
            <li className='Edu-manage-info-list-item'>Participar como coordinador y expositor en eventos de capacitación docente</li>
            <li className='Edu-manage-info-list-item'>Elaborar y formular informes técnico-pedagógicos de apertura y ampliación de las Instituciones Educativas de Gestión Pública, privadas o por convenio</li>
        </ul>
        </div>
        <div className='Edu-manage-item-info-container'>
        <h3 className='Edu-manage-subtitle'>Educación Básica Especial</h3>
        <p className='Edu-manage-info-description'>
            Jerárquicamente depende del Director del Área de Gestión Pedagógica.
            Sus funciones específicas son:
        </p>
        <ul className='Edu-manage-info-list-container'>
            <li className='Edu-manage-info-list-item'>Planificar, monitorear, supervisar, evaluar, asesorar y efectuar el seguimiento de aspectos técnico-pedagógicos y la aplicación del currículo en la modalidad, de acuerdo a las características y necesidades de las Instituciones Educativas Especiales</li>
            <li className='Edu-manage-info-list-item'>Coordinar, asesorar, y apoyar acciones en diferentes tipos de excepcionalidad, deficiencia auditiva y/o problemas de lenguaje, retardo mental, ceguera y visión sub–normal, desajuste de conducta social, impedimentos físicos y facultades sobresalientes</li>
            <li className='Edu-manage-info-list-item'>Buscar la coordinación permanente con los padres de familia para integrar a las acciones de tratamiento especial</li>
            <li className='Edu-manage-info-list-item'>Velar por el fomento del talento y la superdotación en las Instituciones Educativas de EBE a través del enriquecimiento curricular</li>
            <li className='Edu-manage-info-list-item'>Promover la creación y funcionamiento de programas no escolarizados y/o módulos para el desarrollo de habilidades superiores</li>
            <li className='Edu-manage-info-list-item'>Participar en la formulación del Plan Operativo del Área Pedagógica</li>
            <li className='Edu-manage-info-list-item'>Orientar y capacitar a la familia y a la comunidad para su colaboración en la educación del Excepcional</li>
            <li className='Edu-manage-info-list-item'>Participar como coordinador y expositor de capacitación docente</li>
            <li className='Edu-manage-info-list-item'>Difundir la nueva propuesta metodológica y la Visión Integracionista</li>
            <li className='Edu-manage-info-list-item'>Realizar otras funciones de su competencia que le encargue el jefe del Área</li>
        </ul>
        </div>
        <div className='Edu-manage-item-info-container'>
        <h3 className='Edu-manage-subtitle'>Educación Técnica Productiva</h3>
        <p className='Edu-manage-info-description'>
            Jerárquicamente depende del Director del Área de Gestión Pedagógica.
            Sus funciones específicas son:
        </p>
        <ul className='Edu-manage-info-list-container'>
            <li className='Edu-manage-info-list-item'>Planificar, monitorear, supervisar, evaluar, asesorar y efectuar el seguimiento de aspectos técnico-pedagógicos y la aplicación del currículo en la modalidad, de acuerdo a las características y necesidades de las Instituciones Educativas Especiales</li>
            <li className='Edu-manage-info-list-item'>Coordinar, asesorar, y apoyar acciones en diferentes tipos de excepcionalidad, deficiencia auditiva y/o problemas de lenguaje, retardo mental, ceguera y visión sub–normal, desajuste de conducta social, impedimentos físicos y facultades sobresalientes</li>
            <li className='Edu-manage-info-list-item'>Buscar la coordinación permanente con los padres de familia para integrar a las acciones de tratamiento especial</li>
            <li className='Edu-manage-info-list-item'>Velar por el fomento del talento y la superdotación en las Instituciones Educativas de EBE a través del enriquecimiento curricular</li>
            <li className='Edu-manage-info-list-item'>Promover la creación y funcionamiento de programas no escolarizados y/o módulos para el desarrollo de habilidades superiores</li>
            <li className='Edu-manage-info-list-item'>Participar en la formulación del Plan Operativo del Área Pedagógica</li>
            <li className='Edu-manage-info-list-item'>Orientar y capacitar a la familia y a la comunidad para su colaboración en la educación del Excepcional</li>
            <li className='Edu-manage-info-list-item'>Participar como coordinador y expositor de capacitación docente</li>
            <li className='Edu-manage-info-list-item'>Difundir la nueva propuesta metodológica y la Visión Integracionista</li>
            <li className='Edu-manage-info-list-item'>Realizar otras funciones de su competencia que le encargue el jefe del Área</li>
            <li className='Edu-manage-info-list-item'></li>
        </ul>
        </div>
        <div className='Edu-manage-item-info-container'>
        <h3 className='Edu-manage-subtitle'>Educación Escolar, cultura y deporte</h3>
        <p className='Edu-manage-info-description'>
            Jerárquicamente depende del Director del Área de Gestión Pedagógica.
            Sus funciones específicas son:
        </p>
        <ul className='Edu-manage-info-list-container'>
            <li className='Edu-manage-info-list-item'>Formular y proponer la política, objetivos y estrategias para el desarrollo de la promoción escolar, la cultura y el deporte en todos los niveles y modalidades del Sistema Educativo, así como también la promoción y la divulgación científica y defensa del patrimonio cultural de la provincia</li>
            <li className='Edu-manage-info-list-item'>Normar y orientar las actividades y programas de promoción escolar, gestión cultural y sistemas deportivos escolares</li>
            <li className='Edu-manage-info-list-item'>Gestionar proyectos de cooperación internacional para la mayor calidad del desarrollo y consolidación de las actividades y programas de cultura y deporte escolar</li>
            <li className='Edu-manage-info-list-item'>Promover el aprendizaje, práctica e identificación con las manifestaciones culturales locales, regionales, nacionales e internacionales, así como el conocimiento y práctica del deporte y la recreación en sus diferentes modalidades</li>
            <li className='Edu-manage-info-list-item'>Planificar, organizar, monitorear y evaluar concursos, festivales, campeonatos, juegos deportivos, juegos florales, olimpiadas de actividades culturales, artísticas, científicas, tecnológicas, deportivas y recreativas</li>
            <li className='Edu-manage-info-list-item'>Establecer convenios y auspicios a nivel nacional e internacional para la promoción escolar, la gestión cultural y el desarrollo del deporte</li>
            <li className='Edu-manage-info-list-item'>Concertar acciones multisectoriales con organismos del Estado, Gobiernos Regionales, Gobiernos Locales; así como empresas, organizaciones no gubernamentales, gremios e instituciones en beneficio de las actividades de los estudiantes</li>
            <li className='Edu-manage-info-list-item'>Promover entre los estudiantes el conocimiento, defensa y conservación del Patrimonio Cultural de la Provincia</li>
            <li className='Edu-manage-info-list-item'>Diseñar, producir y distribuir material educativo de cultura y deporte a las Instituciones Educativas y organizaciones de cultura y deporte</li>
            <li className='Edu-manage-info-list-item'>Formular, planificar, organizar, supervisar y evaluar la práctica deportiva, las formas gestoras de la cultura y promocionales de la recreación.</li>
        </ul>
        </div>
        <div className='Edu-manage-item-info-container'>
        <h3 className='Edu-manage-subtitle'>Innovacion Pedagógica</h3>
        <p className='Edu-manage-info-description'>
            Jerárquicamente depende del Director del Área de Gestión Pedagógica.
            Sus funciones específicas son:
        </p>
        <ul className='Edu-manage-info-list-container'>
            <li className='Edu-manage-info-list-item'>Desarrollar, ejecutar y supervisar con fines educativos una red provincial, moderna, confiable; con acceso a todas las fuentes de información y capaz de transmitir contenidos de multimedia a efectos de mejorar la calidad educativa en las zonas rurales y urbanas</li>
            <li className='Edu-manage-info-list-item'>Garantizar la conectividad de los centros educativos con criterio de equidad y facilitar las prestaciones técnicas en función de las necesidades educativas</li>
            <li className='Edu-manage-info-list-item'>Articular y coordinar acciones intersectoriales y con otros organismos que permitan ampliar la cobertura de los servicios educativos utilizando tecnologías de información, comunicación y televisión educativa</li>
            <li className='Edu-manage-info-list-item'>Establecer lineamientos para la implementación de la plataforma tecnológica en las instituciones educativas, en lo que corresponde a las aulas de innovación u otros ambientes en los que debe impulsarse la integración de las TIC</li>
            <li className='Edu-manage-info-list-item'>Desarrollar acciones de Educación a Distancia combinando estrategias pedagógicas y tecnologías multimedia integradas a los procesos educativos de los estudiantes</li>
        </ul>
        </div>

    </section> 
        </>
    )
}
export default EducationalManagement;