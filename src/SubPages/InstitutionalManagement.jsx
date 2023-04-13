import employee from './../assets/icons/employee.svg';
import personBusiness from './../assets/photos/personBusiness.png';
import './../styles/InstitutionalManagement.css';
import background from './../assets/backgrounds/background1.svg';

const InstitutionalManagement = () => {
    return(<>
    <section className="Insti-manage-container">
        <div className="Insti-manage-front-container">
            <figure className="Insti-manage-front-image-container">
                <img src='https://i.postimg.cc/9fStMk8t/Slider5.jpg' alt="image" className="Insti-manage-front-img"/>
            </figure>
            <h1 className="Insti-manage-front-title">Gestión Institucional</h1>
            <div className='Insti-manage-background-container'>
                <img className='Insti-manage-background' src={background} alt="background" />
            </div>
        </div>
        <div className='Insti-manage-info-container'>
                <div className='Insti-manage-item'>
                    <div className='Insti-manage-item-info-container'>
                        <p className='Insti-manage-info-description'>
                        El Área de Gestión Institucional, es el responsable de brindar apoyo técnico en el Área de Planificación, Presupuesto, Finanzas, Racionalización, Estadística, Infraestructura, y a las Instituciones Educativas dentro del ámbito de su jurisdicción.
                        El Jefe de Área es nominado por el Director y depende directamente de Él. 
                        Estructura orgánica:
                        </p>
                        <ul className='Insti-manage-info-list-container'>
                            <li className='Insti-manage-info-list-item'>Secretaría</li>
                            <li className='Insti-manage-info-list-item'>Finanzas/Presupuesto</li>
                            <li className='Insti-manage-info-list-item'>Planificación</li>
                            <li className='Insti-manage-info-list-item'>Estadística</li>
                            <li className='Insti-manage-info-list-item'>APAFA-CONEI</li>
                        </ul>
                        <p className='Insti-manage-info-description'>Sus funciones específicas son:</p>
                        <ul className='Insti-manage-info-list-container'>
                            <li className='Insti-manage-info-list-item'>Orientar y supervisar la aplicación de la política y normatividad educativa nacional y regional, en materia de gestión institucional, en los Centros y Programas educativos de su ámbito jurisdiccional</li>
                            <label htmlFor="" className='Insti-manage-info-list-item-more' id='showMore1'>Ver mas</label>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Elaborar el Plan estratégico de la Unidad de Gestión Educativa Local de Andahuaylas y otros instrumentos de gestión institucional que orienten el desarrollo integral de la educación fomentando su calidad y equidad</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Asesorar y supervisar a los Centros y Programas educativos en la elaboración y aplicación de los instrumentos de gestión institucional. (PEI.PAT,RI)</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Elaborar estudios técnicos para autorizar la creación, modificación, traslado, clausura, receso y reapertura de Centros y Programas educativos públicos y privados, en base a la normatividad vigente</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Diseñar, organizar, ejecutar y supervisar programas de actualización y capacitación continua, en gestión institucional, del personal Directivo, Profesional y Técnico que cumple funciones es esta área</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Evaluar y medir la eficacia de la gestión institucional y participar en las acciones de evaluación y mejoramiento de la gestión de los Centros y Programas educativos</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Elaborar proyectos de la modernización de la gestión y equipamiento para captar recursos de la cooperación técnica y financiera a nivel local, regional, nacional e internacional</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Orientar y asesorar la elaboración, ejecución y evaluación de los planes institucionales y los planes de trabajo anual de las II.EE. y Programas educativos a su cargo</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Elaborar, ejecutar y evaluar el presupuesto anual de la Unidad de Gestión Educativa y realizar sus modificaciones como Unidad Ejecutora, sobre la base de objetivos y metas regionales y locales, con la participación de los Centros y Programas educativos</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Identificar la necesidad real de plazas docentes y administrativas en función a la demanda de la población escolar y sustentarla ante el órgano regional competente</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Racionalizar en forma efectiva los recursos materiales, físicos, financieros y de personal, utilizados en la prestación de servicios educativos a fin de lograr mayor equidad en su distribución</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Elaborar las estadísticas educativas y construir indicadores que defínanla calidad y pertinencia del servicio, utilizando los modernos sistemas de información</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Dotar progresivamente la tecnología y cultura digital a las diversas dependencias de la Sede Institucional; así como a las II.EE. y Programas educativos de su ámbito, a fin de mejorar su desempeño institucional</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Identificar y sistematizar las necesidades de infraestructura, mobiliario y equipamiento de las II.EE. y Programas educativos, especialmente en las zonas más desatendidas y solicitar su atención a la Dirección Regional de Educación</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Mantener actualizado el margesí de bienes inmuebles de su ámbito territorial, efectuando el saneamiento físico legal de aquellos que lo requieran, en coordinación con la Dirección Regional de Educación de Apurímac y el órgano competente de la Sede Central del Ministerio de Educación</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Elaborar y difundir normas técnicas para el adecuado mantenimiento de los locales escolares, en coordinación con la comunidad, la Dirección Regional de Educación de Apurímac y el órgano competente de la Sede Central de Ministerio de Educación</li>
                            <li className='Insti-manage-info-list-item-not-visible-1'>Supervisar y dar mantenimiento a las instalaciones de las II.EE. y comunicar, antes de finalizar el primer semestre de cada año a la Dirección Regional de Educación de Apurímac el estado de la infraestructura</li>
                        </ul>

                    </div>
                    <div className="Insti-manage-item-card-container">
                        <figure className="Insti-manage-item-card-img-container">
                            <img className="Insti-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Insti-manage-item-card-description-container">
                            <h4 className="Insti-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Insti-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Insti-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Insti-manage-item'>
                    <div className='Insti-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Finanzas - Presupuesto</h3>
                        <p className='Insti-manage-info-description'>
                        Jerárquicamente depende del Director del Área de Gestión Institucional.
                        Sus funciones específicas son:
                        </p>
                        <ul className='Insti-manage-info-list-container'>
                            <li className='Insti-manage-info-list-item'>Participar y coordinar con el Área de Administración en la formulación del anteproyecto del presupuesto de la Unidad de Gestión Educativa y establecer metas correspondientes</li>
                            <li className='Insti-manage-info-list-item'>Formular y evaluar el Plan Institucional de la Unidad de Gestión Educativa Local de Andahuaylas</li>
                            <li className='Insti-manage-info-list-item'>Revisar y emitir informes técnicos en las propuestas de modificaciones presupuestarias, planes de trabajo y otros documentos de planeamiento educativo</li>
                            <li className='Insti-manage-info-list-item'>Formular y asesorar a los centros y programas educativos en la elaboración y evaluación del Plan Estratégico Institucional (PEI) y Plan Operativo Institucional (POI) de la UGEL Andahuaylas</li>
                            <li className='Insti-manage-info-list-item'>Emitir opinión técnica en materia de planificación para la apertura, fusión, supresión y ampliación de centros y programas educativos</li>
                            <label htmlFor="" className='Insti-manage-info-list-item-more' id='showMore2'>Ver mas</label>
                            <li className='Insti-manage-info-list-item-not-visible-2'>Efectuar estudios de oferta y demanda educativa, mercado ocupacional y otros, a nivel provincial</li>
                            <li className='Insti-manage-info-list-item-not-visible-2'>Analizar y evaluar periódicamente la ejecución de los planes, programas, proyectos y las actividades de la Unidad de Gestión Educativa Local de Andahuaylas</li>
                            <li className='Insti-manage-info-list-item-not-visible-2'>Emitir opinión y asesoramiento técnico en asuntos relacionados con su especialización</li>
                            <li className='Insti-manage-info-list-item-not-visible-2'>Formular el diagnóstico educativo y participar en acciones de investigación sobre planeamiento educativo</li>
                            <li className='Insti-manage-info-list-item-not-visible-2'>Formular y evaluar proyectos de inversión en construcción y mantenimiento de la Infraestructura de las II.EE</li>
                        </ul>
                    </div>
                    <div className="Insti-manage-item-card-container">
                        <figure className="Insti-manage-item-card-img-container">
                            <img className="Insti-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Insti-manage-item-card-description-container">
                            <h4 className="Insti-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Insti-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Insti-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Insti-manage-item'>
                    <div className='Insti-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Planificación</h3>
                        <p className='Insti-manage-info-description'>
                        Jerárquicamente depende del Director del Área de Gestión Institucional.
                        Sus funciones específicas son:
                        </p>
                        <ul className='Insti-manage-info-list-container'>
                            <li className='Insti-manage-info-list-item'>Dirige, supervisa y evalúa el desarrollo de programas y/o proyectos de racionalización</li>
                            <li className='Insti-manage-info-list-item'>Participa en el planeamiento y organización de procesos de racionalización y en la elaboración de políticas de la misma</li>
                            <li className='Insti-manage-info-list-item'>Asesora y evacua informes técnicos especializados de estudios y/o proyectos de racionalización</li>
                            <li className='Insti-manage-info-list-item'>Estudia, propone y realiza acciones de: estructuras, funciones, cargos, procedimientos y métodos de trabajo de acuerdo a normas del sistema</li>
                            <li className='Insti-manage-info-list-item'>Realiza estudios y opina sobre racionalización del potencial humano, recursos e infraestructura, así como la distribución racional de materiales educativos, de los centros y programas educativos en base al número de alumnos y secciones (personal directivo, docentes y administrativo)</li>
                            <label htmlFor="" className='Insti-manage-info-list-item-more' id='showMore3'>Ver mas</label>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Formula y difunde: manuales, guías, cartillas para orientar al usuario de los servicios que brinda la institución</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Programa y participa en el desarrollo de eventos de capacitación del personal directivo, jerárquico y administrativo que organiza la Unidad de Gestión Educativa Local de Andahuaylas</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Mantiene actualizado el Sistema de Racionalización (SIRA)</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Emite opinión técnica, brinda asesoramiento, absuelve consultas y proporciona información en asuntos de su especialidad</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Integra comisiones sobre asuntos especializados de racionalización</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Desempeña las demás funciones que le asigne</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Realizar estudios y opina sobre acciones de desburocratización, delegación de funciones y descentralización administrativa</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Realizar el estudio sobre distribución de plazas de incremento de personal directivo, docentes y administrativos de las II.EE. y programas educativos estatales</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Realizar estudios sobre factibilidad de creación de centros educativos Estatales priorizando en comunidades con mayor crecimiento de población escolar, distancia a la capital de distrito y de múltiples necesidades</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Realizar estudio de expedientes sobre factibilidad de creación y autorización de funcionamiento de II.EE. de Gestión Privada. Así mismo opina sobre solicitudes de Ampliación de servicio, Receso temporal, Reapertura, Cambio de local, Ratificación y Cambio de Director, Cambio de nombre, transferencia de promotor, etc. de II.EE. Privadas</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Evaluar la organización y funcionamiento de las Instituciones Educativas Estatales y Privadas, y proponer soluciones</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Realizar la programación de racionalización de material educativo para los centros y programas educativos, indicando la cantidad de libretas, Actas, Nóminas, Fichas de Matrícula, Certificados de Estudios e insumos (tizas, escobas, baldes, etc.) teniendo en cuenta la cantidad de alumnos y número de secciones</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Realizar la programación para la distribución de Módulos Escolares, Mobiliario Escolar y Programa de Apoyo Social (alimentos, vestido, calzados, etc.), en coordinación con Área de Administración</li>
                            <li className='Insti-manage-info-list-item-not-visible-3'>Elabora y actualiza en coordinación con los órganos de la institución los siguientes documentos: Manual de Organización y Funciones (MOF), Manual de Organización y Funciones (MOF), Manual de Procedimientos Administrativos, Texto Único de Procedimientos Administrativos (TUPA), Reglamento de Organización y Funciones (ROF) de II.EE. y programas educativos</li>
                        </ul>
                    </div>
                    <div className="Insti-manage-item-card-container">
                        <figure className="Insti-manage-item-card-img-container">
                            <img className="Insti-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Insti-manage-item-card-description-container">
                            <h4 className="Insti-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Insti-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Insti-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Insti-manage-item'>
                    <div className='Insti-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Estadística</h3>
                        <p className='Insti-manage-info-description'>
                        Jerárquicamente depende del Director del Área de Gestión Institucional.
                        Sus funciones específicas son:
                        </p>
                        <ul className='Insti-manage-info-list-container'>
                            <li className='Insti-manage-info-list-item'>Procesar y consolidar el Padrón de las II.EE. y Programas Educativos de la Unidad de Gestión Educativa Local de Andahuaylas por niveles, modalidades y formas educativas, manteniendo actualizado el Sistema Integral de Estadística del Ministerio de Educación (SIEMED)</li>
                            <li className='Insti-manage-info-list-item'>Organizar y coordinar la recopilación de datos, análisis y elaboración de cuadros estadísticos</li>
                            <li className='Insti-manage-info-list-item'>Elaborar, actualizar, procesar, consolidar y difundir las estadísticas en forma continua</li>
                            <li className='Insti-manage-info-list-item'>Elaborar el Boletín de Información Estadística de la UGEL Andahuaylas</li>
                            <li className='Insti-manage-info-list-item'>Participar en la elaboración y evaluación de las metas educacionales</li>
                            <label htmlFor="" className='Insti-manage-info-list-item-more' id='showMore4'>Ver mas</label>
                            <li className='Insti-manage-info-list-item-not-visible-4'>Realizar estudios estadísticos para la toma de decisiones</li>
                            <li className='Insti-manage-info-list-item-not-visible-4'>Preparar informes y demás documentos e instrumentos referidos al área de su competencia</li>
                            <li className='Insti-manage-info-list-item-not-visible-4'>Emitir opinión técnica y participar en el cálculo y evaluación de las metas educacionales</li>
                            <li className='Insti-manage-info-list-item-not-visible-4'>Colaborar en los procesos de formulación y evaluación de las metas educacionales</li>
                            <li className='Insti-manage-info-list-item-not-visible-4'>Realizar en coordinación con el Ministerio de Educación, acciones de censo escolar y censo de talla a nivel de la jurisdicción</li>
                        </ul>
                    </div>
                    <div className="Insti-manage-item-card-container">
                        <figure className="Insti-manage-item-card-img-container">
                            <img className="Insti-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Insti-manage-item-card-description-container">
                            <h4 className="Insti-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Insti-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Insti-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Insti-manage-item'>
                    <div className='Insti-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Infraestructura</h3>
                        <p className='Insti-manage-info-description'>
                        Jerárquicamente depende del Director del Área de Gestión Institucional.
                        Sus funciones específicas son:
                        </p>
                        <ul className='Insti-manage-info-list-container'>
                            <li className='Insti-manage-info-list-item'>Realizar estudios para determinar las necesidades de infraestructura y equipamiento educativo de la jurisdicción de la UGEL Andahuaylas</li>
                            <li className='Insti-manage-info-list-item'>Analizar y determinar acciones que permitan definir las prioridades de atención de infraestructura de acuerdo al estado que presenten los locales de las Instituciones Educativas</li>
                            <li className='Insti-manage-info-list-item'>Elaborar la Ficha Técnica de Infraestructura que tendrán cada una de las Instituciones Educativas de su jurisdicción</li>
                            <li className='Insti-manage-info-list-item'>Gestionar ante el Gobierno Regional las solicitudes presentadas por las Instituciones Educativas para el mejoramiento de la planta física o dotación de mobiliario</li>
                            <label htmlFor="" className='Insti-manage-info-list-item-more' id='showMore5'>Ver mas</label>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Supervisar los programas de mantenimiento y construcción de las Instituciones Educativas de su jurisdicción</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Proponer y elaborar las especificaciones técnicas que demanda la realidad geográfica de su localidad en los proyectos de infraestructura educativa y verificar su cumplimiento</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Realizar inspecciones en los locales escolares para verificar el estado físico de la infraestructura y equipamiento, así como su correcto uso y funcionamiento</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Coordinar y verificar las tasaciones de los bienes inmuebles de uso educativo de la jurisdicción y dar su conformidad</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Mantener actualizado el margesí de bienes inmuebles en el área jurisdiccional, en coordinación con los órganos del Ministerio de Educación</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Mantener actualizada la información sobre costos unitarios de mano de obra, materiales y equipamiento de obras</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Promover y orientar la captación de bienes inmuebles para uso educativo y apoyar la gestión de donaciones y adjudicaciones</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Emitir opinión técnica y proporcionar información y asesoramiento en aspectos de su competencia</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Realizar otras funciones afines al cargo que le encargue el Jefe del Área de Gestión Administrativa, Infraestructura y Equipamiento</li>
                            <li className='Insti-manage-info-list-item-not-visible-5'>Elaborar y formular informes técnicos para los procedimientos de apertura y ampliación, traslados de local, de las Instituciones Educativas de Gestión Pública, privadas o por Convenio</li>
                        </ul>
                    </div>
                    <div className="Insti-manage-item-card-container">
                        <figure className="Insti-manage-item-card-img-container">
                            <img className="Insti-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Insti-manage-item-card-description-container">
                            <h4 className="Insti-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Insti-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Insti-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Insti-manage-item'>
                    <div className='Insti-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>APAFA - CONEI</h3>
                        <p className='Insti-manage-info-description'>
                        Las Asociaciones de Padres de Familia (APAFA), en nuestro país, se encuentran reguladas por la Ley Nro. 28628 y se hallan reglamentadas por el D.S. Nro. 004-2006-ED, cuerpo normativo que desde entonces les otorga rango de ley a su existencia.
                        Cabe recordar que en años recientes, su existencia se hallaba reglamentada por sucesivos Decretos Supremos (018-1988-ED; 020-1999-ED ; 016-2001-ED ; 018-2004-ED), los cuales creaban y modificaban constantemente aspectos sustanciales en la vida institucional de la APAFA, causando por tanto inestabilidad y discontinuidad en su funcionamiento.
                        Según el Decreto Supremo Nro. 004-2006-ED, Artículo 10º, la Asociación ejerce directamente las siguientes atribuciones:
                        </p>
                        <ul className='Insti-manage-info-list-container'>
                            <li className='Insti-manage-info-list-item'>Participar en el proceso educativo de los hijos de sus asociados, buscando la inclusión o incorporación de las personas con discapacidad, en igualdad de oportunidades</li>
                            <li className='Insti-manage-info-list-item'>Colaborar en las actividades educativas que ejecuta la Institución Educativa, fomentando las buenas relaciones humanas entre los integrantes de la comunidad educativa promoviendo un clima institucional favorable para el aprendizaje</li>
                            <li className='Insti-manage-info-list-item'>Vigilar la distribución oportuna y el uso adecuado del material educativo que utilizan los estudiantes y denunciar ante las autoridades educativas la venta o sustracción de los libros o textos escolares oficiales de distribución gratuita</li>
                            <li className='Insti-manage-info-list-item'>Velar por la mejora de los servicios, infraestructura, equipamiento, mobiliario escolar y materiales, tanto educativos como lúdicos</li>
                            <li className='Insti-manage-info-list-item'>Cooperar con la Institución Educativa para salvaguardar la seguridad e integridad física de los estudiantes</li>
                            <li className='Insti-manage-info-list-item'>Proponer y coordinar con el Director de la Institución Educativa, mecanismos y estrategias que contribuyan a evitar la deserción y la inasistencia de los estudiantes</li>
                            <li className='Insti-manage-info-list-item'>Gestionar y/o colaborar con la implementación de comedores escolares, programas de apoyo alimentario, de salud física y mental, de deportes, recreación, orientación vocacional, visitas guiadas de estudio y otros servicios que contribuyan al bienestar de los estudiantes</li>
                            <label htmlFor="" className='Insti-manage-info-list-item-more' id='showMore6'>Ver mas</label>
                            <li className='Insti-manage-info-list-item-not-visible-6'>Recibir de parte del Director de la Institución Educativa, información sobre el manejo administrativo, financiero y económico de la Institución Educativa</li>
                            <li className='Insti-manage-info-list-item-not-visible-6'>Denunciar ante los órganos competentes las irregularidades que se produzcan en las Instituciones Educativas</li>
                            <li className='Insti-manage-info-list-item-not-visible-6'>Participar, a través de veedores elegidos por la Asamblea General, en los procesos de adquisición de bienes y servicios que se realice en la Institución Educativa y en los comités especiales que se constituyan en las Unidades de Gestión Educativa Local y las Direcciones Regionales de Educación, en el marco de la Ley de Contrataciones y Adquisiciones del Estado y demás normas vigentes</li>
                            <li className='Insti-manage-info-list-item-not-visible-6'>Proponer estímulos para los estudiantes, personal docente y administrativo que logren un desempeño destacado en la Institución Educativa</li>
                            <li className='Insti-manage-info-list-item-not-visible-6'>Brindar información y rendir cuenta documentada a los asociados</li>
                            <li className='Insti-manage-info-list-item-not-visible-6'>Participar, a través de sus representantes, en el Consejo Educativo Institucional</li>
                            <li className='Insti-manage-info-list-item-not-visible-6'>Organizarse en instituciones de grado superior para formar parte de los órganos de participación, concertación y vigilancia ciudadana, previstos en la Ley General de Educación, eligiendo a sus representantes ante el Consejo Participativo Local de Educación y el Consejo Participativo Regional de Educación, de acuerdo con las disposiciones específicas que dicte el Ministerio de Educación</li>                         


                        </ul>
                    </div>
                </div>
            </div>   
        
    </section>
    </>)
}
export default InstitutionalManagement;

function readyIM(){
    const showMore1 = window.document.getElementById('showMore1');
    const ListItems = [...document.querySelectorAll('.Insti-manage-info-list-item-not-visible-1')];

    const showMore2 = window.document.getElementById('showMore2');
    const ListItems2 = [...document.querySelectorAll('.Insti-manage-info-list-item-not-visible-2')];

    const showMore3 = window.document.getElementById('showMore3');
    const ListItems3 = [...document.querySelectorAll('.Insti-manage-info-list-item-not-visible-3')];

    const showMore4 = window.document.getElementById('showMore4');
    const ListItems4 = [...document.querySelectorAll('.Insti-manage-info-list-item-not-visible-4')];

    const showMore5 = window.document.getElementById('showMore5');
    const ListItems5 = [...document.querySelectorAll('.Insti-manage-info-list-item-not-visible-5')];
    
    const showMore6 = window.document.getElementById('showMore6');
    const ListItems6 = [...document.querySelectorAll('.Insti-manage-info-list-item-not-visible-6')];

    let click = 1;
    const ShowList = () => {
        ListItems.forEach(element => {
            element.classList.toggle('Insti-manage-info-list-item', click % 2 !== 0 );
        });
        click++;
    }
    showMore1.addEventListener('click', ShowList);

    let click2 = 1;
    const ShowList2 = () => {
        ListItems2.forEach(element => {
            element.classList.toggle('Insti-manage-info-list-item', click2 % 2 !== 0 );
        });
        click2++;
    }
    showMore2.addEventListener('click', ShowList2);

    let click3 = 1;
    const ShowList3 = () => {
        ListItems3.forEach(element => {
            element.classList.toggle('Insti-manage-info-list-item', click3 % 2 !== 0 );
        });
        click3++;
    }
    showMore3.addEventListener('click', ShowList3);

    let click4 = 1;
    const ShowList4 = () => {
        ListItems4.forEach(element => {
            element.classList.toggle('Insti-manage-info-list-item', click4 % 2 !== 0 );
        });
        click4++;
    }
    showMore4.addEventListener('click', ShowList4);
    
    let click5 = 1;
    const ShowList5 = () => {
        ListItems5.forEach(element => {
            element.classList.toggle('Insti-manage-info-list-item', click5 % 2 !== 0 );
        });
        click5++;
    }
    showMore5.addEventListener('click', ShowList5);

    let click6 = 1;
    const ShowList6 = () => {
        ListItems6.forEach(element => {
            element.classList.toggle('Insti-manage-info-list-item', click6 % 2 !== 0 );
        });
        click6++;
    }
    showMore6.addEventListener('click', ShowList6);

}

setInterval(isLoaded, 1000);
function isLoaded (){
    if (document.readyState !== 'loading'){
        readyIM();
        clearInterval(isLoaded, 1000); 
    }
}