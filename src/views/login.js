import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/context";


const Login = () => {
    const { actions } = useContext(Context)
    const [passwordType, setPasswordType] = useState("password");

    const handleMouseDown = () => {
        setPasswordType("text");
    };

    const handleMouseUp = () => {
        setPasswordType("password");
    };

    const navigate = useNavigate();


    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
            className="container mt-4">
            <div className=" tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                tabindex="0">
                <div
                    style={{ borderRadius: '5px' }}
                    className="border shadow-lg m-4 p-2">
                    <div className="m-4">
                        <h1 className="pb-4">Ingresa aquí...</h1>
                        <form onSubmit={(e) => actions.handleUserLogin(e, navigate)}>
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
                                    type={passwordType}
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    onMouseDown={handleMouseDown}
                                    onMouseUp={handleMouseUp}
                                    onTouchStart={handleMouseDown}
                                    onTouchEnd={handleMouseUp} />
                                <label
                                    className="form-label"
                                    htmlFor="password">Contraseña</label>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-lg text-light mb-4"
                                    style={{ backgroundColor: "#5BD3C7" }}>Ingresar</button>
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
        </div>

    )
}
export default Login;