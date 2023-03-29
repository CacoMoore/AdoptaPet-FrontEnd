import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

  const pawn = <FontAwesomeIcon icon={faPaw} />

  return (
    <div 
    className="row"
    id="navbar">
      <nav className="navbar navbar-expand-lg bg">
        <div className="container">
          <Link to="/" ><h3 id="logo" >AdoptaPet {pawn}</h3></Link>
          <div class="dropdown">
            <button className="btn dropdown-toggle" id="btn-navbar"type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menú
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="/">Inicio</Link></li>
              <li><Link className="dropdown-item" to="/login">Ingresa</Link></li>
              <li><Link className="dropdown-item" to="/user">Mi cuenta</Link></li>
              <li><Link className="dropdown-item" to="/addpet">Agregar mascota</Link></li>
              <li><Link className="dropdown-item" to="/addpost">Agregar noticia</Link></li>
              <li><Link className="dropdown-item" to="/adminprofile">Administrador</Link></li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  )
}
export default NavBar;