import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Formcomp = () => {

    const pawn = <FontAwesomeIcon icon={faPaw} />

    return (
        <div>
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <div className="btn-group-vertical col-md-5 col-lg-4" role="group" aria-label="Vertical button group">
                        <Link to="/info">
                        <button type="button" className="btn my-3 rounded" style={{backgroundColor: "#5BD3C7"}}>Revisa acá los requisitos para adoptar</button>
                        <button type="button" className="btn my-3 rounded" style={{backgroundColor: "#5BD3C7"}}>Quiero Colaborar</button>
                        </Link>
                        <Link to="/photoGallery">
                        <button type="button" className="btn my-3 rounded" style={{backgroundColor: "#5BD3C7"}}>Quiero ver los animales en adopción</button>
                        </Link>
                    </div>
                </div>

                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-5 border-bottom">Solicitud de adopción</h4>
                    <form className="needs-validation" novalidate="">
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">1. Indica el animal que le interesa y por qué busca  adoptar</label>                           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">2. ¿Qué mira a la hora de elegir  un animalito para adoptar?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">3. ¿Qué necesidades y gastos cree que tiene un animalito?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">4. ¿Qué alimentación cree que es la adecuada y qué marca de comida usaría?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">5. ¿Qué piensa sobre la esterilización?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">6. ¿Ha tenido mala experiencia con algún animalito? de ser así indique cuál</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">7. ¿Tiene limitaciones con la edad o preferencia de sexo? Indique cuáles si es que las tiene</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">8. ¿Dónde estará  el animal durante el día y donde dormirá?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">9. ¿Ha tenido un animalito? Cuéntenos su experiencia (indicando especie, sexo, raza, edad, cómo llegó, cómo falleció)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">10. ¿Tiene otros animales actualmente en casa? Cuéntenos algo de ellos: cuántos son, qué relación tiene con ellos, dónde los obtuvo, etc.</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">11. ¿Cuánto tiempo pasaría solo en casa?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">12. ¿Dónde estará el tiempo que este solo?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">13. ¿Qué pasaría si rompe plantas, ropa o zapatos?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">14. ¿Qué opina sobre las familias que tienen dentro de la casa a sus animales y duermen con ellos? </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">15. ¿Cuánto sería el máximo que gastaría en una emergencia veterinaria? </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">16. Según la especie que desee adoptar ¿conoces las vacunas que necesita? </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">17. Nuestros animales son rescatados de abandono,  muchas veces no se conoce a los padres. En caso de querer adoptar perro, ¿qué pasaría si el tamaño definitivo no era el que usted esperaba cuando sea adulto? </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">18. ¿Cuenta con vehículo?  </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">19. En caso de que quieras adoptar un perro ¿Cómo serían sus paseos diarios? </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <p className="fw-semibold border-bottom mt-5"> SI BUSCA ADOPTAR UN GATO Y YA TIENE OTRO EN SU HOGAR... </p>
                        <p className="mb-4">Existen enfermedades que los gatos pueden portar sin manifestar síntomas, es por eso que se realiza esta sección y así podamos evitar enfermedades teniendo la adecuada información.</p>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">20. ¿Cuenta su gatito con su examen retroviral negativo? </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO, no he realizado el examen o su examen retroviral es positivo </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI, cuenta con su examen retroviral negativo </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">21. ¿Esta vacunado contra la leucemia su gatito?</label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO, no esta vacunado contra la leucemia </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI, esta vacunado contra la leucemia </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">22. ¿Su gatito es indoor o outdoor?</label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">Indoor (vive solo al interior del hogar) </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">Outdoor (vive en el interior y también sale a la calle) </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">23. Si ya tiene otro  gato en casa, ¿qué enriquecimiento ambiental  le tiene? por ejemplo: rascadores, fuente de agua eléctrica, Juguetes interactivos, etc </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <p className="fw-semibold mb-4 border-bottom mt-5"> VIVIENDA DESTINADA AL ANIMAL </p>
                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">24. Indica el tipo de vivienda y su tamaño </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">25. ¿Dispone de jardín, patio o terraza? </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">26. ¿Están bien cerrados los límites de vivienda a la calle? </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">27. En caso de departamento, tiene mallas de seguridad? </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">28. ¿Vivienda propia o en arriendo?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">29. ¿Tiene conocimiento el dueño/a de la vivienda o Jefe de hogar de que usted va adoptar a un animal? ¿Está de acuerdo?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">30. ¿Existe la posibilidad de una mudanza próximamente? </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <p className="fw-semibold mb-4 border-bottom mt-5"> FAMILIA </p>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">31. ¿Quién compone su familia que habita el hogar? Si tiene niños mencionar edades</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">32. ¿Saben todos que adoptaran? ¿Entre quienes tomaron la decisión?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">33. Si es soltero y vives solo, ¿qué harías si a tu pareja no le gusta su animal de compañía?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">34. Si vive con padres, ¿qué pasará cuando  se independice?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">35. ¿Qué piensa de la convivencia de bebés con animales? ¿Cree que son compatibles? ¿Por qué?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">36. ¿Hay personas con alergias en su familia? </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <p className="fw-semibold mb-4 border-bottom mt-5"> OCUPACIONES, TIEMPO LIBRE, OTROS ... </p>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">37. ¿Trabaja actualmente? </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">38. ¿Tiene estabilidad Laboral?  </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">39. ¿Cuál es su horario de trabajo?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">40. ¿A qué dedica su tiempo libre? (hobbies) </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">41. ¿Qué suele hacer en las vacaciones de verano?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">42. Supongamos. Si es extranjero, ¿qué pasaría con el animal si regresa a su país? (O si es chileno, y se fuese a vivir al extranjero)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">43. ¿Cuenta con la solvencia económica para seguir con  una alimentación súper premium para su animalito adoptado?  </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="exampleFormControlTextarea1" className="form-label fw-semibold">44. ¿Esta de acuerdo con las condiciones  para adoptar y su seguimiento? </label>
                            <div className="">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">NO </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">SI </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 my-5">
                            <button className="btn" style={{backgroundColor: "#5BD3C7"}} type="submit">Enviar solicitud</button>
                        </div>




                    </form>
                </div>
            </div>

        </div>
    )
}
export default Formcomp;