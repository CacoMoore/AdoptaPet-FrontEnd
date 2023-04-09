import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'


const Adminprofile = () => {

    const pawn = <FontAwesomeIcon icon={faPaw} />

    return (
        <div>
            <div className="container">
                <div className="py-5 text-center">
                    <p className="fs-1">{pawn}</p>
                    <h2>Portal del administrador</h2>
                    <p className="lead">En este portal como fundación o afrupación podran admisnitrar la página web. Podrán ver las solicitudes de adopción y eliminar las que ya no están vigentes,
                        así como podrán agregar nuevos animales para su publicación en la sección de adoptables, marcar los que ya fueron adoptados,
                        podrán ver la lista de usuarios inscritos y sus datos.
                        Por último podrán hacer entradas o postear hostorias en la sección de Blog.
                    </p>

                </div>
                <div className="row py-5 d-grid gap-2 d-md-block d-flex justify-content-center">                
                    <Link to="/addPet">
                        <button 
                            type="button" 
                            className="btn fw-semibold text-start rounded shadow" 
                            style={{ backgroundColor: "#5BD3C7" }}>{pawn} Agregar animales a la galería</button>
                    </Link>
                    <Link to="/solviewforadmin">
                        <button 
                            type="button" 
                            className="btn fw-semibold text-start rounded shadow" 
                            style={{ backgroundColor: "#5BD3C7" }}>{pawn} Ver solicitudes de adopción </button>
                    </Link>
                    <Link to="/">
                        <button 
                            type="button" 
                            className="btn fw-semibold text-start rounded shadow" 
                            style={{ backgroundColor: "#5BD3C7" }}>{pawn} Agregar post al blog </button>
                    </Link>
                </div>




            </div>

        </div>
    )
}
export default Adminprofile;