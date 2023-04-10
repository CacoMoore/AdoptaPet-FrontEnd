import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/context";

const Register = () => {
    const { actions } = useContext(Context)
    const navigate = useNavigate();
    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
            className="container mt-4">
            <div
                style={{ borderRadius: '5px' }}
                className="border shadow-lg m-4">
                <div className="m-4">
                    <h1>Regístrate aquí...</h1>
                    <form onSubmit={(e) => actions.handleUserRegister(e, navigate)}>
                        <div className="row d-flex justify-content-around p-2">
                            <div className="form-outline mb-4 col-6">
                                <input
                                    onChange={actions.handleChange}
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    maxLength={50}
                                    required
                                    placeholder="Máximo 50 caracteres" />
                                <label
                                    className="form-label"
                                    htmlFor="name">Nombre</label>
                            </div>
                            <div className="form-outline mb-4 col-6">
                                <input
                                    onChange={actions.handleChange}
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    className="form-control"
                                    maxLength={50}
                                    required
                                    placeholder="Máximo 50 caracteres" />
                                <label
                                    className="form-label"
                                    htmlFor="lastName">Apellidos</label>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-around p-2">
                            <div className="form-outline mb-4 col-6">
                                <input
                                    onChange={actions.handleChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    maxLength={50}
                                    required
                                    placeholder="Máximo 50 caracteres" />
                                <label
                                    className="form-label"
                                    htmlFor="email">Correo</label>
                            </div>
                            <div className="form-outline mb-4 col-6">
                                <input
                                    onChange={actions.handleChange}
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Ej: 988887777" />
                                <label
                                    className="form-label"
                                    htmlFor="email">Teléfono</label>
                            </div>
                            <div className="form-outline mb-4 col-6">
                                <input
                                    onChange={actions.handleChange}
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    required
                                    maxLength={10} />
                                <label
                                    className="form-label"
                                    htmlFor="password">Contraseña</label>
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-lg text-light"
                            style={{backgroundColor: "#5BD3C7"}}>Enviar</button>
                        </div>
                        <div className="text-center pt-4">
                            <p>¿Ya eres miembro? <Link to="/Login">Ingresa</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Register;