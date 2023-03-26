import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const SinglePet = () => {
    const fav = <FontAwesomeIcon icon={faHeart} />

    return <div className="  div-main-singlepet">
        <div className='container '>
            <div className='row d-flex  row-singlePet'>
                <div className='col-md-6 mt-5'>
                    <div class="card text-bg-dark">
                        <img src='http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg' alt='' />
                        <div class="card-img-overlay">
                            <h5 class="card-title text-dark text-end">{fav}</h5>

                        </div>

                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="button" class="btn btn-dark btn-lg mt-5 ">Adoptar</button>
                    </div>

                </div>
                <div className="col-md-6 ps-5">

                    <form>
                        <h1 class='text-center mb-5'>Informacón</h1>
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



                        <div className="">
                            <label htmlFor='historia' className="fs-4">
                                Historial Medico
                            </label>

                            <textarea
                                id="historia"
                                className="  textarea-SinglePet fs-5 fw-lighter "
                                placeholder="Historial medico"

                            />


                        </div>

                    </form>
                </div>

            </div>

        </div>
    </div>

}

export default SinglePet