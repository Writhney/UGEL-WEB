import './../styles/Modal.css';
const Modal = () => {
    return(<>
    <section className="Modal-container" id='modal'>
        <div className="Modal-info">
            <div className='Modal-info-close-icon-container' id='close'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                  fill='white' className='header-nav__close-icon' id='headerNavMenuIcon' >
                  <path
                    d='M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z'>
                  </path>
                  <path
                    d='M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z'>
                  </path>
                </svg>
            </div>
            <a href="" className='Modal-info-link'>
           <figure className="Modal-info-image-container">
                <img className="Modal-info-image" src="https://i.postimg.cc/QCHLbVtT/modal.jpg" alt="" />
            </figure>
            </a>
            <div className="Modal-info-more"> 
            
                
            
            </div>
            
        </div>
    </section>
    </>)
}
export default Modal;

const DocumentReady = () => {
    const modal = window.document.getElementById('modal');
    const close = window.document.getElementById('close');
    console.log('close', close);
    const closeModal = () => {
        modal.classList.add('modal-close');
        console.log('click');
    }
    close.addEventListener('click', closeModal);

}

let a = setInterval(isLoaded, 1000);
function isLoaded (){
    if (document.readyState !== 'loading'){
        DocumentReady();
    }
}