import './../styles/ComplaintsBook.css';
import book from './../assets/backgrounds/bookR.svg';
const ComplaintsBook = () => {
    return(
<>
    <section className="Complaints-container">    
    <h2 className='Complaint-title'>Libro de Reclamaciones</h2>   
    <figure className='Complaint-icon-conatiner'>
        <img src={book} alt="" className='Complaint-icon' />
    </figure>
<form className="Complaints-form-container">
  <h2 className='Complaints-form-subtitle'>Identificación del Usuario</h2>
  <div class="form-row">
    <div class="form-group">
      <label for="inputEmail4">DNI</label>
      <input type="text" class="form-control input" placeholder="DNI"/>
    </div>
    <div class="form-group">
      <label for="inputPassword4">Nombres</label>
      <input type="text" class="form-control input"placeholder="Nombres"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Dirección</label>
    <input type="text" class="form-control input" id="inputDireccion" placeholder="Av. Peru N° 999"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Correo</label>
    <input type="text" class="form-control input" id="inputAddress2" placeholder="correo@gmail.com"/>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label for="inputCity">Celular/ Teléfono</label>
      <input type="text" class="form-control input" placeholder="999 999 999"/>
    </div>
  </div>
  <h2 className='Complaints-form-subtitle'>Descripción del reclamo</h2>
  <div class="form-row">
    <div class="form-group">
      <label for="inputEmail4">Asunto</label>
      <input type="text" class="form-control input" placeholder="Motivo de Reclamo"/>
    </div>
    <div class="form-group">
    <label for="inputAddress">Descripción</label>
    <textarea type="text" class="form-control input Complaints-form-area" id="inputDireccion"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary Complaints-from-button">Enviar</button>
</form>
    </section>
</>
    )
}
export default ComplaintsBook;