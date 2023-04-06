import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../store/context";



const SinglePet2 = (props) => {




    const { store, actions } = useContext(Context)


    const { id } = useParams()
    console.log(id)
    const [information, setInformation] = useState()
    useEffect(() => {
        const getPet = async () => {
            const data = await fetch(`http://localhost:8080/pet/${id}`)

            try {
                const pet = await data.json()
                setInformation(pet)
            } catch (error) {
                console.log('error en la api', error)
            }


        }

        getPet()
        console.log(id)
    }, [id])


    const deletePetId = () => {
        actions.handlePostPetDelete(id)
        alert('Se elimino satisfactoriamente')
    }

    const handleSubmit = (data) => {
        if (store.loginUser.rol_id !== "restricted-rol-id") {
            console.log(store.favorite)
            data.rol_id=store.loginUser.rol_id
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

                <div className='col-md-6 column-mt'>
                    <div class="card ">
                        <img src='http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg' alt='' />
                        <div class="card-img-overlay">
                            <h5 class="card-title text-dark text-end">{fav}</h5>

                        </div>

                    </div>

                    {/*BOTONES */}

                    <div className='d-flex justify-content-center'>
                       <Link to="/adopform"> <button type="button" class="btn btn-dark btn-lg mt-5 me-3" >Adoptar</button></Link>
                        <button type="button" class="btn btn-dark btn-lg mt-5 me-3" onClick={handleSubmit}> {fav} </button>
                        <button onClick={() => deletePetId()} type="button" class="btn btn-dark btn-lg mt-5 ">Eliminar</button>
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

                        >{information?.name}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Genero:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{information?.gender}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Edad:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{information?.age}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Especie:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{information?.species}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Tamaño:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{information?.size}</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="fs-4">
                            Historial medico:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{information?.medical_history}</span>
                    </div>

                    <div className="mb-3 ">
                        <span className="fs-4">
                            Descripción:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{information?.description}</span>
                    </div>

                    {/*TEXTAREA */}

                    <div className="mb-3 ">
                        <span className="fs-4">
                            Disponibilidad:
                        </span>

                        <span

                            className="ms-3  fs-5"

                        >{information?.is_adopted === true ? 'Sin adoptar' : 'Ya adoptado'}</span>
                    </div>



                </div>

            </div>

        </div>
    </div>

}

export default SinglePet2