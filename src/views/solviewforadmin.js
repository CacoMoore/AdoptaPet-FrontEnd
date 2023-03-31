import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import Solcomp from '../components/solcomp';


const Adopform = (props) => {
    const pawn = <FontAwesomeIcon icon={faPaw} />

    return (
        <>
            <div className="container">
                <div className="py-5 text-center">
                    <p className="fs-1 ba">{pawn}</p>
                    <h2>Solicitudes de adopción </h2>
                    <p className="lead">A continuación podras ver las solicitudes de adopción con todos los campos requeridos en el formulario que se ofrece a los usuarios.
                        También podrás borrar de la base de datos aquellas solicitudes que ya no se encuentren vigentes.
                    </p>

                    <p className="lead"><strong>IMPORTANTE:</strong> Haz click en el ícono para borrar una solictud. Una vez que la borres, esta no se podrá recuperar. El usuario tendrá que volver a rellenar el formulario.</p>

                </div>

                <div >
                <Solcomp
                            id="1"
                            name="Pedro"
                            lastname="Santibáñez"
                            
                            query1="quiero un perrito"
                            query2="quiero un perrito"
                            query3="quiero un perrito" 
                            query4="quiero un perrito"
                            query5="quiero un perrito"
                            query6="quiero un perrito"
                            query7="quiero un perrito"
                            query8="quiero un perrito"
                            query9="quiero un perrito"
                            query10="quiero un perrito"
                            query11="quiero un perrito"
                            query12="quiero un perrito"
                            query13="quiero un perrito"
                            query14="quiero un perrito"
                            query15="quiero un perrito"
                            query16="quiero un perrito"
                            query17="quiero un perrito"
                            query18="quiero un perrito"
                            query19="quiero un perrito"
                            query20="quiero un perrito"
                            query21="quiero un perrito"
                            query22="quiero un perrito"
                            query23="quiero un perrito"
                            query24="quiero un perrito"
                            query25="quiero un perrito"
                            query26="quiero un perrito"
                            query27="quiero un perrito"
                            query28="quiero un perrito"
                            query29="quiero un perrito"
                            query30="quiero un perrito"
                            query31="quiero un perrito"
                            query32="quiero un perrito"
                            query33="quiero un perrito"
                            query34="quiero un perrito"
                            query35="quiero un perrito"
                            query36="quiero un perrito"
                            query37="quiero un perrito"
                            query38="quiero un perrito"
                            query39="quiero un perrito"
                            query40="quiero un perrito"
                            query41="quiero un perrito"
                            query42="quiero un perrito"
                            query43="quiero un perrito"
                            query44="quiero un perrito"/>
                
                <Solcomp
                            id="2"
                            name="Carolina"
                            lastname="Moore"
                            
                            query1="quiero un perrito"
                            query2="quiero un perrito"
                            query3="quiero un perrito" 
                            query4="quiero un perrito"
                            query5="quiero un perrito"
                            query6="quiero un perrito"
                            query7="quiero un perrito"
                            query8="quiero un perrito"
                            query9="quiero un perrito"
                            query10="quiero un perrito"
                            query11="quiero un perrito"
                            query12="quiero un perrito"
                            query13="quiero un perrito"
                            query14="quiero un perrito"
                            query15="quiero un perrito"
                            query16="quiero un perrito"
                            query17="quiero un perrito"
                            query18="quiero un perrito"
                            query19="quiero un perrito"
                            query20="quiero un perrito"
                            query21="quiero un perrito"
                            query22="quiero un perrito"
                            query23="quiero un perrito"
                            query24="quiero un perrito"
                            query25="quiero un perrito"
                            query26="quiero un perrito"
                            query27="quiero un perrito"
                            query28="quiero un perrito"
                            query29="quiero un perrito"
                            query30="quiero un perrito"
                            query31="quiero un perrito"
                            query32="quiero un perrito"
                            query33="quiero un perrito"
                            query34="quiero un perrito"
                            query35="quiero un perrito"
                            query36="quiero un perrito"
                            query37="quiero un perrito"
                            query38="quiero un perrito"
                            query39="quiero un perrito"
                            query40="quiero un perrito"
                            query41="quiero un perrito"
                            query42="quiero un perrito"
                            query43="quiero un perrito"
                            query44="quiero un perrito"/>
                    
                </div>

                                

            </div>


        </>
    );
}

export default Adopform;