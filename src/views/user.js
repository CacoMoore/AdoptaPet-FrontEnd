import { Link } from "react-router-dom";

const User = () => {

    return (

        <div
            style={{ borderRadius: '5px' }}
            className="shadow-lg m-5 p-4 bg-white container">
            <div className="row col-12">
                <h1>Información personal:</h1>
                <div className="col-6">
                    <p>Nombre Apellido</p>
                    <p>Teléfono</p>
                    <p>Correo</p>
                    <p>Domicilio</p>
                </div>
                <div className="col-6">
                    <p>Descripción de Usuario</p>
                    <p>Motivación para adoptar</p>
                    <p>Estilo de Vida</p>
                </div>
            </div>
            <div style={{ borderRadius: '5px' }} className="border border-dark p-4 mt-4">
                <h1>Galería de Favoritos</h1>
                <div className="row col-12 mt-4 text-center">
                    <div className="col-3">
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
            <div className="mt-4 d-flex justify-content-center">
            <botton className="btn btn-primary">Quiero Adoptar</botton>
            </div>
        </div>

    )
}
export default User;