import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../store/context";

const SinglePet2 = (props) => {

    const { store, actions } = useContext(Context)
    const { id } = useParams()
    useEffect(() => {
        actions.getPet(id)
    }, [id, actions])
    const { petGet } = store
    const deletePetId = () => {
        actions.handlePostPetDelete(id)
        alert('Se elimino satisfactoriamente')
    }
    const { loginUser } = store;
    const { rol_id } = loginUser
    const fav = <FontAwesomeIcon icon={faHeart} />
    const pawn = <FontAwesomeIcon icon={faPaw} />


    return <div>
        <div className="  div-main-singlepet">
            <div className='container '>
                <div className='row singlePet'>
                    <div className='col-md-12 text-center'>
                        <div className="py-5 text-center">
                            <p className="fs-1">{pawn}</p>
                            <h2>Perfil individual </h2>
                            <p className="lead">Aquí encontrarás la información completada de cada mascota.</p>
                            <p className="lead">Revisa previamente en el apartado de información las <Link to="/info" ><strong>condiciones de adopción</strong> </Link> antes de rellenar el formulario. Podremos preguntar por su cumplimiento a la hora de concretar la adopción.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-6 d-flex justify-content-end'>
                            <img src={'http://127.0.0.1:8080/uploads/' + petGet.img} className="img-fluid img-thumbnail" alt='imagen mascota' />
                        </div>



                        <div className='col-5 '>
                            <ol className="list-group list-group">
                                <li className="row list-group-item d-flex justify-content-between align-items-start">
                                    <div className="col w-25 ms-2 me-auto fw-bold">
                                        Nombre
                                    </div>
                                    <div className="col w-75 ms-2 me-auto fw-bold">
                                        {petGet.name}
                                    </div>
                                </li>
                                <li className="row list-group-item d-flex justify-content-between align-items-start">
                                    <div className="col w-25 ms-2 me-auto fw-bold">
                                        Género
                                    </div>
                                    <div className="col w-75 ms-2 me-auto fw-bold">
                                        {petGet.gender}
                                    </div>
                                </li>
                                <li className="row list-group-item d-flex justify-content-between align-items-start">
                                    <div className="col w-25 ms-2 me-auto fw-bold">
                                        Edad
                                    </div>
                                    <div className="col w-75 ms-2 me-auto fw-bold">
                                        {petGet.age}
                                    </div>
                                </li>
                                <li className="row list-group-item d-flex justify-content-between align-items-start">
                                    <div className="col w-25 ms-2 me-auto">
                                        Especie
                                    </div>
                                    <div className="col w-75 ms-2 me-auto">
                                        {petGet.species}
                                    </div>
                                </li>
                                <li className="row list-group-item d-flex justify-content-between align-items-start">
                                    <div className="col w-25 ms-2 me-auto">
                                        Tamaño
                                    </div>
                                    <div className="col w-75 ms-2 me-auto">
                                        {petGet.size}
                                    </div>
                                </li>
                                <li className="row list-group-item d-flex justify-content-between align-items-start">
                                    <div className="col w-25 ms-2 me-auto">
                                        Historial médico
                                    </div>
                                    <div className="col w-75 ms-2 me-auto">
                                        {petGet.medical_history}
                                    </div>
                                </li>
                                <li className="row list-group-item d-flex justify-content-between align-items-start">
                                    <div className="col w-25 ms-2 me-auto">
                                        Descripción
                                    </div>
                                    <div className="col w-75 ms-2 me-auto">
                                        {petGet.description}
                                    </div>
                                </li>
                                <li className="row list-group-item d-flex justify-content-between align-items-start">
                                    <div className="col w-25 ms-2 me-auto">
                                        Disponibilidad
                                    </div>
                                    <div className="col w-75 ms-2 me-auto">
                                        {petGet.is_adopted === true ? 'Sin adoptar' : 'Ya adoptado'}
                                    </div>
                                </li>

                            </ol>

                            <div className='d-flex justify-content-between'>
                                <button
                                    onClick={actions.addFavorite}
                                    type="button"
                                    style={{ backgroundColor: "#353755" }}
                                    class="btn btn-lg text-light mt-5 me-3">{fav}</button>

                                <Link
                                    style={{ backgroundColor: "#353755" }}
                                    to="/adopform" type="button" class="btn btn-lg text-light mt-5 me-3">Adoptar</Link>


                                {rol_id === 1 ? (
                                    <>
                                        <button onClick={() => deletePetId()} type="button" class="btn btn-dark btn-lg mt-5 me-3" style={{ backgroundColor: "#353755" }}>Eliminar</button>
                                        <Link to={`/pex/${id}`}><button type="button" class="btn btn-dark btn-lg mt-5 " style={{ backgroundColor: "#353755" }}>Editar</button></Link>
                                    </>
                                ) : null}
                            </div>



                        </div>
                    </div>

                </div>



            </div>
        </div>
    </div>

}

export default SinglePet2