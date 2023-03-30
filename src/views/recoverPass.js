import { Link } from "react-router-dom";

const RecoverPass = () => {
    function mostrarAlerta() {
        alert("Nuestro equipo te contactará a la brevedad.");
      }
    return (
        <div 
        style={{ borderRadius: '5px', minHeight: '100vh' }}
        className="container mt-4 ">
            <div 
            style={{ borderRadius: '5px' }}
            className="border border-dark shadow-lg m-4 p-2">
                <div className="m-4">
                    <h1>Recuperar contraseña</h1>
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="recoverPass" className="form-control"/>
                            <label className="form-label" htmlFor="recoverPass">Correo</label>
                        </div>

                        <div className="text-center">
                            <Link type="button" className="btn btn-lg text-light mb-4"
                            style={{backgroundColor: "#5BD3C7"}} onClick={mostrarAlerta} to="/">Enviar</Link>
                        </div>
                        <div className="text-center">
                            <p><Link to="/">Volver al Inicio</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default RecoverPass;