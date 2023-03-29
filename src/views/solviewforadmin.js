import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import Solcomp from '../components/solcomp';

const Adopform = (props) => {
    const pawn = <FontAwesomeIcon icon={faPaw} />

    return (
        <>
            <div className="container">
                <div className="py-5 text-center">
                    <p className="fs-1">{pawn}</p>
                    <h2>Solicitudes de adopción </h2>
                    <p className="lead">A continuación podras ver las solicitudes de adopción con todos los campos requeridos en el formulario que se ofrece a los usuarios.
                    También podrás borrar de la base de datos aquellas solicitudes que ya no se encuentren vigentes.
                    </p>
                    
                    <p className="lead"><strong>IMPORTANTE:</strong> una vez que borres una solicitud, esta no se podrá recuperar. El usuario tendrá que volver a rellenar el formulario.</p>
                    
                </div>

                <Solcomp 
                    id="1"
                    name="Carolina"
                    lastname="Moore"

                    />

                

                
            </div>
        </>
    );
}

export default Adopform;