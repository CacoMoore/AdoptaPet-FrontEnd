import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const PhotoGallery = () => {

    const fav = <FontAwesomeIcon icon={faHeart} />


    return <>

        <div className="container pb-5 mt-5">
            <form>
                <div className="row">
                    <div className="col-md-3 d-flex flex-column mb-3">

                        <label>Tamaño De Mascota</label>
                        <select name="Gender" type='text' className="selector-size rounded-pill px-5 py-1" >
                            <option className="p-5 ">Seleccione</option>
                            <option>Pequeño</option>
                            <option>Mediano</option>
                            <option>Grande</option>
                        </select>

                    </div>

                    <div className="col-md-3 d-flex flex-column mb-3">

                        <label >Especie</label>
                        <select name="Gender" type='text' className="selector-size rounded-pill px-5 py-1 " >
                            <option className="p-5">Seleccione</option>
                            <option>Perro</option>
                            <option>GAto</option>
                            
                        </select>

                    </div>

                    <div className="col-md-3 d-flex flex-column mb-3">
 
                        <label >Género</label>
                        <select name="Gender" type='text' className="selector-size rounded-pill px-5 py-1 " >
                            <option className="p-5">Seleccione</option>
                            <option>Hembra</option>
                            <option>Macho</option>
                           
                        </select>

                    </div>

                    <div className="col-md-3 ">

                    <button type="button" class="btn btn-primary mt-3 px-5 rounded-pill">Buscar</button>

                    </div>


                    
                </div>
            </form>
        </div>

        <div>
            <div className="container-lg">
                <div className="row ">
                    <div className="col-md-3 mb-5">
                        <div className="card border border-white shadow container-photo-card">
                            <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" className="card-img-top image-size-for-card" alt="..."  
                              />
                            <div className="card-body">
                                <h5 className="card-title text-center">Tofy</h5>
                                <div className="d-flex justify-content-evenly ">
                                    <span>Macho</span>
                                    <button type="button" class="btn btn-light ">{fav}</button>
                                    <span>Perro</span>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 mb-5">
                        <div className="card border border-white shadow">
                            <img src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg" className="card-img-top image-size-for-card" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Fofi</h5>
                                <div className="d-flex justify-content-evenly">
                                    <span>Macho</span>
                                    <button type="button" class="btn btn-light ">{fav}</button>
                                    <span>Perro</span>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 mb-5">
                        <div className="card border border-white shadow">
                            <img src="https://cdn1.epicgames.com/ue/product/Screenshot/1-1920x1080-891eead1cce612d01383427435066dab.png?resize=1&w=1920" className="card-img-top image-size-for-card" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Sappy</h5>
                                <div className="d-flex justify-content-evenly">
                                    <span>Macho</span>
                                    <button type="button" class="btn btn-light ">{fav}</button>
                                    <span>Perro</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <div className="card border border-white shadow">
                            <img src="https://media.allure.com/photos/62b333877389827cf6e080f9/16:9/w_2499,h_1405,c_limit/Is%20it%20ever%20ok%20to%20dye%20your%20dog's%20fur" className="card-img-top image-size-for-card" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Fifi</h5>
                                <div className="d-flex justify-content-evenly">
                                    <span>Macho</span>
                                    <button type="button" class="btn btn-light ">{fav}</button>
                                    <span>Perro</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <div className="card border border-white shadow">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGQmjhg0g5rasipm1XJJICEGRoeWUydk3NQ&usqp=CAU" className="card-img-top image-size-for-card " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Ofi</h5>
                                <div className="d-flex justify-content-evenly ">
                                    <span>Macho</span>
                                    <button type="button" class="btn btn-light ">{fav}</button>
                                    <span>Perro</span>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
}

export default PhotoGallery