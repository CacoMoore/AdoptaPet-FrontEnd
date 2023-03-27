import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Jumbotron = () => {

    const pawn = <FontAwesomeIcon icon={faPaw} />
    let photo = { backgroundImage: `url('https://naturesmiracle.la/cl/wp-content/uploads/sites/2/2020/12/iStock-1013878116-1-scaled.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center"};

    return (
        <div>
            <div className="my-5">
                <div className="p-5 text-center" style={photo}>
                    <div className="container py-5">
                        <h1 className="text-body-emphasis text-light">Somos AdoptaPet</h1>
                        <p className="col-lg-9 mx-auto lead text-light mb-5">
                            Comprometidos por el Bienestar de los Animales Vulnerados. Procuramos su cuidado mientras se encuentran en hogares temporales, y a través de la adopción, buscamos que se concrete y mantenga la tenencia responsble de los mismos.
                        </p>
                        <Link to= "/adopform"> <button type="button" className="btn btn-primary btn-lg mt-5">Adopta Aquí</button> </Link>
                        <button type="button" className="btn btn-secondary btn-lg mt-5">Colabora</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Jumbotron;