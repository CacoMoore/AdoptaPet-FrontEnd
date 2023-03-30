import { Link } from "react-router-dom";
import { Context } from "../store/context";
import React, { useContext } from "react";


const User = () => {
    const { store } = useContext(Context)
    const { userDescription, loginUser } = store;
    const { name, email, user_id, last_name, phone, rol_id } = loginUser
    const { description, motivation, style } = userDescription;


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

                {rol_id === 1 || rol_id === 2 ? (
                    <div className="d-flex container">
                        <Link
                            className="btn btn-lg text-light mt-5 w-100"
                            to="/addDescription"
                            style={{ backgroundColor: "#5BD3C7" }}
                        >
                            Edita tu perfil
                        </Link>
                        <Link
                            className="btn btn-lg text-light mt-5"
                            to="/adopform"
                            style={{ backgroundColor: "#353755" }}>
                            Adopta Aquí
                        </Link>
                    </div>
                ) : null}
            </div>

            <div style={{ borderRadius: '5px' }} className="border border-dark p-4 mt-4">
                <h1>Galería de Favoritos</h1>
                <div className="row col-12 mt-4 text-center">
                    <div className="col-4">
                        <div className="card h-100">
                            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">NOMBRE</h5>
                            </div>
                            <div className="p-2">
                                <Link to="/card" className="btn btn-primary w-100">Leer más...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User;