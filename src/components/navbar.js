import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/context";
import { useContext } from "react";

const NavBar = () => {
  const pawn = <FontAwesomeIcon icon={faPaw} />;
  const { store } = useContext(Context);
  const { loginUser } = store;
  const { rol_id } = loginUser;
  return (
    <div className="row sticky-top" id="navbar">
      <nav className="navbar navbar-expand-lg bg ">
        <div className="container">
          <Link to="/">
            <h3 id="logo">AdoptaPet {pawn}</h3>
          </Link>

          <div className="dropdown">
            <button
              className="btn text-light border border-dark shadow-lg dropdown-toggle"
              style={{ backgroundColor: "#353755" }}
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
            </ul>
          </div>

          <div>
            {rol_id === 1 && (
              <Link
                id="selector"
                to="/adminprofile"
                style={{ backgroundColor: "#353755" }}
                className="btn text-light border border-dark shadow-lg"
                type="button"
              >
                Administrador
              </Link>
            )}
            {rol_id === 2 && (
              <Link
                id="selector"
                to="/user"
                style={{ backgroundColor: "#353755" }}
                className="btn text-light border border-dark shadow-lg"
                type="button"
              >
                Mi cuenta
              </Link>
            )}
            {rol_id !== 1 && rol_id !== 2 && (
              <Link
                id="selector"
                to="/login"
                style={{ backgroundColor: "#353755" }}
                className="btn text-light border border-dark shadow-lg"
                type="button"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
