import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

  const pawn = <FontAwesomeIcon icon={faPaw} />

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <Link to="/" className="text-white text-decoration-none"><h3>AdoptaPet {pawn}</h3></Link>
          <div class="dropdown">
            <button className="btn btn-primary dropdown-toggle border border-dark shadow-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menú
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Inicio</Link></li>
              <li><Link className="dropdown-item" to="/login">Ingresa</Link></li>
              <li><Link className="dropdown-item" to="/user">Mi cuenta</Link></li>
              <li><Link className="dropdown-item" to="/addpet">Agregar mascota</Link></li>
              <li><Link className="dropdown-item" to="/addpost">Agregar noticia</Link></li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  )
}
export default NavBar;