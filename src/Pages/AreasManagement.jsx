import { NavLink } from 'react-router-dom';
import './../styles/AreasManagement.css';
const AreasManagement = () => {
    return(
        <>
            <section className="Areas-Management-container">
                <div className="Areas-Management-front-container">
                    <h1 className="Areas-Management-front-title">ÁREAS DE GESTIÓN</h1>
                </div>
                <div className="Areas-Management-items-container">
                    <NavLink to='/AREASGESTION/GESTIONADMINISTRATIVA' className="Areas-Management-item-link">GESTIÓN ADMINISTRATIVA</NavLink>
                    <NavLink to='/AREASGESTION/GESTIONINSTITUCIONAL' className="Areas-Management-item-link">GESTIÓN INSTITUCIONAL</NavLink>
                    <a href="" className="Areas-Management-item-link">GESTIÓN PEDAGÓGICA</a>
                    <a href="" className="Areas-Management-item-link">ASESORÍA JURÍDICA</a>
                    <a href="" className="Areas-Management-item-link">CONTROL INSTITUCIONAL</a>
                    <a href="" className="Areas-Management-item-link">PROCESOS ADMINISTRATIVOS</a>
                </div>
            </section>
        </>
    )
}
export default AreasManagement;