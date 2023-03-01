'use strict';
import logo from './../assets/img/logoUgel.png';
import LoginIcon from './../assets/icons/loginIcon.svg';
import './../styles/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <header id='header' className='header' >
        <nav className='header-nav' id='header-nav'>
          <div className='header-nav-container'>
            <NavLink to="/" className='header-nav__logo-container'>
              <img src={logo} alt='Logo Web' className='header-nav__logo' />
            </NavLink>
            <figure className='header-nav__menu-icon-container' id='headerNavMenuIconContainer'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='header-nav__menu-icon' id='headerNavMenuIcon'>
                <path d='M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z'></path>
              </svg>
            </figure>
            <ul className='header-nav__link-list' id='headerNavLinkList'>
              <li className='header-nav__link-item'>
                <NavLink to='/' className='header-nav__link'>INICIO</NavLink>
              </li>
              <li className='header-nav__link-item'>
                <NavLink to='/INSTITUCION' className='header-nav__link' id='headerNavlink1'>INSTITUCIÓN</NavLink>
                <div className='header-nav__link-item-icon-container' id='headerNavSubListRow'>
                  <i className="fas fa-angle-down"></i>
                </div>
                <ol className='header-nav__sub-list' id='headerNavSubList'>
                  <a href="#" className='header-nav__sub-list-item'>¿Quiénes somos?</a>
                  <a href="#" className='header-nav__sub-list-item'>Reseña Historica</a>
                  <a href="#" className='header-nav__sub-list-item'>Visión</a>
                  <a href="#" className='header-nav__sub-list-item'>Misión</a>
                  <a href="#" className='header-nav__sub-list-item'>Organigrama</a>
                  <a href="#" className='header-nav__sub-list-item'>Funciones Generales</a>
                  <a href="#" className='header-nav__sub-list-item'>Normatividad Nacional</a>
                </ol>
              </li>

              <li className='header-nav__link-item'>
                <a to='/nosotros' className='header-nav__link'>DIRECCIÓN</a>
                <div className='header-nav__link-item-icon-container' id='headerNavSubListRow2'>
                  <i className="fas fa-angle-down"></i>
                </div>
                <ol className='header-nav__sub-list' id='headerNavSubList2'>
                  <a href="#" className='header-nav__sub-list-item'>Despacho</a>
                  <a href="#" className='header-nav__sub-list-item'>Funciones</a>
                  <a href="#" className='header-nav__sub-list-item'>Secretaria</a>
                  <a href="#" className='header-nav__sub-list-item'>Imagen</a>
                  <a href="#" className='header-nav__sub-list-item'>Institucional</a>
                  <a href="#" className='header-nav__sub-list-item'>Tramite documentario</a>
                </ol>
              </li>
              <li className='header-nav__link-item'>
                <a to='/nosotros' className='header-nav__link'>ÁREAS DE GESTIÓN</a>
                <div className='header-nav__link-item-icon-container'id='headerNavSubListRow3'>
                  <i className="fas fa-angle-down"></i>
                </div>
                <ol className='header-nav__sub-list' id='headerNavSubList3'>
                  <a href="#" className='header-nav__sub-list-item'>Gestión Administrativa</a>

                  <a href="#" className='header-nav__sub-list-item'>Gestión Institucional</a>
                  <a href="#" className='header-nav__sub-list-item'>Gestión Pedagogica</a>
                  <a href="#" className='header-nav__sub-list-item'>Asesoría Jurídica</a>
                  <a href="#" className='header-nav__sub-list-item'>Control Institucional</a>
                  <a href="#" className='header-nav__sub-list-item'>Procesos Administrativos</a>
                </ol>
              </li>
              <li className='header-nav__link-item'>
                <a to='/nosotros' className='header-nav__link'>CONTACTENOS</a>
              </li>
              <a to='/' className='header-nav__login-container'>
                <svg className='header-nav__icon-login' width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id='loginICon' className='header-nav__icon-login' d="M51.8909 8.78341C68.3877 24.1618 64.6088 42.4877 54.0791 53.7175M47.2957 5.93875C44.0134 2.87528 36.4276 2.3647 33.0724 2C15.7907 2 2 14.6966 2 31.9783C2 40.6062 5.10513 48.8562 10.7528 54.5167M10.7528 54.5167C16.4174 60.1943 23.3245 63.4883 31.9783 63.4883C39.8009 63.4883 48.1277 60.0646 54.0791 53.7175M10.7528 54.5167C11.718 50.9427 14.8666 43.2694 22.5691 39.4182C25.6325 42.7005 33.7726 47.2957 41.8252 39.4182C44.2322 39.7606 50.0528 43.1 54.0791 53.7175M22.5691 23.4443C21.6938 27.1643 26.7266 36.3547 31.9783 36.3547C37.7719 36.3547 41.1687 27.6019 41.1687 23.4443C41.1687 14.667 28.2584 8.78341 23.4443 19.2868" stroke="white" strokeWidth="4"/>
                </svg>
              </a>

              <li className='header-nav__link-item header-nav__link-item--close-icon-container'
                id='headerNavCloseIconContainer'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                  fill='white' className='header-nav__close-icon' id='headerNavMenuIcon' >
                  <path
                    d='M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z'>
                  </path>
                  <path
                    d='M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z'>
                  </path>
                </svg>
              </li>
            </ul>
          </div>
        </nav>
    </header>   
    );
}
export default Header;

  window.document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header');
    const headerNav = document.getElementById('header-nav');
    const headerNavMenuIcon = document.getElementById('headerNavMenuIcon');
    const headerNavLinks = [...document.querySelectorAll('.header-nav__link')];
    const headerNavIconRows = [...document.querySelectorAll('.fas')];
    const headerNavSubListItems = [...document.querySelectorAll('.header-nav__sub-list-item')];

    const headerNavLinkList = document.getElementById('headerNavLinkList');
    const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
    const headerNavCloseIconContainer = document.getElementById('headerNavCloseIconContainer');
    const loginICon = document.getElementById('loginICon');
    

    //MENU MOBILE
    const headerNavSubListRow1 = window.document.getElementById('headerNavSubListRow');
    const headerNavSubList1 = window.document.getElementById('headerNavSubList');
    let contador = 1;
    headerNavSubListRow1.addEventListener('click', ()=> {
      if (contador % 2 === 0) {
        headerNavSubList1.classList.remove('header-nav__sub-list--active')
        headerNavSubListRow1.classList.remove('header-nav__link-item-icon-container--click');

        contador ++;
      }
      else{
        headerNavSubList1.classList.add('header-nav__sub-list--active')
        headerNavSubListRow1.classList.add('header-nav__link-item-icon-container--click');
        contador ++;
      }
    })

    const headerNavSubListRow2 = document.getElementById('headerNavSubListRow2');
    const headerNavSubList2 = document.getElementById('headerNavSubList2');
    let contador2 = 1;
    headerNavSubListRow2.addEventListener('click', ()=> {
      if (contador2 % 2 === 0) {
        headerNavSubListRow2.classList.remove('header-nav__link-item-icon-container--click');
        headerNavSubList2.classList.remove('header-nav__sub-list--active')
        contador2 ++;
      }
      else{
        headerNavSubList2.classList.add('header-nav__sub-list--active')
        headerNavSubListRow2.classList.add('header-nav__link-item-icon-container--click');
        contador2 ++;
      }
    })

    const headerNavSubListRow3 = document.getElementById('headerNavSubListRow3');
    const headerNavSubList3 = document.getElementById('headerNavSubList3');
    let contador3 = 1;
    headerNavSubListRow3.addEventListener('click', ()=> {
      if (contador3 % 2 === 0) {
        headerNavSubList3.classList.remove('header-nav__sub-list--active');
        headerNavSubListRow3.classList.remove('header-nav__link-item-icon-container--click');
        contador3 ++;
      }
      else{
        headerNavSubList3.classList.add('header-nav__sub-list--active');
        headerNavSubListRow3.classList.add('header-nav__link-item-icon-container--click');
        contador3 ++;
      }
    })

  
    //ABRIR MENU MOBILE
    const openMenu = () => {
      headerNavLinkList.classList.add('header-nav__link-list--open');
    };
  
    const closeMenu = () => {
      headerNavLinkList.classList.remove('header-nav__link-list--open');
      headerNavSubList1.classList.remove('header-nav__sub-list--active');
      headerNavSubList2.classList.remove('header-nav__sub-list--active');
      headerNavSubList3.classList.remove('header-nav__sub-list--active');
      headerNavSubListRow1.classList.remove('header-nav__link-item-icon-container--click');
      headerNavSubListRow2.classList.remove('header-nav__link-item-icon-container--click');
      headerNavSubListRow3.classList.remove('header-nav__link-item-icon-container--click');
      contador = 1; contador = 2; contador = 3;
    };
  
    headerNavMenuIconContainer.addEventListener('click', openMenu);
    headerNavCloseIconContainer.addEventListener('click', closeMenu);

    //CLOSE MENU
    headerNavLinks.forEach((element) => {
      element.addEventListener('click', closeMenu);

    })

    headerNavSubListItems.forEach(element => {
      element.addEventListener('click', closeMenu);
    })


      
    //MENU DESPLEGABLE WEB  
    //const headerNavlink1 = document.getElementById('headerNavlink1');
    //headerNavSubList1.classList.toggle('header-nav__sub-list--web', headerNavlink1.onmouseover=false );
  

  const windowScroll = () => {
  

  header.classList.toggle('header--scroll', window.scrollY > 0);
  headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
  headerNavMenuIcon.classList.toggle('header-nav__menu-icon--scroll', window.scrollY > 0);
  
  headerNavLinks.forEach((element) => {
      element.classList.toggle('header-nav__link--scroll', window.scrollY > 0);
    });
  
  headerNavIconRows.forEach(element => {
    element.classList.toggle('fas--scroll', window.scrollY > 0);
  });

  loginICon.classList.toggle('header-nav__icon-login--scroll', window.scrollY > 0);
  
    
  }
  window.addEventListener('scroll', windowScroll);

  

  
});


