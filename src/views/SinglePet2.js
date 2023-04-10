import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
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





    const handleSubmit = (data) => {
        if (store.loginUser.rol_id !== "restricted-rol-id") {
            console.log(store.favorite)
            data.rol_id = store.loginUser.rol_id
            actions.addFavorite(props.pet);
            console.log(store.favorite)
        }
    };

    const fav = <FontAwesomeIcon icon={faHeart} />

    return <div className="  div-main-singlepet">
        <div className='container-fluid '>
            <div className='row d-flex  row-singlePet'>
                <div className='col-md-12 text-center column-mt'>
                    <h1>Adoptar</h1>
                </div>

                {/*CARD */}

                <div className='col-md-6 column-mt '>
                    <div class="card height-img-singlePet">
                        <img src={'http://127.0.0.1:8080/uploads/' + petGet.img} alt='' />
                        <div class="card-img-overlay">
                            <h5 class="card-title text-dark text-end">{fav}</h5>

                        </div>

                    </div>

                    {/*BOTONES */}

                    <div className='d-flex justify-content-center'>
                        <button type="button" class="btn btn-dark btn-lg mt-5 me-3">Adoptar</button>
                        <button type="button" class="btn btn-dark btn-lg mt-5 me-3">Favorito</button>

                        {rol_id === 1 ? (
                            <>

                                <button onClick={() => deletePetId()} type="button" class="btn btn-dark btn-lg mt-5 me-3">Eliminar</button>
                                <Link to={`/pex/${id}`}><button type="button" class="btn btn-dark btn-lg mt-5 ">Editar</button></Link>
                            </>
                        ) : null}

                    </div>

                </div>

                {/*INFORMACION */}

                <div className="col-md-6 ps-5">


                    <h1 class='text-center mb-5'>Información</h1>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Nombre:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{petGet.name}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Genero:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{petGet.gender}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Edad:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{petGet.age}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Especie:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{petGet.species}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Tamaño:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{petGet.size}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Historial medico:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{petGet.medical_history}</span>
                    </div>

                    <div className="mb-3 ">
                        <span className="fs-4">
                            Descripción:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{petGet.description}</span>
                    </div>

                    {/**/}

                    <div className="mb-3 ">
                        <span className="fs-4">
                            Disponibilidad:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{petGet.is_adopted === true ? 'Sin adoptar' : 'Ya adoptado'}</span>
                    </div>


                </div>

            </div>

        </div>
    </div>

}

export default SinglePet2