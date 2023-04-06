import { Link } from "react-router-dom";
import { Context } from "../store/context";
import React, { useContext } from "react";
import Favorites from "../components/favorite";


const User = () => {
    const { store, actions } = useContext(Context)
    const { userDescription, loginUser, user_id, email } = store;
    const { name, last_name, phone, rol_id } = loginUser
    const { description, motivation, style } = userDescription;

    if (rol_id === 1 || rol_id === 2) {
        return (
            <div
                style={{ borderRadius: '5px', minHeight: '100vh' }}
                className="shadow-lg mt-5 mb-5 p-5 bg-white container">
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
                            Editar perfil
                        </Link>
                        <Link
                            className="btn btn-lg text-light mt-5 col-6"
                            to="/adopform"
                            style={{ backgroundColor: "#353755" }}>
                            Adopta Aquí
                        </Link>
                    </div>

                    <div className="card mb-4 border" id="cardFavorites">
                        <h1>Favoritos</h1>
                        <div className="row border">
                            <div className=" border ">
                                <Favorites />
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <button
                            onClick={actions.deleteUser}
                            type="button" className="btn btn-lg btn-danger w-100">
                            Eliminar perfil
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container p-4">
                <div className="row text-center p-5">
                    <h4 className="">Ups!... Al parecer no has iniciado sesión. </h4>
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