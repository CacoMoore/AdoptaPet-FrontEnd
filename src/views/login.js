import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

const Login = () => {
    const { actions } = useContext(Context)
    return (
        <div 
        style={{ borderRadius: '5px', minHeight: '100vh' }}
        className="container mt-4">
            <div 
            style={{ borderRadius: '5px' }}
            className="border shadow-lg m-4 p-2">
                <div className="m-4">
                    <h1>Ingresa tus datos</h1>
                    <form onSubmit={actions.handleUserLogin}>
                        <div className="form-outline mb-4">
                            <input 
                            onChange={actions.handleChange}
                            type="email" 
                            id="email"
                            name="email"
                            className="form-control" />
                            <label 
                            className="form-label" 
                            htmlFor="email">Correo</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input 
                            onChange={actions.handleChange}
                            type="password" 
                            id="password"
                            name="password"
                            class="form-control" />
                            <label 
                            className="form-label" 
                            htmlFor="password">Contraseña</label>
                        </div>

                        <div className="text-center">
                        <button type="submit" className="btn btn-lg text-light mb-4"
                        style={{backgroundColor: "#5BD3C7"}}>Ingresar</button>
                        </div>
                        <div className="text-center">
                            <p><Link to="/recoverpass">¿Olvidaste tu contraseña?</Link></p>
                        </div>
                        <div className="text-center">
                            <p>¿No eres miembro aún? <Link to="/Register">Regístrate</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Login;