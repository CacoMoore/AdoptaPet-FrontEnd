import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/context";
import { useContext } from "react";

const NavBar = () => {
  const pawn = <FontAwesomeIcon icon={faPaw} />
  const { store } = useContext(Context)
  const { loginUser } = store;
  const { rol_id } = loginUser
  return (
    <div 
    className="row sticky-top"
    id="navbar">
      <nav className="navbar navbar-expand-lg bg ">
        <div className="container">
          <Link to="/">
            <h3 id="logo">AdoptaPet {pawn}</h3>
          </Link>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              id="btn-navbar"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menú
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/">
                  Inicio
                </Link>
              </li>
              <li>
                {rol_id !== 1 && rol_id !== 2 ? (
                  <Link className="dropdown-item" to="/login">
                    Ingresa
                  </Link>
                ) : null}
              </li>

              <li>
                <Link className="dropdown-item" to="/photoGallery">
                  Galería
                </Link>
              </li>
              <li>
                {rol_id === 2 ? (
                  <Link className="dropdown-item" to="/user">
                    Mi cuenta
                  </Link>
                ) : null}
              </li>
              <li>
                {rol_id === 1 ? (
                  <Link className="dropdown-item" to="/adminprofile">
                    Administrador
                  </Link>
                ) : null}
              </li>
              <li>
                {rol_id === 2 ? (
                  <a href="/"> 
                    Cerrar sesión</a>
                ) : null}
              </li>
              <li>
                {rol_id === 1 ? (
                  <a href="/"> 
                    Cerrar sesión</a>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
