import './../styles/Institution.css';
import MisionIcon from './../assets/icons/mison.png';
import VisionIcon from './../assets/icons/vision.png';
import pdfIcon from './../assets/icons/pdfIcon.svg';

const Institution = () => {
    return(
        <>
        <section className="Institution-container">
            <div className="Institution-front-container">
                <h1 className="Institution-front-title">INSTITUCION</h1>
            </div>
            <div className='Institution-info-container'>
            <h4 className="Institution-subtitle">¿Quiénes Somos?</h4>
            <p className="Institution-description">
                La Unidad de Gestión Educativa Local de Andahuaylas, es una instancia de ejecución descentralizada del Gobierno Regional de Apurímac con autonomía en el ámbito de su competencia.
                Proporciona el apoyo pedagógico, institucional y administrativo a las Instituciones Educativas de su jurisdicción, para asegurar un servicio de calidad con equidad, en cooperación con los gobiernos locales.
                La UGEL de Andahuaylas es la responsable del logro de la educación, garantiza la calidad y eficiencia de los servicios, supervisa, monitorea y evalúa el cumplimiento de las acciones desarrolladas por las Instituciones Educativas de la jurisdicción y depende de la Dirección Regional de Educación de Apurímac.
            </p>
            <h4 className="Institution-subtitle">Reseña Histórica</h4>
            <p className="Institution-description">
                Por D.S. Nro. 12-86-ED. se crearon las Unidades de Servicios Educativos, como órganos desconcentrados del Ministerio de Educación en sustitución de las Direcciones Zonales de Educación y Supervisiones Educativas, dentro del marco de desburocratización y descentralización de la administración pública, impulsando el desarrollo nacional, reglamentándose por R.M. Nro. 248-87-ED.
                Por Decreto Supremo Nro. 015-2002-ED aprueban el Reglamento de Organización y Funciones de las Direcciones Regionales de Educación y de las Unidades de Gestión Educativa, con lo que la Unidad de Servicios Educativos de Andahuaylas pasa a tener la denominación de Unidad de Gestión Educativa Local de Andahuaylas.
                La Unidad de Gestión Educativa Local de Andahuaylas fue creada mediante la R.M. Nro. 247-87-ED y R.S. Nro. 205-2002-ED. como organismo conductor del servicio educativo en la región, la UGEL Andahuaylas data su presencia desde el año 1987, como tal, anteriormente tuvo otras denominaciones:
            </p>
            <ul className='Institution-description-list-container'>
                 <li className="Institution-description-list-item">Inspección Provincial de Educación</li>
                <li className="Institution-description-list-item">Supervisión Provincial de Educación.</li>
                <li className="Institution-description-list-item">Núcleo Educativo Comunal 02</li>
                <li className="Institution-description-list-item">Unidad de Servicios Educativos</li>
                <li className="Institution-description-list-item">Dirección Sub Regional de Educación Chanka VI</li>
                <li className="Institution-description-list-item">Dirección Sub Regional de Educación Chanka Andahuaylas</li>
                <li className="Institution-description-list-item">Unidad de Gestión Educativa Local de Andahuaylas</li>
            </ul>
           <p className="Institution-description">
                La Dirección de la Unidad de Gestión Educativa Local de Andahuaylas constituye un organismo intermedio entre el Ministerio de Educación y la comunidad educativa, canalizando la organización y funcionamiento educativo de la siguiente manera:
            </p>
            <ul className='Institution-description-list-container'>
                <li className="Institution-description-list-item">Una (01) Unidad Ejecutora: Unidad de Gestión Educativa Local Andahuaylas con autonomía técnica, pedagógica y administrativa</li>
                <li className="Institution-description-list-item">Seis (06) Unidades de Costeo: Andahuaylas, Talavera, San Jerónimo, Andarapa, Huancaray y Pampachiri</li>
                <li className="Institution-description-list-item">Ciento setenta y nueve (179) Instituciones Educativas Iniciales</li>
                <li className="Institution-description-list-item">Doscientos cuatro (204) Instituciones Educativas Primarias</li>
                <li className="Institution-description-list-item">Sesenta y siete (67) Instituciones Educativas Secundarias</li>
                <li className="Institution-description-list-item">Dos (02) Centros Educativos a Distancia</li>
                <li className="Institution-description-list-item">Tres (03) Centros Educación básica Alternativa Primaria de Adultos</li>
                <li className="Institution-description-list-item">Cuatro (04) Centros Educación básica Alternativa Secundaria de Adultos</li>
                <li className="Institution-description-list-item">Cinco (05) Centros Educativos Técnico Productivos (CETPRO)</li>
                <li className="Institution-description-list-item">Un (01) Instituto Superior Pedagógico Público</li>
                <li className="Institution-description-list-item">Un (01) Instituto Superior Tecnológico</li>
                <li className="Institution-description-list-item">Treinta y cuatro (34) Centros Educativos no Estatales de Nivel Inicial, Primaria, Secundaria y Superior</li>
            </ul>
            <p className="Institution-description">
                En el año 1987 se creó la Unidad de Servicios Educativos de Andahuaylas y Chincheros, siendo su primer Director el Profesor Víctor Raúl Siancas Moreano, con lo que se determina la descentralización administrativa, habiendo sido jefes desde entonces:            
            </p>
            <ul className='Institution-description-list-container'>
            <li className="Institution-description-list-item">Víctor Raúl Siancas Moreano</li>
            <li className="Institution-description-list-item">Heraclio Miranda Carrión</li>
            <li className="Institution-description-list-item">Víctor Hercilio Mallma Porras</li>
            <li className="Institution-description-list-item">José Salas Cano</li>
            </ul>
            <p className="Institution-description">
                Al finalizar el año 1992 se da la Ley de Regionalización, disponiéndose la denominación de Dirección Sub Regional de Educación VI Chanka Andahuaylas, habiendo sido sus directores:            
            </p>
            <ul className='Institution-description-list-container'>
            <li className="Institution-description-list-item">Jesús Rivas Puga</li>
            <li className="Institution-description-list-item">Diótrifes Rivera Ccoicca</li>
            <li className="Institution-description-list-item">Isaac César Peralta Vargas</li>
            <li className="Institution-description-list-item">Gerardo Gutiérrez Ludeña</li>
            <li className="Institution-description-list-item">Juan Augurio Palomino Rojas</li>
            <li className="Institution-description-list-item">Pedro Pablo Olivera Aliaga</li>
            <li className="Institution-description-list-item">Paulino Alarcón Vílchez</li>
            <li className="Institution-description-list-item">Erasmo Alarcón Peralta</li>        
            <li className="Institution-description-list-item">Félix Roberto Ochoa Salazar</li>
            <li className="Institution-description-list-item">Lilia Vargas Céspedes</li>          
            </ul>
            <p className="Institution-description">
                Por R.M. Nro. 205-2002-ED, se crearon las Unidades de Gestión Educativa Local, como órganos desconcentrados del Ministerio de Educación, habiendo sido sus directores:       
            </p>
            <ul className='Institution-description-list-container'>
            <li className="Institution-description-list-item">Rubén Alfredo Tello Coronado</li>
            <li className="Institution-description-list-item">Washington Mendoza Ramírez</li>
            <li className="Institution-description-list-item">Liseo Aquilino Truyenque Aréstegui</li>
            <li className="Institution-description-list-item">Rusbita Reynaga Chávez</li>
            <li className="Institution-description-list-item">Wilfredo Siancas Moreano</li>
            <li className="Institution-description-list-item">Jorge Palomino Orosco</li>
            <li className="Institution-description-list-item">José Paulino Puma Pariapaza</li>
            <li className="Institution-description-list-item">Jorge Quintana Campos</li>        
            <li className="Institution-description-list-item">Alejandro Octavio Ibañez Cárdenas</li>
            <li className="Institution-description-list-item">Jaime Caballero Navío</li>          
            <li className="Institution-description-list-item">Oscar Pérez Olivares</li>
            <li className="Institution-description-list-item">Gary Huamán Tarco</li>
            <li className="Institution-description-list-item">Oscar Dante Romaní</li>        
            <li className="Institution-description-list-item">Carlos Fernando Truyenque Cáceres</li>
            <li className="Institution-description-list-item">Alejandro Castillo Torrín</li>    
            </ul>
            <div className='Institution-vision-mision-container'>
                <div className='Institution-item-container'>
                    
                    <figure className='Institution-item-icon-container'>
                        <img className='Institution-item-icon' src={VisionIcon} alt="vision" />
                    </figure>
                    <h4 className="Institution-subtitle-m">Visión</h4>
                    <p className="Institution-description-m">
                        La UGEL de Andahuaylas se proyecta en corto y mediano plazo consolidarse como una institución líder en Gestión Educativa, lo cual esperamos alcanzar con la práctica del buen trato y el trabajo con honestidad y transparencia, capacitando constantemente al personal docente y administrativo.
                        Esperamos lograr que la comunidad local reconozca a la UGEL de Andahuaylas por sus logros, lo cual se cristalizará obteniendo eficientes rendimientos académicos de sus educandos por encima del promedio nacional.
                    </p> 
                </div>
                <div className='Institution-item-container'>
                    
                    <figure className='Institution-item-icon-container'>
                        <img className='Institution-item-icon' src={MisionIcon} alt="vision" />
                    </figure>
                    <h4 className="Institution-subtitle-m">Misión</h4>
                    <p className="Institution-description-v">
                        Garantizar un servicio educativo de calidad en todos los niveles y modalidades, fortaleciendo las capacidades de gestión pedagógica y administrativa, impulsando la cohesión social y promoviendo el aporte de los gobiernos locales e instituciones privadas especializadas para mejorar la calidad del servicio educativo.
                    
                    </p>  
                </div>
              
            </div> 
            
            <h4 className="Institution-subtitle">Organigrama</h4>
            <figure className="Institution-chart-container">
                <img src="https://i.postimg.cc/9fYhKrKF/organigrama.jpg" alt="organigrama" className="Institution-chart" />
            </figure>
            <h4 className="Institution-subtitle">Funciones Generales</h4>
            <p className="Institution-description">
                La Unidad de Gestión Educativa Local, en su jurisdicción territorial comprende 19 distritos de la provincia de Andahuaylas, los cuales son: San Jerónimo, Kaquiabamba, Pacucha, Andarapa, Andahuaylas, Talavera, Santa María de Chicmo, San Antonio de Cachi, Turpo, Huancaray, Villa Chiara, San Miguel de Chaccrampa, Umamarca, Huayana, Pomacocha y Pampachiri, Tumay Huaraca, Pacobamba, José María Arguedas.
                Son funciones de la Unidad de Gestión Educativa Local de Andahuaylas:            
            </p>
            <ul className='Institution-description-list-container'>
            <li className="Institution-description-list-item">Contribuir a la formulación de la política educativa local, regional y nacional</li>
            <li className="Institution-description-list-item">Diseñar, ejecutar y evaluar el Proyecto Educativo de su jurisdicción en concordancia con los Proyectos Educativos Regionales y Nacionales y con el aporte en lo que corresponda, de los gobiernos locales</li>
            <li className="Institution-description-list-item">Regular y Supervisar las actividades y servicios que brindan las instituciones Educativas, preservando su autonomía institucional</li>
            <li className="Institution-description-list-item">Asesorar la gestión pedagógica, institucional y administrativa de las Instituciones Educativas bajo su jurisdicción, fortaleciendo su autonomía institucional</li>
            <li className="Institution-description-list-item">Prestar apoyo administrativo y logístico a las Instituciones Educativas públicas de su jurisdicción</li>
            <li className="Institution-description-list-item">Asesorar en la formulación, ejecución y evaluación del presupuesto anual de las Instituciones Educativas</li>
            <li className="Institution-description-list-item">Conducir el proceso de evaluación y de ingreso del personal docente y administrativo, así mismo desarrollar acciones de personal, atendiendo los requerimientos de la Institución Educativa, en coordinación con la Dirección Regional de Educación</li>
            <li className="Institution-description-list-item">Promover la formación y funcionamiento de Redes Educativas, como forma de cooperación entre Instituciones Educativas de su jurisdicción, las cuales establecen alianzas estratégicas con instituciones especializadas de la comunidad</li>        
            <li className="Institution-description-list-item">Apoyar el desarrollo y la adaptación de nuevas tecnologías de la comunicación y de la información para conseguir el mejoramiento del sistema educativo con una orientación intersectorial</li>
            <li className="Institution-description-list-item">Promover y ejecutar estrategias y programas efectivos de alfabetización, de acuerdo a las características socio–culturales y lingüísticas de la localidad</li>          
            <li className="Institution-description-list-item">Impulsar la actividad del Consejo Participativo Local de Educación, a fin de generar acuerdos y promover la vigilancia ciudadana</li>
            <li className="Institution-description-list-item">Formular, ejecutar y evaluar su presupuesto, en atención a las necesidades de las Instituciones Educativas, así como gestionar su financiamiento local, regional y nacional</li>
            <li className="Institution-description-list-item">Determinar las necesidades de infraestructura y equipamiento, así como participar en su construcción y mantenimiento, en coordinación y con el apoyo del Gobierno Local y Regional</li>        
            <li className="Institution-description-list-item">Promover y apoyar la diversificación de los currículos de las Instituciones Educativas en su jurisdicción</li>
            <li className="Institution-description-list-item">Promover centros culturales, bibliotecas, teatros y talleres de arte, así como el deporte y la recreación, así como brindar apoyo sobre la materia a los Gobiernos Locales que lo requieran. Esta acción se realiza en coordinación con los Organismos Públicos Descentralizados de su zona</li>
            <li className="Institution-description-list-item">Identificar las necesidades de capacitación del personal docente y administrativo y desarrollar programas de capacitación, así como brindar facilidades para la superación profesional</li>          
            <li className="Institution-description-list-item">Formular proyectos para el desarrollo educativo local y gestionarlos ante instituciones de cooperación nacional e internacional</li>
            <li className="Institution-description-list-item">Actuar como instancia administrativa en los asuntos de su competencia</li>
            <li className="Institution-description-list-item">Informar a las entidades oficiales correspondientes, y a la opinión publica, acerca de los resultados de su gestión</li> 
            <li className="Institution-description-list-item">Brindar el asesoramiento a los Directores y Padres de Familia respecto a la normatividad de la Asociación de Padres de Familia en las Instituciones Educativas de su jurisdicción</li> 
            </ul>
            <h4 className="Institution-subtitle">Normatividad Nacional</h4>
            <div className="Institution-normatividad-container">
                <div className="Institution-normatividad-item" id='normatividad'>
                    NORMATIVIDAD
                </div>
                <div className="Institution-normatividad-item" id='decretos'>
                    DECRETOS
                </div>
                <div className="Institution-normatividad-item" id='resoluciones'>
                    RESOLUCIONES
                </div>
                <div className="Institution-normatividad-item" id='oficios'>
                    OFICIOS
                </div>
                <div className="Institution-normatividad-item" id='regional'>
                    REGIONAL
                </div>
                <div className="Institution-normatividad-item" id='locales'>
                    LOCALES
                </div>
            </div>
            <div id='containerNormatividad'>

            </div>
            </div>
        </section>
        
        </>
    )
}
export default Institution;
const Ready = () => {
    const normatividad = document.getElementById('normatividad');
    const decretos = document.getElementById('decretos');
    const resoluciones = document.getElementById('resoluciones');
    const oficios = document.getElementById('oficios');
    const regional = document.getElementById('regional');
    const locales = document.getElementById('locales');

    const containerNormatividad = document.getElementById('containerNormatividad');

    const ShowNormatividad = () => {
        containerNormatividad.innerHTML= `               
                <div class='Institution-documents'>
                <h3 class='Institution-documents-title'>Normatividad</h3>
                <div class='Institution-documents-items-container'>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                            Marco del buen desenpeño directivo
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                            Marco del buen desenpeño docente
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                            Manual de compromisos y gestión escolar
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                            Ley del código de ética de la función pública Ley N° 27815
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                            Reglamento de ley N° 29944, ley de reforma magisterial
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                            Normas que Regulan el Procedimiento para el encargo de plazas vacantes de cargos directivos, Jerarquicos y de Especialistas en Educación en el marco de la Ley de la Reforma Magisterial (R.V.M. Nº 076)
                        </p>
                        <a class='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>	
                            Disponen la implementación y ejecución a nivel nacional de la Evaluación Censal de Estudiantes 2016 (ECE 2016), en las instituciones educativas públicas y privadas de Educación Básica Regular resolución ministerial N° 304-2016-minedu.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        RVM. 086 - 2015 MINEDU - NORMA PARA VIAJES...
                        Normas para la aprobación de los viajes de estudio, visitas culturales, jornadas y paseos de integración, participación de eventos deportivos y culturales, y otras actividades escolares.                        
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                            Manual de Régimen Disciplinario para Directores de Instituciones Educativas Públicas
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                            R.S.G. Nº 346-2016-MINEDU - NORMA PARA EL PROCESO DE CONTRATA DEL PERSONAL ADMINISTRATIVO EN EL SECTOR EDUCACIÓN
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        RM-N-627-2016-MINEDU - NORMAS Y ORIENTACIONES PARA EL DESARROLLO DEL AÑO ESCOLAR 2017...
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        Segunda parte  -  OFICIO MÚLTIPLE N°005-2017-MINEDU/VMGI/PRONIED
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>

        `
    }
    normatividad.addEventListener('click', ShowNormatividad);

    const ShowDecretos = () => {
        containerNormatividad.innerHTML= `               
            <div class='Institution-documents'>
                <h3 class='Institution-documents-title'>Decretos</h3>
                <div class='Institution-documents-items-container'>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        DECRETO DE URGENCIA - No 012-2017
                        DICTAN MEDIDAS EXTRAORDINARIAS PARA EL RESTABLECIMIENTO DEL SERVICIO EDUCATIVO A NIVEL NACIONAL.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        DECRETO DE URGENCIA N° 011-2017.
                        DECRETO DE URGENCIA QUE DICTA MEDIDAS EXTRAORDINARIAS PARA CONTINUAR CON LA REVALORIZACIÓN DE LA PROFESIÓN DOCENTE ...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        DECRETO SUPREMO Nº 005-2017-MINEDU --
                        MODIFICA DIVERSOS ARTÍCULOS DEL REGLAMENTO DE LA LEY N° 29944, LEY DE REFORMA MAGISTERIAL                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        CONTRATA DOCENTE - 2017.
                        DECRETO SUPREMO N° 001 - 2017- MINEDU. (24/01/2017)
                        NORMA COMPLETA CON ANEXOS.
                        NORMA QUE REGULA EL PROCEDIMIENTO, REQUISITOS Y CONDICIONES PARA LAS CONTRATACIONES EN EL MARCO DEL CONTRATO DE SERVICIO DOCENTE A QUE HACE REFERENCIA LA LEY N° 30328.                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>

        `
    }
    decretos.addEventListener('click', ShowDecretos);

    const ShowResoluciones = () => {
        containerNormatividad.innerHTML= `               
                <div class='Institution-documents'>
                <h3 class='Institution-documents-title'>Resoluciones</h3>
                <div class='Institution-documents-items-container'>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        R.M. Nº 529-2017-MINEDU
                        MINISTERIO DE EDUCACION DEJA SIN EFECTO EVALUACION CENSAL ESCOLAR 2017.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        R.M. N° 539-2017-MINEDU.
                        MODIFICACIÓN DEL CRONOGRAMA DE NOMBRAMIENTO Y CONTRATA DOCENTE 2017.                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        RESOLUCIÓN MINISTERIAL N°479-2017-MINEDU
                        Modifican Norma Técnica denominada “Disposiciones para la ejecución del programa de mantenimiento de la Infraestructura y Mobiliario de los Locales Escolares...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        R.S.G. N°116-2017-MINEDU
                        NORMA QUE REGULA EL CONCURSO PÚBLICO PARA EL ASCENSO DE ESCALA DE LOS PROFESORES DE EDUCACIÓN BÁSICA EN LA CARRERA PÚBLICA MAGISTERIAL 2017.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        RSG- 141-2017-MINEDU
                        NORMA QUE REGULA LA EVALUACIÓN DE DESEMPEÑO DOCENTE EN IIEE DEL NIVEL INICIAL DE LA EBR - CPM.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        RSG N° 505-2016-MINEDU: LINEAMIENTOS DE LA ESTRATEGIA NACIONAL DE LAS TECNOLOGÍAS DIGITALES EN LA EDUCACIÓN BÁSICA.                        
                        </p>
                        <a class='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>	
                        R.M. N° 070-2017-MINEDU: MODIFICAN NORMA Y ORIENTACIONES PARA EL DESARROLLO DEL AÑO ESCOLAR - 2017.
                        La ampliación horaria de la jornada laboral de las y los profesores (as) del nivel de educación secundaria a 30 horas semanales implica la permanencia en la institución educativa..
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        R.M. N° 08.2017-MINEDU: MODIFICA NORMA QUE ESTABLECE DISPOSICIONES PARA EL ACOMPAÑAMIENTO PEDAGÓGICO EN LA EDUCACIÓN BÁSICA ( R.S.G. N° 008-2016-MINEDU.)
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        RSG N° 018-2017-MINEDU: NORMA TÉCNICA QUE REGULA LOS CONCURSOS PÚBLICOS DE INGRESO A LA CARRERA PÚBLICA MAGISTERIAL Y DE CONTRATACIÓN DOCENTE EN INSTITUCIONES EDUCATIVAS PÚBLICAS DE EDUCACIÓN BÁSICA 2017.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        R.M. Nº 061-2017-MINEU: PADRONES NOMINALES DE INSTITUCIONES EDUCATIVAS FOCALIZADAS PARA LAS INTERVENCIONES PEDAGÓGICAS 2017. ( ENSEÑANZA DEL IDIOMA INGLES, ACOMPAÑAMIENTO PEDAGÓGICO SECUNDARIA RURAL, ACOMPAÑAMIENTO PEDAGÓGICO PRIMARIA, SOPORTE PEDAGÓGICO PRIMARIA, ACOMPAÑAMIENTO EDUCACIÓN INTERCULTURAL BILINGUE).
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        RSG Nº 016-2017 - MINEU: NORMA PARA LAS CONTRACION ADMINISTRATIVA DE SERVICIOS DEL PERSONAL PARA LA INTERVENCIÓN PEDAGÓGICA EN EL MARCO DE LOS PROGRAMAS PRESUPUESTALES 0090, 0091 Y 0106 PARA EL AÑO LECTIVO 2017.
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        R.S.G. N° 540-2016-MINEDU: DIRECTORES, SUB DIRECTORES DE II.EE. Y ESPECIALISTAS DE UGEL /DRE. ASUMIRAN SUS CARGOS A PARTIR DEL 13 DE FEBRERO. 
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        R.M. N° 627-2016-MINEDU: NORMAS Y ORIENTACIONES PARA EL DESARROLLO DEL AÑO ESCOLAR 2017 EN IIEE Y PROGRAMAS EDUCATIVOS  DE  LA EDUCACIÓN BÁSICA. 
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                </div>
                </div>

        `
    }
    resoluciones.addEventListener('click', ShowResoluciones);

    const ShowOficios = () => {
        containerNormatividad.innerHTML= `               
            <div class='Institution-documents'>
                <h3 class='Institution-documents-title'>Oficios</h3>
                <div class='Institution-documents-items-container'>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MÚLTIPLE N°058 -MINEDU/VMGI-DIGC.
                        MODIFICATORIA DEL REGLAMENTO DE LAS IIEE PRIVADAS DE EDUCACIÓN BÁSICA Y EDUCACIÓN TÉCNICO-PRODUCTIVA ...                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MÚLT Nº 089-2017-MINEDU/VMGP-DIGEDD-DITEN
                        OPORTUNIDAD DE PAGO DE DÍAS RECUPERADOS
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        Segunda parte  -  OFICIO MÚLTIPLE N°005-2017-MINEDU/VMGI/PRONIED
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        Oficio Mult N°00005-2017-MINEDU/VMGI/PRONIED
                        Aclaración de Conformación de Comités de Mantenimiento y Veedor del Programa de Mantenimiento de Infraestructura de Locales Escolares y...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT Nº 072-2017-MINEDU/VMGP-DGEDD-DITEN 
                        PRECISIONES DE JORNADA LABORAL DE DOCENTES CONTRATADOS EN EBR SECUNDARIA Y EBA AVANZADO...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT Nº 065-2017-MINEDU/VMGP-DGEDD-DITEN 
                        DESCUENTO POR HUELGA - ACCIONES ADMINISTRATIVAS.
                        </p>
                        <a class='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>	
                        OFICIO MULT Nº 058-2017-MINEDU/VMGP-DGEDD-DITEN 
                        PRECISIONES SOBRE MEJORAS DE LAS CONDICIONES LABORALES DE LOS PROFESORES NOMBRADOS Y CONTRATADOS...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO 007-2017 -MINEDU/VMGP-DIGEDD-DITEN: 
                        DOCUMENTO DE REFERENCIA PARA PROCESO DE CONTRATA 2017 - CRONOGRAMA. 
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        OFICIO MULT Nº 098-2016-MINEDU/VMGP-DGEDD-DITEN :  PAGO POR ENCARGATURA DE DIRECCIÓN 2016.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        OFICIO 096-2016 -MINEDU/VMGP-DIGEDD-DITEN: PAGO POR VACACIONES TRUNCAS A DOCENTES Y AUXILIARES CONTRATADOS
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>

        `
    }
    oficios.addEventListener('click', ShowOficios);

    const ShowRegional = () => {
        containerNormatividad.innerHTML= `               
            <div class='Institution-documents'>
                <h3 class='Institution-documents-title'>Regional</h3>
                <div class='Institution-documents-items-container'>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULTIPLE Nº 061-2018-DREA
                        Normativa sobre la administración compartida de infraestructura, equipamiento y otras disposiciones
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT N°449 -2017- ME/GRA/DREA-OAJ.
                        DENIEGA la solicitud de Suspensión del Proceso de Evaluación de las rubricas de Observación de Aula para la Evaluación del Desempeño Docente, y todo los Programas del MINEDU (Pela etc) interpuesto por el representante del SUTEP APURÍMAC.                        
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT N°421 -2017- ME/GRA/DREA-DGP .
                        PROHIBICIÓN DE USO DE HORAS EFECTIVAS DE CLASE EN ACTIVIDADES AJENAS A LOS APRENDIZAJES PROGRAMADOS
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        Oficio Mult N°00005-2017-MINEDU/VMGI/PRONIED
                        Aclaración de Conformación de Comités de Mantenimiento y Veedor del Programa de Mantenimiento de Infraestructura de Locales Escolares y...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT Nº 072-2017-MINEDU/VMGP-DGEDD-DITEN 
                        PRECISIONES DE JORNADA LABORAL DE DOCENTES CONTRATADOS EN EBR SECUNDARIA Y EBA AVANZADO...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT Nº 065-2017-MINEDU/VMGP-DGEDD-DITEN 
                        DESCUENTO POR HUELGA - ACCIONES ADMINISTRATIVAS.
                        </p>
                        <a class='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>	
                        OFICIO MULT Nº 058-2017-MINEDU/VMGP-DGEDD-DITEN 
                        PRECISIONES SOBRE MEJORAS DE LAS CONDICIONES LABORALES DE LOS PROFESORES NOMBRADOS Y CONTRATADOS...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO 007-2017 -MINEDU/VMGP-DIGEDD-DITEN: 
                        DOCUMENTO DE REFERENCIA PARA PROCESO DE CONTRATA 2017 - CRONOGRAMA. 
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        OFICIO MULT Nº 098-2016-MINEDU/VMGP-DGEDD-DITEN :  PAGO POR ENCARGATURA DE DIRECCIÓN 2016.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        OFICIO 096-2016 -MINEDU/VMGP-DIGEDD-DITEN: PAGO POR VACACIONES TRUNCAS A DOCENTES Y AUXILIARES CONTRATADOS
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>

        `
    }
    regional.addEventListener('click', ShowRegional);
    
    const ShowLocales = () => {
        containerNormatividad.innerHTML= `               
            <div class='Institution-documents'>
                <h3 class='Institution-documents-title'>Locales</h3>
                <div class='Institution-documents-items-container'>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULTIPLE Nº 061-2018-DREA
                        Normativa sobre la administración compartida de infraestructura, equipamiento y otras disposiciones
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT N°449 -2017- ME/GRA/DREA-OAJ.
                        DENIEGA la solicitud de Suspensión del Proceso de Evaluación de las rubricas de Observación de Aula para la Evaluación del Desempeño Docente, y todo los Programas del MINEDU (Pela etc) interpuesto por el representante del SUTEP APURÍMAC.                        
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT N°421 -2017- ME/GRA/DREA-DGP .
                        PROHIBICIÓN DE USO DE HORAS EFECTIVAS DE CLASE EN ACTIVIDADES AJENAS A LOS APRENDIZAJES PROGRAMADOS
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        Oficio Mult N°00005-2017-MINEDU/VMGI/PRONIED
                        Aclaración de Conformación de Comités de Mantenimiento y Veedor del Programa de Mantenimiento de Infraestructura de Locales Escolares y...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT Nº 072-2017-MINEDU/VMGP-DGEDD-DITEN 
                        PRECISIONES DE JORNADA LABORAL DE DOCENTES CONTRATADOS EN EBR SECUNDARIA Y EBA AVANZADO...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO MULT Nº 065-2017-MINEDU/VMGP-DGEDD-DITEN 
                        DESCUENTO POR HUELGA - ACCIONES ADMINISTRATIVAS.
                        </p>
                        <a class='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>	
                        OFICIO MULT Nº 058-2017-MINEDU/VMGP-DGEDD-DITEN 
                        PRECISIONES SOBRE MEJORAS DE LAS CONDICIONES LABORALES DE LOS PROFESORES NOMBRADOS Y CONTRATADOS...
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>
                        OFICIO 007-2017 -MINEDU/VMGP-DIGEDD-DITEN: 
                        DOCUMENTO DE REFERENCIA PARA PROCESO DE CONTRATA 2017 - CRONOGRAMA. 
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        OFICIO MULT Nº 098-2016-MINEDU/VMGP-DGEDD-DITEN :  PAGO POR ENCARGATURA DE DIRECCIÓN 2016.
                        </p>
                        <a clasName='Institution-documents-item-icon-container' href="">
                            <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                    <div class='Institution-documents-item'>
                        <p class='Institution-documents-item-description'>              	
                        OFICIO 096-2016 -MINEDU/VMGP-DIGEDD-DITEN: PAGO POR VACACIONES TRUNCAS A DOCENTES Y AUXILIARES CONTRATADOS
                        </p>                        
                        <a clasName='Institution-documents-item-icon-container' href="">
                        <img src=${pdfIcon} alt="icon-link" class='Institution-documents-item-icon'/>
                        </a>
                    </div>
                </div>
            </div>

        `
    }
    locales.addEventListener('click', ShowLocales);







}

setInterval(isLoaded, 1000);
function isLoaded (){
    if (document.readyState !== 'loading'){
        //console.log('state', document.readyState);
        Ready();
        //delete document.change;
       
        
    }
}