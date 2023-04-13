import { NavLink } from 'react-router-dom';
import Book from './../assets/icons/Book.svg';
import Paper from './../assets/icons/Paper.svg';
import Building from './../assets/icons/Building.svg';
import Toolbox from './../assets/icons/Toolbox.svg';
import PeopleSuit from './../assets/icons/PeopleSuit.svg';
import PaperPencil from './../assets/icons/PaperPencil.svg';
import BookOpen from './../assets/icons/BookOpen.svg';
import Puzzle from './../assets/icons/Puzzle.svg';
import Professor from './../assets/icons/iconProfessor.svg';
import Director from './../assets/icons/iconDirector.svg';


import './../styles/BasicButtons.css';
const BasicButtons = () => {
    return(
        <>
        <section className="Basic-buttons-container">
            {/* 
            <div className='Basic-button-item'>
                <a href="#" className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={Book} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>LIBRO DE CAJA</p>
                </a>  
            </div>
            <div className='Basic-button-item'>
                <a href="#" className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={Paper} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>PARTE MENSUAL</p>
                </a>  
            </div>
            <div className='Basic-button-item'>
                <a href="#" className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={Building} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>CONTROL PATRIMONIAL</p>
                </a>  
            </div>
            <div className='Basic-button-item'>
                <a href="#" className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={Toolbox} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>MANTENIMIENTO</p>
                </a>  
            </div>
            */}
            <div className='Basic-button-item'>
                <NavLink to='/' className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={Director} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>HERRAMIENTAS GESTIÓN ESCOLAR</p>
                </NavLink>  
            </div>
            <div className='Basic-button-item'>
                <NavLink to='/' className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={Professor} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>HERRAMIENTAS GESTIÓN DEL AULA</p>
                </NavLink>  
            </div>
            <div className='Basic-button-item'>
                <NavLink to='/CONVOCATORIAS' className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={PeopleSuit} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>CONVOCATORIAS</p>
                </NavLink>  
            </div>
            <div className='Basic-button-item'>
                <NavLink to="/LIBRORECLAMACIONES" className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={BookOpen} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>LIBRO DE RECLAMACIONES</p>
                </NavLink>  
            </div>
            <div className='Basic-button-item'>
                <a target='_blank' href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=16389&id_tema=1&ver=D#.ZDRsKnbMLIW" className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={Puzzle} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>TRANSPARENCIA</p>
                </a>  
            </div>
            <div className='Basic-button-item'>
                <a target='_blank' href='https://drive.google.com/file/d/1cXeIHEmiOPqefXi5t3GnwegdfGDPfMYu/view' className="Basic-button-link-item">
                    <figure className="Basic-button-icon-container">
                        <img src={PaperPencil} alt="icon" className='Basic-button-icon' />
                    </figure>
                    <p className='Basic-button-description'>FUT</p>
                </a>  
            </div>
            
        </section>
        </>
    )
}
export default BasicButtons;