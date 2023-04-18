//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { Context } from "../store/context";
import Swal from 'sweetalert2'


const Solcomp = (props) => {

    //const pawn = <FontAwesomeIcon icon={faPaw} />
    const trash = <FontAwesomeIcon icon={faTrash} />
    const { actions } = useContext(Context)

    return (
        <div className="row my-5">
            <div className="accordion col-11" id="accordionExample">

                <div className="accordion-item">

                    <h2 className="accordion-header">
                        <button id="acordionbtn2" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            <div><strong>Solicitud de adopción N° {props.id}</strong> &nbsp;Usuario <strong>{props.user}</strong></div>
                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Formulario</strong>
                            <ul style={{ listStyle: "none" }}>
                                <li className="fw-semibold">1. Indica el animal que le interesa y por qué busca  adoptar
                                    <ul className="fw-normal">{props.query1}</ul>
                                </li>
                                <li className="fw-semibold">2. ¿Qué mira a la hora de elegir  un animalito para adoptar?
                                    <ul className="fw-normal">{props.query2}</ul>
                                </li>
                                <li className="fw-semibold">3. ¿Qué necesidades y gastos cree que tiene un animalito?
                                    <ul className="fw-normal">{props.query3}</ul>
                                </li>
                                <li className="fw-semibold">4. ¿Qué alimentación cree que es la adecuada y qué marca de comida usaría?
                                    <ul className="fw-normal">{props.query4}</ul>
                                </li>
                                <li className="fw-semibold">5. ¿Qué piensa sobre la esterilización?
                                    <ul className="fw-normal">{props.query5}</ul>
                                </li>
                                <li className="fw-semibold">6. ¿Ha tenido mala experiencia con algún animalito? de ser así indique cuál
                                    <ul className="fw-normal">{props.query6}</ul>
                                </li>
                                <li className="fw-semibold">7. ¿Tiene limitaciones con la edad o preferencia de sexo? Indique cuáles si es que las tiene
                                    <ul className="fw-normal">{props.query7}</ul>
                                </li>
                                <li className="fw-semibold">8. ¿Dónde estará  el animal durante el día y donde dormirá?
                                    <ul className="fw-normal">{props.query8}</ul>
                                </li>
                                <li className="fw-semibold">9. ¿Ha tenido un animalito? Cuéntenos su experiencia (indicando especie, sexo, raza, edad, cómo llegó, cómo falleció)
                                    <ul className="fw-normal">{props.query9}</ul>
                                </li>
                                <li className="fw-semibold">10. ¿Tiene otros animales actualmente en casa? Cuéntenos algo de ellos: cuántos son, qué relación tiene con ellos, dónde los obtuvo, etc.
                                    <ul className="fw-normal">{props.query10}</ul>
                                </li>
                                <li className="fw-semibold">11. ¿Cuánto tiempo pasaría solo en casa?
                                    <ul className="fw-normal">{props.query11}</ul>
                                </li>
                                <li className="fw-semibold">12. ¿Dónde estará el tiempo que este solo?
                                    <ul className="fw-normal">{props.query12}</ul>
                                </li>
                                <li className="fw-semibold">13. ¿Qué pasaría si rompe plantas, ropa o zapatos?
                                    <ul className="fw-normal">{props.query13}</ul>
                                </li>
                                <li className="fw-semibold">14. ¿Qué opina sobre las familias que tienen dentro de la casa a sus animales y duermen con ellos?
                                    <ul className="fw-normal">{props.query14}</ul>
                                </li>
                                <li className="fw-semibold">15. ¿Cuánto sería el máximo que gastaría en una emergencia veterinaria?
                                    <ul className="fw-normal">{props.query15}</ul>
                                </li>
                                <li className="fw-semibold">16. Según la especie que desee adoptar ¿conoces las vacunas que necesita?
                                    <ul className="fw-normal">{props.query16}</ul>
                                </li>
                                <li className="fw-semibold">17. Nuestros animales son rescatados de abandono,  muchas veces no se conoce a los padres. En caso de querer adoptar perro, ¿qué pasaría si el tamaño definitivo no era el que usted esperaba cuando sea adulto?
                                    <ul className="fw-normal">{props.query17}</ul>
                                </li>
                                <li className="fw-semibold">18. ¿Cuenta con vehículo?
                                    <ul className="fw-normal">{props.query18}</ul>
                                </li>
                                <li className="fw-semibold">19. En caso de que quieras adoptar un perro ¿Cómo serían sus paseos diarios?
                                    <ul className="fw-normal">{props.query19}</ul>
                                </li>
                                <li className="fw-semibold">20. ¿Cuenta su gatito con su examen retroviral negativo?
                                    <ul className="fw-normal">{props.query20}</ul>
                                </li>
                                <li className="fw-semibold"> 21. ¿Esta vacunado contra la leucemia su gatito?
                                    <ul className="fw-normal">{props.query21}</ul>
                                </li>
                                <li className="fw-semibold">22. ¿Su gatito es indoor o outdoor?
                                    <ul className="fw-normal">{props.query22}</ul>
                                </li>
                                <li className="fw-semibold">23. Si ya tiene otro  gato en casa, ¿qué enriquecimiento ambiental  le tiene? por ejemplo: rascadores, fuente de agua eléctrica, Juguetes interactivos, etc
                                    <ul className="fw-normal">{props.query23}</ul>
                                </li>
                                <li className="fw-semibold">24. Indica el tipo de vivienda y su tamaño
                                    <ul className="fw-normal">{props.query24}</ul>
                                </li>
                                <li className="fw-semibold">25. ¿Dispone de jardín, patio o terraza?
                                    <ul className="fw-normal">{props.query25}</ul>
                                </li>
                                <li className="fw-semibold">26. ¿Están bien cerrados los límites de vivienda a la calle?
                                    <ul className="fw-normal">{props.query26}</ul>
                                </li>
                                <li className="fw-semibold">27. En caso de departamento, tiene mallas de seguridad?
                                    <ul className="fw-normal">{props.query27}</ul>
                                </li>
                                <li className="fw-semibold">28. ¿Vivienda propia o en arriendo?
                                    <ul className="fw-normal">{props.query28}</ul>
                                </li>
                                <li className="fw-semibold">29. ¿Tiene conocimiento el dueño/a de la vivienda o Jefe de hogar de que usted va adoptar a un animal? ¿Está de acuerdo?
                                    <ul className="fw-normal">{props.query29}</ul>
                                </li>
                                <li className="fw-semibold">30. ¿Existe la posibilidad de una mudanza próximamente?
                                    <ul className="fw-normal">{props.query30}</ul>
                                </li>
                                <li className="fw-semibold">31. ¿Quién compone su familia que habita el hogar? Si tiene niños mencionar edades
                                    <ul className="fw-normal">{props.query31}</ul>
                                </li>
                                <li className="fw-semibold">32. ¿Saben todos que adoptaran? ¿Entre quienes tomaron la decisión?
                                    <ul className="fw-normal">{props.query32}</ul>
                                </li>
                                <li className="fw-semibold">33. Si es soltero y vives solo, ¿qué harías si a tu pareja no le gusta su animal de compañía?
                                    <ul className="fw-normal">{props.query33}</ul>
                                </li>
                                <li className="fw-semibold">34. Si vive con padres, ¿qué pasará cuando  se independice?
                                    <ul className="fw-normal">{props.query34}</ul>
                                </li>
                                <li className="fw-semibold">35. ¿Qué piensa de la convivencia de bebés con animales? ¿Cree que son compatibles? ¿Por qué?
                                    <ul className="fw-normal">{props.query35}</ul>
                                </li>
                                <li className="fw-semibold">36. ¿Hay personas con alergias en su familia?
                                    <ul className="fw-normal">{props.query36}</ul>
                                </li>
                                <li className="fw-semibold">37. ¿Trabaja actualmente?
                                    <ul className="fw-normal">{props.query37}</ul>
                                </li>
                                <li className="fw-semibold">38. ¿Tiene estabilidad Laboral?
                                    <ul className="fw-normal">{props.query38}</ul>
                                </li>
                                <li className="fw-semibold">39. ¿Cuál es su horario de trabajo?
                                    <ul className="fw-normal">{props.query39}</ul>
                                </li>
                                <li className="fw-semibold">40. ¿A qué dedica su tiempo libre? (hobbies)
                                    <ul className="fw-normal">{props.query40}</ul>
                                </li>
                                <li className="fw-semibold">41. ¿Qué suele hacer en las vacaciones de verano?
                                    <ul className="fw-normal">{props.query41}</ul>
                                </li>
                                <li className="fw-semibold">42. Supongamos. Si es extranjero, ¿qué pasaría con el animal si regresa a su país? (O si es chileno, y se fuese a vivir al extranjero)
                                    <ul className="fw-normal">{props.query42}</ul>
                                </li>
                                <li className="fw-semibold">43. ¿Cuenta con la solvencia económica para seguir con  una alimentación súper premium para su animalito adoptado?
                                    <ul className="fw-normal">{props.query43}</ul>
                                </li>
                                <li className="fw-semibold">44. ¿Esta de acuerdo con las condiciones  para adoptar y su seguimiento?
                                    <ul className="fw-normal">{props.query44}</ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>

            <button
                className="col-1 btn d-flex justify-content-center pt-3"
                id="acordionbtn2"
                style={{ height: "54px", width: "54px" }}
                onClick={() => {
                    Swal.fire({
                        title: '¿Estás seguro?',
                        text: 'No podrás revertir esta acción',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#5BD3C7',
                        confirmButtonText: 'Sí, borrar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            actions.deleteForm(props.form.id)
                        }
                    })
                }}
            >
                {trash}
            </button>




        </div>
    )
}
export default Solcomp;