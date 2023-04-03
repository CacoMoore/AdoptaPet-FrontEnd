import { Link } from "react-router-dom";
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

    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
            className="container mt-4">
            <ul className="nav nav-pills justify-content-center m-1" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="btn btn-lg btn-light active m-2" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="bi bi-box-arrow-in-left"></i></button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="btn btn-lg btn-light m-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="bi bi-box-arrow-in-right"></i></button>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
                <div className=" tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div
                        style={{ borderRadius: '5px' }}
                        className="border shadow-lg m-4 p-2">
                        <div className="m-4">
                            <h1 className="pb-4 text-center">Ingreso</h1>
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
                            </form>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <div
                        style={{ borderRadius: '5px' }}
                        className="border shadow-lg m-4">
                        <div className="m-4">
                            <h1 className="pb-4 text-center">Registro</h1>
                            <form onSubmit={actions.handleUserRegister}>
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
                                        style={{ backgroundColor: "#5BD3C7" }}>Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    )
}
export default Login;
