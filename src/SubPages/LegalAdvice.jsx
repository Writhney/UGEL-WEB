import background from './../assets/backgrounds/background1.svg';
import employee from './../assets/icons/employee.svg';
import personBusiness from './../assets/photos/personBusiness.png';
import './../styles/LegalAdvice.css';

const LegalAdvice = () => {
    return(
        <>
        <section className="Legal-advice-container">
        <div className="Legal-advice-front-container">
            <figure className="Legal-advice-front-image-container">
                <img src='https://i.postimg.cc/9fStMk8t/Slider5.jpg' alt="image" className="Legal-advice-front-img"/>
            </figure>
            <h1 className="Legal-advice-front-title">Asesoría Jurídica</h1>
            <div className='Insti-manage-background-container'>
                <img className='Insti-manage-background' src={background} alt="background" />
            </div>
        </div>
        <div className='Legal-advice-info-container'>
                <div className='Legal-advice-item'>
                    <div className='Legal-advice-item-info-container'>
                        <p className='Legal-advice-info-description'>
                            La atención del ordenamiento jurídico se cumple a través del Área de Asesoría Jurídica, encargada de emitir opinión legal y asesorar a la Unidad de Gestión Educativa Local en los asuntos jurídicos.
                            El Jefe de Área es nominado por el Director y depende directamente de Él. 
                            Sus funciones específicas son:
                        </p>
                        <ul className='Legal-advice-info-list-container'>
                            <li className='Legal-advice-info-list-item'>Asesorar a la Unidad de Gestión Educativa Local de Andahuaylas en asuntos de carácter jurídico legal</li>
                            <li className='Legal-advice-info-list-item'>Emitir dictámenes y opiniones legales sobre Recursos de Impugnación en asuntos relacionados al servicio del Sector como instancia administrativa</li>
                            <li className='Legal-advice-info-list-item'>Sistematizar y difundir la legislación educativa en coordinación con la Oficina de Asesoría Jurídica de la Dirección Regional de Educación de Apurímac</li>
                            <li className='Legal-advice-info-list-item'>Brindar asesoramiento a las Comisiones de Procesos Administrativos y Disciplinarios</li>
                            <li className='Legal-advice-info-list-item'>Participar en la formulación de proyectos, de Resoluciones, contratos, convenios y otros actos jurídicos de competencia de la Unidad de Gestión Educativa Local de Andahuaylas</li>
                            <label htmlFor="" className='Legal-advice-info-list-item-more' id='showMore1'>Ver mas</label>
                            <li className='Legal-advice-info-list-item-not-visible'>Absolver consultas de carácter legal formuladas por las Dependencias, trabajadores de la Institución y usuarios del Sector en asuntos de su competencia</li>
                            <li className='Legal-advice-info-list-item-not-visible'>Las demás funciones que le asigne la Unidad de Gestión Educativa Local de Andahuaylas</li>

                        </ul>

                    </div>
                    <div className="Legal-advice-item-card-container">
                        <figure className="Legal-advice-item-card-img-container">
                            <img className="Legal-advice-item-card-img" src={personBusiness} alt="foto" />
                        </figure>
                        <div className="Legal-advice-item-card-description-container">
                            <h4 className="Legal-advice-item-card-description-name">Mag. Henrry Hurtado Nuñez</h4>
                            <p className="Legal-advice-item-card-description-email">henrry@ugelandahuaylas.edu.pe</p>
                            <p className="Legal-advice-item-card-description-cell">Cell. 999 999 999</p>
                        </div>
                    </div>
                </div>
        </div>
        </section>      
        </>
    )

}
export default LegalAdvice;

function ready(){
    const showMore1 = window.document.getElementById('showMore1');
    const ListItems = [...document.querySelectorAll('.Legal-advice-info-list-item-not-visible')];
    
    let click = 1;
    const ShowList = () => {
        ListItems.forEach(element => {
            element.classList.toggle('Legal-advice-info-list-item', click % 2 !== 0 );
        });
        click++;
    }
    showMore1.addEventListener('click', ShowList);
}

setInterval(isLoaded, 1000);
function isLoaded (){
    if (document.readyState !== 'loading'){
        ready();
        clearInterval(isLoaded, 1000); 
    }
}