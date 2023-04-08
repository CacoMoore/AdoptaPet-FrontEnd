import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import Map from "../API/APIMap";


const Footer = (props) => {
    const pawn = <FontAwesomeIcon icon={faPaw} />


    return (
        <div id="footer">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Contáctanos</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser" target="_blank" className="nav-link p-0 text-body-secondary">empatianimal@gmail.com</a></li>
                                <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-body-secondary">+569 738 192 83</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">+569 935 291 93</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Quilpue, Chile</a></li>
                                <li className="nav-item mb-2"><a href="https://web.facebook.com/ColectivoEmpatiaAnimal/about/?ref=page_internal" target="_blank" className="nav-link p-0 text-body-secondary">Facebook</a></li>
                                <li className="nav-item mb-2"><a href="https://www.instagram.com/empatia_animal/" target="_blank" className="nav-link p-0 text-body-secondary">Instagram</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Información</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/photoGallery" className="nav-link p-0 text-body-secondary">Ver mascotas</Link></li>
                                <li className="nav-item mb-2"><Link to="/info" className="nav-link p-0 text-body-secondary">Información de la fundación</Link></li>
                                <li className="nav-item mb-2"><Link to="/info" className="nav-link p-0 text-body-secondary">Colaborar</Link></li>
                                <li className="nav-item mb-2"><Link to="/adopform" className="nav-link p-0 text-body-secondary">Adoptar</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Blog</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Jornadas de adopción</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Historias</Link></li>
                            </ul>
                        </div>


                        <div className="col-md-5 offset-md-1 mb-3">
                            <div className="card" id="cardfooter">
                                <div className="card-body">
                                    <div className="row card mb-3">
                                            <Map />
                                        <div className="card-body">
                                            <h5 className="card-title">Encuéntranos aquí</h5>
                                            <p className="card-text">Encuentra a tu mascota perfecta</p>
                                            <Link to={"/adopform"}>
                                                <button className="btn" id="btn-footer">Adoptar </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2023 AdoptaPet {pawn}, Inc</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-body-emphasis" href="https://web.facebook.com/ColectivoEmpatiaAnimal/about/?ref=page_internal"><svg className="bi" width="24" height="24"></svg>Facebook</a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="https://www.instagram.com/empatia_animal/"><svg className="bi" width="24" height="24"></svg>Instagram</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;