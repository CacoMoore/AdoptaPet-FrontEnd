import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const SinglePet = (props) => {
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
                        <button type="button" class="btn btn-dark btn-lg mt-5 me-3">Adoptar</button>
                        <button type="button" class="btn btn-dark btn-lg mt-5 me-3">Favorito</button>
                        <button type="button" class="btn btn-dark btn-lg mt-5 ">Editar</button>
                    </div>

                </div>

                {/*INFORMACION */}

                <div className="col-md-6 ps-5">

                    <form className='column-mt'>
                        <h1 class='text-center mb-5'>Información</h1>
                        <div className="mb-3 ">
                            <label htmlFor='nombre' className="fs-4">
                                Nombre:
                            </label>

                            <input
                                id='nombre'
                                type='text'
                                placeholder=""
                                className="ms-3 lebel-singlePet bg-white fs-5 fw-lighter"

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='edad' className="fs-4">
                                Edad:
                            </label>

                            <input
                                id='edad'
                                type='text'
                                placeholder=""
                                className="ms-3 lebel-singlePet fs-5 fw-lighter"

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='especie' className="fs-4">
                                Especie:
                            </label>

                            <input
                                id='especie'
                                type='text'
                                placeholder=""
                                className="ms-3 lebel-singlePet fs-5 fw-lighter"

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='sexo' className="fs-4">
                                Sexo:
                            </label>

                            <input
                                id='sexo'
                                type='text'
                                placeholder=""
                                className="ms-3 lebel-singlePet fs-5 fw-lighter"

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='Tamano' className="fs-4">
                                Tamaño:
                            </label>

                            <input
                                id='tamano'
                                type='text'
                                placeholder=""
                                className="ms-3 lebel-singlePet fs-5 fw-lighter"

                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor='edad' className="fs-4">
                                Edad:
                            </label>

                            <input
                                id='edad'
                                type='text'
                                placeholder=""
                                className="ms-3 lebel-singlePet fs-5 fw-lighter bg-white"

                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor='cambiar' className="fs-4">
                                Cambiar - Agregar imagen:
                            </label>

                            <input
                                id='tamano'
                                type='file'
                                placeholder=""
                                className="ms-3 lebel-singlePet fs-5 fw-lighter"

                            />
                        </div>

                        {/*TEXTAREA */}

                        <div className="d-flex flex-column">
                            <label htmlFor='historia' className="fs-4">
                                Historial Medico
                            </label>

                            <textarea
                                id="historia"
                                className="  textarea-SinglePet fs-5 fw-lighter "
                                placeholder=""

                            />


                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor='historia' className="fs-4">
                                descripción
                            </label>

                            <textarea
                                id="historia"
                                className="  textarea-SinglePet fs-5 fw-lighter "
                                placeholder=""

                            />


                        </div>

                    </form>
                </div>

            </div>

        </div>
    </div>

}

export default SinglePet