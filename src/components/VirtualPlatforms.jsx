import beca18ICon from '../assets/icons/beca18Icon.png';
import dreaIcon from '../assets/icons/dreaIcon.png';
import mineduIcon from '../assets/icons/MineduIcon.png';
import CNEIcon from '../assets/icons/CNEIcon.png';
import PeruEducaIcon from '../assets/icons/PeruEducaIcon.png';
import escaleIcon from '../assets/icons/escaleIcon.jpg';
import pronabecIcon from '../assets/icons/pronabecIcon.png';
import qaliWarmaICon from '../assets/icons/qaliWarmaIcon.jpg';
import tutoriaICon from '../assets/icons/TutoriaICon.png';
import siseVeICon from '../assets/icons/siseVeIcon.png';
import aprendoCasaIcon from '../assets/icons/aprendoCasaIcon.png';
import prevaedIcon from '../assets/icons/PREVAEDIcon.jpg';

import './../styles/VirtualPlatforms.css';
import backgroundPlatforms from './../assets/backgrounds/backgroundPlatforms.svg';

const VirtualPlatforms = () => {
    return(
        <>
        <section className="Platforms">
            <div className="Platforms-container">
                <div className="Platforms-item">
                    <a href="https://www.pronabec.gob.pe/beca-18/" className='Platforms-item-link' target="_blank">
                        <img src={beca18ICon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://www.dreapurimac.gob.pe/inicio/" className='Platforms-item-link' target="_blank">
                        <img src={dreaIcon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://www.gob.pe/minedu" className='Platforms-item-link' target="_blank">
                        <img src={mineduIcon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://www.gob.pe/cne" className='Platforms-item-link' target="_blank">
                        <img src={CNEIcon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://www.perueduca.pe/#/home" className='Platforms-item-link' target="_blank">
                        <img src={PeruEducaIcon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://escale.minedu.gob.pe/" className='Platforms-item-link' target="_blank">
                        <img src={escaleIcon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://www.gob.pe/pronabec" className='Platforms-item-link' target="_blank">
                        <img src={pronabecIcon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://www.gob.pe/qaliwarma" className='Platforms-item-link' target="_blank">
                        <img src={qaliWarmaICon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="http://tutoria.minedu.gob.pe/" className='Platforms-item-link' target="_blank">
                        <img src={tutoriaICon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="http://www.siseve.pe/Web/" className='Platforms-item-link' target="_blank">
                        <img src={siseVeICon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://aprendoencasa.pe/" className='Platforms-item-link' target="_blank">
                        <img src={aprendoCasaIcon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
                <div className="Platforms-item">
                    <a href="https://dreancash-prevaed.edu.pe/#:~:text=El%20PREVAED%20(Programa%20Presupuestal%200068,inducidos%20por%20la%20acci%C3%B3n%20humana." className='Platforms-item-link' target="_blank">
                        <img src={prevaedIcon} alt="icon" className='Platforms-item-icon' />
                    </a>
                </div>
            </div>
            <div className='Platforms-container-background'>
                <img className='Platforms-background' src={backgroundPlatforms} alt="background" />
            </div>
        </section>
        
        </>
    )
}

export default VirtualPlatforms;