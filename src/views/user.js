import { Link } from "react-router-dom";
import { Context } from "../store/context";
import React, { useContext } from "react";


const User = () => {
    const { store } = useContext(Context)
    const { userDescription, loginUser } = store;
    const { name, email, user_id, last_name, phone, rol_id } = loginUser
    const { description, motivation, style } = userDescription;

    if (rol_id === 1 || rol_id === 2) {
        return (
            <div
                style={{ borderRadius: '5px' }}
                className="shadow-lg m-5 p-4 bg-white container">
                <div className="row col-12">
                    <h1>Información personal: </h1>
                    <div id="left" className="col-6 pt-4">
                        <h4>Nombre:</h4>
                        <p> {name} {last_name}  </p>
                        <h4>Teléfono:</h4>
                        <p> {phone}</p>
                    </div>
                    <div id="right" className="col-6 pt-4">
                        <h4>Correo:</h4>
                        <p> {email}</p>
                        <h4>User id:</h4>
                        <p> {user_id}</p>
                    </div>
                    <div className="col-12 pt-4">
                        <h4>Descripción de Usuario:</h4>
                        <p>{description}</p>
                        <h4>Motivación para adoptar:</h4>
                        <p>{motivation}</p>
                        <h4>Estilo de Vida:</h4>
                        <p>{style}</p>
                    </div>
                    <div className="d-flex container">
                        <Link
                            className="btn btn-lg text-light mt-5 col-6"
                            to="/addDescription"
                            style={{ backgroundColor: "#5BD3C7" }}
                        >
                            Edita tu perfil
                        </Link>
                        <Link
                            className="btn btn-lg text-light mt-5 col-6"
                            to="/adopform"
                            style={{ backgroundColor: "#353755" }}>
                            Adopta Aquí
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container p-4">
                <div className="row text-center p-5">
                    <h4 className="">Inicia sesión para ver más información</h4>
                </div>
                <div className="row">
                    <Link
                        className="btn btn-lg text-light"
                        to="/login"
                        style={{ backgroundColor: "#5BD3C7" }}>
                        Iniciar sesión
                    </Link>
                </div>

            </div>

        )
    }
}

export default User;