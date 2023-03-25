import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/context";

const Register = () => {
        const { actions } = useContext(Context)
    return (
        <div 
        style={{ borderRadius: '5px', minHeight: '100vh' }}
        className="container mt-4">
            <div 
            style={{ borderRadius: '5px' }}
            className="border border-dark shadow-lg m-4">
                <div className="m-4">
                    <h1>Registro</h1>
                    <form>
                        <div className="row d-flex justify-content-around p-2">
                            <div className="form-outline mb-4 col-6">
                                <input 
                                onChange={actions.handleChange}
                                type="text" 
                                id="name"
                                name="name"
                                className="form-control" />
                                <label 
                                className="form-label" 
                                htmlFor="name">Nombre</label>
                            </div>
                            <div className="form-outline mb-4 col-6">
                                <input 
                                onChange={actions.handleChange}
                                type="text" 
                                id="lastName"
                                name="lastName" 
                                className="form-control" />
                                <label 
                                className="form-label" 
                                htmlFor="lastName">Apellido</label>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-around p-2">
                        <div className="form-outline mb-4 col-6">
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
                        <div className="form-outline mb-4 col-6">
                            <input 
                            onChange={actions.handleChange}
                            type="password" 
                            id="password"
                            name="password"
                            className="form-control" />
                            <label 
                            className="form-label" 
                            htmlFor="password">Contraseña</label> 
                        </div>
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary btn-block mb-4">Enviar</button>
                        </div>
                        <div className="text-center">
                            <p>¿Ya eres miembro? <Link to="/Login">Ingresa</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Register;