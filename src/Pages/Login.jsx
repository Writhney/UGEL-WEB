import './../styles/Login.css';
const Login = () => {
    return(
        <>
        <div className='Login-container'>
            <form className="Login-form" action="">
                <p className='Login-title'>Ingresar</p>
            <input className="Login-input-usuario" type="text" placeholder="Usuario" />
            <input className="Login-input-password" type="password" placeholder="Contraseña" />
            <button className="Login-button">Ingresar</button>
            </form>
            <figure className='Login-image-container'>
                <img className='Login-image' id='image' src="https://i.postimg.cc/ydc5MC9V/fondo.jpg" alt="imagen" />
            </figure>
        </div>
        
        </>
    )
}
export default Login;

