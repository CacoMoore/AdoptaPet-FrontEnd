import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const pawn = <FontAwesomeIcon icon={faPaw} />

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container border">
                    <div className="row-12">
                        <div className="col-6"><Link
                            to="/info"
                            className="text-white text-decoration-none">AdoptaPet {pawn} 2023</Link></div>
                        <div className="col-6">
                            <h3>Contacto</h3>
                            <p>Correo</p>
                            <p>Número</p>
                        </div>
                    </div>
                    <div className="d-flex border">
                        <div className="col-6">Acá debe ir el mapa de la fundación</div>
                        <div className="col-6">
                            <p>IG</p>
                            <p>WSP</p>
                            <p>FB</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Footer;