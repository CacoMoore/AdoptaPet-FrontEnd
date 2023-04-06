import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import Solcomp from '../components/solcomp';
import { useState } from "react";


const Adopform = (props) => {
    const pawn = <FontAwesomeIcon icon={faPaw} />

    const { store, actions, setStore } = useContext(Context)
    const [formresponse, setFormresponse] = useState()

    useEffect(() => {
        actions.getForm()
        .then (data => setFormresponse(data))        
    }, [])

    console.log(formresponse)

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
                    {/*component example*/}
                    <Solcomp
                        id="1"
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
                        query44="quiero un perrito" />

                    {formresponse.length > 0 ? (
                        formresponse.map(form => {

                            return <div className="" key={form.id}>
                                <Solcomp form={form}
                                    id={form.id}
                                    user={form.user}

                                    query1={form.query1}
                                    query2={form.query2}
                                    query3={form.query3}
                                    query4={form.query4}
                                    query5={form.query5}
                                    query6={form.query6}
                                    query7={form.query7}
                                    query8={form.query8}
                                    query9={form.query9}
                                    query10={form.query10}
                                    query11={form.query11}
                                    query12={form.query12}
                                    query13={form.query13}
                                    query14={form.query14}
                                    query15={form.query15}
                                    query16={form.query16}
                                    query17={form.query17}
                                    query18={form.query18}
                                    query19={form.query19}
                                    query20={form.query20}
                                    query21={form.query21}
                                    query22={form.query22}
                                    query23={form.query23}
                                    query24={form.query24}
                                    query25={form.query25}
                                    query26={form.query26}
                                    query27={form.query27}
                                    query28={form.query28}
                                    query29={form.query29}
                                    query30={form.query30}
                                    query31={form.query31}
                                    query32={form.query32}
                                    query33={form.query33}
                                    query34={form.query34}
                                    query35={form.query35}
                                    query36={form.query36}
                                    query37={form.query37}
                                    query38={form.query38}
                                    query39={form.query39}
                                    query40={form.query40}
                                    query41={form.query41}
                                    query42={form.query42}
                                    query43={form.query43}
                                    query44={form.query44}
                                />

                            </div>
                        })
                    ) : (
                        <h3>No hay formularios para mostrar</h3>
                    )}




                </div>



            </div>


        </>
    );
}

export default Adopform;