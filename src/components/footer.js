import { Form, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import {faFacebookSquare }from '@fortawesome/fontawesome-svg-core'; '@fortawesome/free-solid-svg-icons'; '@fortawesome/react-fontawesome'*/
import { faPaw } from '@fortawesome/free-solid-svg-icons'



const Footer = (props) => {
    const pawn = <FontAwesomeIcon icon={faPaw} />

    /*const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />

    */
    return (

        <div
            className="row"
            id="footer">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card" id="cardfooter">
                    <div className="card-body">
                        <div className="card mb-3">
                            <img src={props.map} className="card-img-top" alt="map" />
                            <div className="card-body">
                                <h5 className="card-title">Busca dónde adoptar</h5>
                                <p className="card-text">Encuentra a tu mascota perfecta</p>
                                <Link to={"/adopform"}>
                                    <button className="btn" id="btn-footer">Adoptar </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card" id="cardfooter">
                    <div className="card-body">
                        <hi className="d-flex justify-content-center">Contáctanos</hi>
                        <ul className="list-group ">
                            <li className="list-group-item disabled" id="contact-info" aria-disabled="true">
                                empatianimal@gmail.com</li>
                            <li className="list-group-item disabled " id="contact-info" aria-disabled="true">+569 738 192 83 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+569 935 291 93</li>
                            <li className="list-group-item disabled" id="contact-info" aria-disabled="true">Quilpue, Chile</li>
                        </ul>
                        <ul class="list-group list-group-horizontal" id="rrss1">
                            <li class="list-group-item" className="card-img-top" id="rrss" alt="F"> <a target="_blank" class="fcc-btn" href="https://web.facebook.com/ColectivoEmpatiaAnimal/about/?ref=page_internal">Facebook</a> </li>
                            <li class="list-group-item" className="card-img-top" id="rrss" alt="I"> <a target="_blank" class="fcc-btn" href="https://www.instagram.com/empatia_animal/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg class="bi" style={{ width: "30", height: "24" }}></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-body-secondary">© 2023 AdoptaPet {pawn}, Inc</span>
                </div>
            </footer>

        </div>

    )
}

export default Footer;