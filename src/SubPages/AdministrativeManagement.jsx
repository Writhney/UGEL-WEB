import employee from './../assets/icons/employee.svg';
import personBusiness from './../assets/photos/personBusiness.png';
import './../styles/AdministrativeManagement.css';
import background from './../assets/backgrounds/background1.svg';

const AdministrativeManagement = () => {
    return(
        <>
        <section className="Admi-manage-container">
            <div className="Admi-manage-front-container">
                <figure className="Admi-manage-front-image-container">
                    <img src={employee} alt="image" className="Admi-manage-front-img"/>
                </figure>
                <h1 className="Admi-manage-front-title">Gestión Administrativa</h1>
                <div className='Admi-manage-background-container'>
                    <img className='Admi-manage-background' src={background} alt="background" />
                </div>
            </div>
            <div className='Admi-manage-info-container'>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <p className='Admi-manage-info-description'>
                            El Área de Gestión Administrativa, Infraestructura y Equipamiento, cumple las siguientes funciones: 
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Proporcionar oportunamente los recursos económicos y bienes y servicios que demande la prestación del servicio de las Instituciones Educativas a su cargo, en un marco de equidad y transparencia, mediante la ejecución eficaz de los recursos presupuestarios de la Unidad de Gestión Educativa Local de Andahuaylas</li>
                            <li className='Admi-manage-info-list-item'>Participar en las modificaciones presupuestales necesarias, en coordinación con el Área de Gestión Institucional, a fin de lograr un mejor cumplimiento de los objetivos estratégicos propuestos</li>
                            <li className='Admi-manage-info-list-item'>Asesorar a las Instituciones Educativas en la elaboración y ejecución de sus presupuestos</li>
                            <li className='Admi-manage-info-list-item'>Elaborar el calendario de compromisos de la Unidad de Gestión Educativa Local de Andahuaylas, para garantizar la disponibilidad oportuna de los recursos presupuestales</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='showMoreA'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible'>Administrar el personal, los recursos materiales y financieros, así como bienes patrimoniales de la sede institucional y de las Instituciones Educativas a su cargo</li>
                            <li className='Admi-manage-info-list-item-not-visible'>Aplicar los procesos técnicos de los sistemas de Personal, Abastecimiento, Contabilidad y Tesorería, en las dependencias administrativas a su cargo, de conformidad a la normatividad emitida por cada sistema administrativo</li>
                            <li className='Admi-manage-info-list-item-not-visible'>Mantener actualizada la base de datos del registro escalafonario, el inventario de bienes patrimoniales y el acervo documental de la sede institucional y de las Instituciones Educativas a su cargo</li>
                            <li className='Admi-manage-info-list-item-not-visible'>Mejorar permanentemente los procesos técnicos de la gestión administrativa, simplificando su ejecución</li>
                            <li className='Admi-manage-info-list-item-not-visible'>Conciliar la información contable, administrativa y presupuestal del ejercicio fiscal en los niveles administrativos y en los plazos correspondientes</li>
                            <li className='Admi-manage-info-list-item-not-visible'>Identificar y sistematizar las necesidades de infraestructura, mobiliario y equipamiento de las Instituciones Educativas, especialmente las zonas más desatendidas y solicitar su atención a la Dirección Regional de Educación</li>
                            <li className='Admi-manage-info-list-item-not-visible'>Mantener actualizado el margesí de bienes inmuebles de su ámbito territorial, efectuando el saneamiento físico–legal de aquellos que lo requieran, en coordinación con la Dirección Regional de Educación y el Órgano competente de la Sede Central del Ministerio de Educación</li>
                            <li className='Admi-manage-info-list-item-not-visible'>Elaborar y difundir normas técnicas para el adecuado mantenimiento de los locales escolares, en coordinación con la comunidad, con la Dirección Regional de Educación y el Órgano competente de la Sede Central del Ministerio de Educación</li>
                            <li className='Admi-manage-info-list-item-not-visible'>Supervisar y dar mantenimiento a las instalaciones de las Instituciones Educativas y comunicar antes de finalizar el primer semestre de cada año a la Dirección Regional de Educación sobre el estado de la infraestructura</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Jefatura</h3>
                        <p className='Admi-manage-info-description'>
                            El Área de Administración es el Órgano de Apoyo encargado de velar por el cumplimiento y la adecuada aplicación de los dispositivos que norman a los Sistemas de Personal, Contabilidad y Tesorería, Abastecimientos, Control Patrimonial y de los bienes y servicios de la entidad, así como de la administración.
                            El Jefe de Área es nominado por el Director y depende directamente de él.
                            Estructura orgánica:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Secretaria</li>
                            <li className='Admi-manage-info-list-item'>Unidad de Personal</li>
                            <li className='Admi-manage-info-list-item'>Abastecimiento</li>
                            <li className='Admi-manage-info-list-item'>Contabilidad</li>
                            <li className='Admi-manage-info-list-item'>Tesorería</li>
                            <li className='Admi-manage-info-list-item'>Almacén</li>
                            <li className='Admi-manage-info-list-item'>Remuneraciones</li>
                            <li className='Admi-manage-info-list-item'>Infraestructura</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Abastecimiento</h3>
                        <p className='Admi-manage-info-description'>
                            Depende jerárquicamente del Jefe (a) del Área de Gestión Administrativa, cumple las siguientes funciones:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Elaborar el Plan de Adquisiciones (bienes y servicios) de la UGEL para cada período, priorizando de acuerdo a las necesidades solicitadas por las instituciones educativas y de la sede institucional</li>
                            <li className='Admi-manage-info-list-item'>Dirigir y coordinar la formulación, consolidación y reajuste de los cuadros de necesidades de las Instituciones Educativas y sede institucional</li>
                            <li className='Admi-manage-info-list-item'>Revisar y autorizar la tramitación de las solicitudes de cotización, cuadro comparativo de cotizaciones, órdenes de compra, guías de internamiento, pedidos de comprobantes de salida, ordenes de servicios, polizas y otros documentos</li>
                            <li className='Admi-manage-info-list-item'>Proponer y formular los presupuestos de compras y el calendario de entrega</li>
                            <li className='Admi-manage-info-list-item'>Controlar la calidad de los bienes que se adquieren</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='verMasA2'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible-2'>Participar en las comisiones de licitación pública y de concurso de precios, para adquirir bienes muebles y otros que se le asigne</li>
                            <li className='Admi-manage-info-list-item-not-visible-2'>Mantener actualizado el registro de proveedores, bienes y servicios de la sede institucional y que éstos estén debidamente acreditados para contratar con el estado</li>
                            <li className='Admi-manage-info-list-item-not-visible-2'>Mantener actualizado el inventario de bienes, muebles e inmuebles y equipos de las Instituciones Educativas y sede institucional</li>
                            <li className='Admi-manage-info-list-item-not-visible-2'>Supervisar y asesorar a las Instituciones Educativas y sede institucional en asuntos relacionados con el sistema de abastecimientos</li>
                            <li className='Admi-manage-info-list-item-not-visible-2'>Controlar las entradas y salidas de los vehículos, dando cuenta al Jefe de Área</li>
                            <li className='Admi-manage-info-list-item-not-visible-2'>Visar la documentación administrativa contable que se genera en el sistema de abastecimiento</li>
                            <li className='Admi-manage-info-list-item-not-visible-2'>Formular la ampliación del calendario de compromisos de bienes y servicios</li>
                            <li className='Admi-manage-info-list-item-not-visible-2'>Supervisar la conservación y mantenimiento de la infraestructura, instalaciones y equipamiento de la sede de la UGEL de Andahuaylas, para subsanar de inmediato las necesidades</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Personal</h3>
                        <p className='Admi-manage-info-description'>
                            El Jefe de Área es nominado por el Director y depende jerárquicamente del Director del Área de Administración.
                            Estructura orgánica:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Secretaria</li>
                            <li className='Admi-manage-info-list-item'>Especialista Administrativo</li>
                            <li className='Admi-manage-info-list-item'>Técnico Administrativo</li>
                        </ul>
                        <p className='Admi-manage-info-description'>
                            Funciones Específicas:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Dirigir, distribuir, orientar y supervisar las acciones del equipo técnico a su cargo</li>
                            <li className='Admi-manage-info-list-item'>Formular y actualizar el Cuadro Nominativo de Personal (CNP), el Cuadro de Asignación de Personal (CAP) y el Presupuesto Analítico de Personal (PAP) de la Unidad de Gestión Educativa Local Andahuaylas y de las II.EE. y Programas Educativos</li>
                            <li className='Admi-manage-info-list-item'>Estudiar y proponer el movimiento de personal docente, administrativo y de servicio, de acuerdo a las normas y disposiciones legales vigentes</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='verMasA3'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Confeccionar el rol de vacaciones, elaborar los formularios de control y cuadros estadísticos de las resoluciones y expedientes</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Estudiar y derivar expedientes con indicación para su atención</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Revisar los expedientes y proyectos de resoluciones formulados por el proyectista</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Firmar las transcripciones de las resoluciones que por delegación emite el Director de Gestión Administrativa</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Organizar y ejecutar propuestas de Racionalización del personal en coordinación con la Dirección de Gestión Institucional</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Elaborar informes, decretos y otros sobre acciones de personal</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Coordinar con los directores de los centros, programas e instituciones educativas, asuntos relacionados con las normas de personal</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Dirigir y controlar el proceso de registro de las fichas escalafonarias, el archivo de las carpetas personales de los docentes, personal administrativo y pensionistas, del ámbito de la Sede</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Coordinar con la Oficina de Remuneraciones y el Área de Gestión Institucional para la verificación de los actos resolutivos</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Revisar y firmar la planilla única de remuneraciones y pensiones</li>
                            <li className='Admi-manage-info-list-item-not-visible-3'>Realizar las demás funciones de su competencia</li>                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Contabilidad</h3>
                        <p className='Admi-manage-info-description'>
                            Jerárquicamente depende del Director del Área Administrativa. 
                            Funciones Específicas:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Elaborar y formular las notas de contabilidad de operaciones con fondos, almacén y complementarias</li>
                            <li className='Admi-manage-info-list-item'>Coordinar el avance de la ejecución presupuestaria, estudiar y opinar sobre las propuestas de modificación</li>
                            <li className='Admi-manage-info-list-item'>Revisar y firmar la conciliación de cuentas de enlace y el informe mensual de gasto</li>
                            <li className='Admi-manage-info-list-item'>Visar los comprobantes de pago, previa revisión de la documentación sustentatoria</li>
                            <li className='Admi-manage-info-list-item'>Visar e integrar contablemente las operaciones de tesorería, almacén y las notas presupuestales</li>
                            <li className='Admi-manage-info-list-item'>Revisar y visar la afectación presupuestal de las órdenes de compra y órdenes de servicio</li>
                            <li className='Admi-manage-info-list-item'>Elaborar el avance de la ejecución del gasto por asignaciones genéricas y específicas y por Sub Programas</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='verMasA4'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Realizar el arqueo sorpresivo de caja y de cheques en cartera</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Revisar y firmar las operaciones contables de la Unidad de Gestión Educativa Local y la información contable proveniente de los centros y programas educativos</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Preparar y coordinar con el tesorero la rendición documentada de los gastos</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Elaborar los estados financieros y presupuestarios</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Elaborar el balance de comprobación en forma mensual</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Elaborar y firmar los libros principales y auxiliares</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Realizar las demás funciones afines al cargo</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Coordinar y registrar operaciones contables en el SIAF</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Elaborar los informes de ejecución presupuestal de su competencia conforme a la normatividad, para las entidades superiores</li>
                            <li className='Admi-manage-info-list-item-not-visible-4'>Elaborar anexos financieros e información financiera adicional, así como los análisis de cuentas</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Tesorería</h3>
                        <p className='Admi-manage-info-description'>
                            Jerárquicamente depende del Director del Área Administrativa.
                            Funciones Específicas:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Laborar libro auxiliar, caja mensual y comprobante de pago</li>
                            <li className='Admi-manage-info-list-item'>Revisar y firmar los siguientes documentos: relación de retenciones, relación de cheques anulados, comprobantes de pago, liquidación de la planilla de haberes y la información administrativa y contable</li>
                            <li className='Admi-manage-info-list-item'>Girar cheques para la adquisición de bienes, servicios, remuneraciones y encargos, y cartas en el SIAF</li>
                            <li className='Admi-manage-info-list-item'>Firmar todos los cheques e informes sobre los descuentos judiciales, por mandato judicial</li>
                            <li className='Admi-manage-info-list-item'>Controlar el movimiento de la cuenta del fondo para pagos en efectivo y caja chica, llevar el control de fondos mensuales</li>
                            <li className='Admi-manage-info-list-item'>Ejecutar el pago de remuneraciones, bienes y servicios, y encargar previo registro en el SIAF</li>
                            <li className='Admi-manage-info-list-item'>Efectuar la conciliación bancaria de las cuentas de enlace del tesoro público y otras fuentes de financiamiento</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='verMasA9'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible-9'>Remitir previa coordinación con el Especialista Administrativo I (personal) el reporte y/o liquidación de planillas a la Unidad de Contabilidad con la relación de retenciones y/o descuentos en el mes, para su contabilización en el SIAF</li>
                            <li className='Admi-manage-info-list-item-not-visible-9'>Controlar que los giros no excedan los límites de los compromisos efectuados con fuente de financiamiento 00, 09, 13 y encargos</li>
                            <li className='Admi-manage-info-list-item-not-visible-9'>Elaborar y presentar los informes de ejecución presupuestal de su competencia, conforme a lo normado por la Ley del Presupuesto General de la República y Normas de Tesorería</li>
                            <li className='Admi-manage-info-list-item-not-visible-9'>Gestionar la reprogramación de cheques anulados por caducidad</li>
                            <li className='Admi-manage-info-list-item-not-visible-9'>Efectuar solicitud de giros ante la Dirección General de Tesoro Público para el apoyo de subsidios por incapacidad temporal y su rendición</li>
                            <li className='Admi-manage-info-list-item-not-visible-9'>Efectuar el pago de retenciones y aportaciones a EsSalud, SUNAT y terceros</li>
                            <li className='Admi-manage-info-list-item-not-visible-9'>Depositar en los plazos previstos la recuperación de pagos indebidos y descuentos por Ley Nro. 20530</li>
                            <li className='Admi-manage-info-list-item-not-visible-9'>Firmar recibos de ingresos y supervisar los depósitos dentro de los plazos establecidos por la Directiva de Tesorería y registrar el Determinado y Recaudado en el SIAF</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>

                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Escalafón</h3>
                        <p className='Admi-manage-info-description'>
                            Jerárquicamente depende del Director del Área Administrativa.
                            Sus funciones específicas son:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Llevar a cabo el proceso de ordenamiento manual del Kardex de los personales docentes y administrativos, activos, cesantes, nombrados y contratados</li>
                            <li className='Admi-manage-info-list-item'>Elaborar y firmar los Informes, Constancias Escalafonarias, Pases de UGEL, y otros, responsabilizándose de su emisión</li>
                            <li className='Admi-manage-info-list-item'>Registrar, descargar resoluciones y documentos en las fichas escalafonarias de las carpetas personales de los servidores docentes y administrativos, en el sistema mecanizado computarizado</li>
                            <li className='Admi-manage-info-list-item'>Actualizar el ingreso de datos del personal docente y administrativo</li>
                            <li className='Admi-manage-info-list-item'>Velar por la organización, mantenimiento y seguridad del Sistema de Escalafón de la Unidad de Gestión Educativa Local Andahuaylas, Sistema Manual y Mecanizado</li>
                            <li className='Admi-manage-info-list-item'>Mantener actualizado el archivo de Escalafón</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='verMasA5'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible-5'>Realizar la apertura y reapertura de fichas escalafonarias del personal docente y administrativo, y mantenerlas actualizadas</li>
                            <li className='Admi-manage-info-list-item-not-visible-5'>Elaborar las estadísticas del personal docente, administrativo y pensionistas en el ámbito de su jurisdicción, beneficiarios nombrados y contratados</li>
                            <li className='Admi-manage-info-list-item-not-visible-5'>Llevar la hoja de producción diaria del personal que trabaja en la oficina</li>
                            <li className='Admi-manage-info-list-item-not-visible-5'>Observar Resoluciones con opinión técnica e informar a la instancia correspondiente</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Almacén</h3>
                        <p className='Admi-manage-info-description'>
                            Jerárquicamente depende del Director del Área Administrativa.
                            Sus funciones específicas son:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Elaborar y registrar las operaciones patrimoniales en los auxiliares estándares</li>
                            <li className='Admi-manage-info-list-item'>Elaborar los pedidos, comprobantes de salida (PECOSA) de los bienes y suministros destinados para su uso y consumo</li>
                            <li className='Admi-manage-info-list-item'>Elaborar el control y la conciliación de la remesa de bienes recibidos</li>
                            <li className='Admi-manage-info-list-item'>Llevar y actualizar las tarjetas de control visible de bienes almacenados</li>
                            <li className='Admi-manage-info-list-item'>Verificar la conformidad de los artículos remitidos por los proveedores, con las especificaciones de las órdenes de compra, y realizar su almacenamiento</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='verMasA6'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible-6'>Efectuar la distribución de bienes y mater-not-visible-6iales de acuerdo al cuadro de suministros y necesidades</li>
                            <li className='Admi-manage-info-list-item-not-visible-6'>Preparar el inventario físico de almacén y las pólizas de entrada y salida de almacén</li>
                            <li className='Admi-manage-info-list-item-not-visible-6'>Velar por la conservación, seguridad y mantenimiento de los bienes almacenados, así como de las unidades de transporte</li>
                            <li className='Admi-manage-info-list-item-not-visible-6'>Elevar informes para altas y bajas de los materiales y equipos de oficina en desuso</li>
                            <li className='Admi-manage-info-list-item-not-visible-6'>Registrar el movimiento de bienes en las tarjetas de existencia valorada de almacén (EVA)</li>
                            <li className='Admi-manage-info-list-item-not-visible-6'>Participar en la comisión inventariadora de bienes y suministros de almacén</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Remuneraciones</h3>
                        <p className='Admi-manage-info-description'>
                            Jerárquicamente depende del Director del Área Administrativa.
                            Sus funciones específicas son:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Mantenimiento de la Base de Datos</li>
                            <li className='Admi-manage-info-list-item'>Efectuar copias de seguridad mensualmente y entregar una copia en CD al Área de Administración de la UGEL y Oficina de Informática del MED</li>
                            <li className='Admi-manage-info-list-item'>Realizar el cálculo y Cuadro de Planillas de activos y cesantes</li>
                            <li className='Admi-manage-info-list-item'>Correr todos los procesos</li>
                            <li className='Admi-manage-info-list-item'>Preparar los discos de abono</li>
                            <li className='Admi-manage-info-list-item'>Procesar los diskettes de las entidades terceras</li>
                            <li className='Admi-manage-info-list-item'>Efectuar los cálculos por concepto de sepelio y luto</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='verMasA7'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible-7'>Realizar el cálculo o discriminación por tiempo de servicios</li>
                            <li className='Admi-manage-info-list-item-not-visible-7'>Efectuar el cálculo de las CTS</li>
                            <li className='Admi-manage-info-list-item-not-visible-7'>Efectuar los cálculos por cese, fallecimiento, viudez y orfandad</li>
                            <li className='Admi-manage-info-list-item-not-visible-7'>Efectuar el cálculo actuarial según norma vigente (D.S. Nro. 020)</li>
                            <li className='Admi-manage-info-list-item-not-visible-7'>Efectuar el compromiso y devengado para el pago de planillas en el SIAF</li>
                            <li className='Admi-manage-info-list-item-not-visible-7'>Imprimir las boletas de pago de activos y cesantes, así mismo de beneficiarios (judiciales, sobrevivientes)</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
                <div className='Admi-manage-item'>
                    <div className='Admi-manage-item-info-container'>
                        <h3 className='Admi-manage-item-info-subtitle'>Control Patrimonial</h3>
                        <p className='Admi-manage-info-description'>
                            Jerárquicamente depende del Director del Área Administrativa.
                            Sus funciones específicas son:
                        </p>
                        <ul className='Admi-manage-info-list-container'>
                            <li className='Admi-manage-info-list-item'>Elabora el consolidado de Inventario de Bienes, Muebles, Equipos en general y enseres de la Sede Institucional de la UGEL y de las Instituciones Educativas</li>
                            <li className='Admi-manage-info-list-item'>Codificar de acuerdo al catálogo nacional vigente, los bienes estatales adquiridos por la UGEL, entregados por el almacén institucional a las dependencias solicitantes con destino a las Instituciones Educativas y trabajadores usuarios, asignándoles el respectivo código</li>
                            <li className='Admi-manage-info-list-item'>Clasificar los bienes estatales, de acuerdo a su naturaleza, precio y duración en condiciones normales de uso, en activos fijos o bienes no depreciables</li>
                            <label htmlFor="" className='Admi-manage-info-list-item-more' id='verMasA8'>Ver mas</label>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Inscribir cronológicamente en el registro de control patrimonial de la UGEL el resumen del movimiento de almacén de los bienes, como documento de información confiable</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Elaborar los estados mensuales de bienes del activo fijo y bienes no depreciables, previa revisión y registro de la información contenida en los documentos fuente – sustentatorios</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Valoriza mediante tasación comercial o por personal especializado, los bienes estatales que carecen de la respectiva documentación sustentatoria</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Determinar el importe de la depreciación anual y acumulada de los activos fijos de acuerdo a su clase, fecha y valor de adquisición</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Determinar el importe de la depreciación anual y acumulada de los activos fijos de acuerdo a su clase, fecha y valor de adquisición</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Elaborar previa verificación física, los respectivos cargos personales por asignación de bienes en uso y el inventario físico general del ámbito de la UGEL</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Tramitar las solicitudes de alta, baja y posterior venta directa o subasta pública, incineración o destrucción, según sea el caso de los bienes estatales obsoletos, presentados por la Sede e Instituciones Educativas de la UGEL</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Participar en los actos administrativos convocados por la Superintendencia de Bienes Nacionales SBN, relacionados con el destino final de los bienes estatales dados de baja por la UGEL, suscribiendo los documentos de fuentes</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Participar en los actos administrativos relacionados con la entrega – recepción de cargo, por parte de los funcionarios y trabajadores de la UGEL</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Formular y aplicar normas para verificar el registro, administración, custodia y conservación de los bienes estatales</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Coordinar la contratación de seguros para los bienes patrimoniales de la UGEL</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Apoyar en el Equipamiento de las Instituciones Educativa del ámbito</li>
                            <li className='Admi-manage-info-list-item-not-visible-8'>Realizar otras funciones de su competencia que le encargue el Especialista Administrativo (Abastecimiento)</li>
                        </ul>
                    </div>
                    <div className="Admi-manage-item-card-container">
                        <figure className="Admi-manage-item-card-img-container">
                            <img className="Admi-manage-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Admi-manage-item-card-description-container">
                            <h4 className="Admi-manage-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Admi-manage-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Admi-manage-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>

            </div>


        </section>
        </>
    )
}
export default AdministrativeManagement;

const ready = () => {
    
    const showMoreA = window.document.getElementById('showMoreA');
    const ListItems = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible')];

    const showMoreA2 = window.document.getElementById('verMasA2');
    const ListItems2 = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible-2')];

    const showMoreA3 = window.document.getElementById('verMasA3');
    const ListItems3 = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible-3')];

    const showMoreA4 = window.document.getElementById('verMasA4');
    const ListItems4 = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible-4')];

    const showMoreA5 = window.document.getElementById('verMasA5');
    const ListItems5 = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible-5')];
    
    const showMoreA6 = window.document.getElementById('verMasA6');
    const ListItems6 = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible-6')];
    
    const showMoreA7 = window.document.getElementById('verMasA7');
    const ListItems7 = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible-7')];

    const showMoreA8 = window.document.getElementById('verMasA8');
    const ListItems8 = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible-8')];

    const showMoreA9 = window.document.getElementById('verMasA9');
    const ListItems9 = [...document.querySelectorAll('.Admi-manage-info-list-item-not-visible-9')];

    let click = 1;
    const ShowList = () => {
        ListItems.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click % 2 !== 0 );
        });
        click++;
    }
    showMoreA.addEventListener('click', ShowList);

    let click2 = 1;
    const ShowList2 = () => {
        ListItems2.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click2 % 2 !== 0 );
        });
        click2++;
    }
    showMoreA2.addEventListener('click', ShowList2);

    let click3 = 1;
    const ShowList3 = () => {
        ListItems3.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click3 % 2 !== 0 );
        });
        click3++;
    }
    showMoreA3.addEventListener('click', ShowList3);

    let click4 = 1;
    const ShowList4 = () => {
        ListItems4.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click4 % 2 !== 0 );
        });
        click4++;
    }
    showMoreA4.addEventListener('click', ShowList4);
    
    let click5 = 1;
    const ShowList5 = () => {
        ListItems5.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click5 % 2 !== 0 );
        });
        click5++;
    }
    showMoreA5.addEventListener('click', ShowList5);

    let click6 = 1;
    const ShowList6 = () => {
        ListItems6.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click6 % 2 !== 0 );
        });
        click6++;
    }
    showMoreA6.addEventListener('click', ShowList6);

    let click7 = 1;
    const ShowList7 = () => {
        ListItems7.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click7 % 2 !== 0 );
        });
        click7++;
    }
    showMoreA7.addEventListener('click', ShowList7);

    let click8 = 1;
    const ShowList8 = () => {
        ListItems8.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click8 % 2 !== 0 );
        });
        click8++;
    }
    showMoreA8.addEventListener('click', ShowList8);

    let click9 = 1;
    const ShowList9 = () => {
        ListItems9.forEach(element => {
            element.classList.toggle('Admi-manage-info-list-item', click9 % 2 !== 0 );
        });
        click9++;
    }
    showMoreA9.addEventListener('click', ShowList9);
    
}

setInterval(isLoaded, 1000);
function isLoaded (){
    if (document.readyState !== 'loading'){
        //console.log('state', document.readyState);
        ready();
        clearInterval(isLoaded, 1000); 
    }
}

