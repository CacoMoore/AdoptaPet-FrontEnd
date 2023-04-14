import { useContext } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const Formcomp = () => {
  const { actions } = useContext(Context);

  const pawn = <FontAwesomeIcon icon={faPaw} />;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    actions
      .sendForm(data)
      .then(() => {
        alert("su formulario fue enviado exitosamente");
      })
      .catch(() => {
        alert("debe completar todos los campos");
      });
  };

  return (
    <div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <div
            className="btn-group-vertical"
            role="group"
            aria-label="Vertical button group"
          >
            <Link to="/info">
              <button
                type="butnton"
                className="btn my-3 fw-semibold text-start rounded shadow "
                style={{ backgroundColor: "#5BD3C7" }}
              >
                {pawn} Revisa acá las condiciones para adoptar
              </button>
              <button
                type="button"
                className="btn my-3 fw-semibold text-start rounded shadow "
                style={{ backgroundColor: "#5BD3C7" }}
              >
                {pawn} Quiero Colaborar
              </button>
            </Link>
            <Link to="/photoGallery">
              <button
                type="button"
                className="btn my-3 fw-semibold text-start rounded shadow "
                style={{ backgroundColor: "#5BD3C7" }}
              >
                {pawn} Quiero ver los animales en adopción
              </button>
            </Link>
          </div>
        </div>

        <div className="col-md-7 col-lg-8">
          <h4 className="mb-5 border-bottom">Solicitud de adopción</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="needs-validation"
            novalidate=""
          >
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                1. Indica tu nombre, apellido, número de celular y el nombre del
                animal que te interesa. Por favor cuéntanos por qué buscas
                adoptar.
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query1", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query1?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query1?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                2. ¿Qué mira a la hora de elegir un animalito para adoptar?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query2", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query2?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query2?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                3. ¿Qué necesidades y gastos cree que tiene un animalito?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query3", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query3?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query3?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                4. ¿Qué alimentación cree que es la adecuada y qué marca de
                comida usaría?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query4", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query4?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query4?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                5. ¿Qué piensa sobre la esterilización?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query5", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query5?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query5?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                6. ¿Ha tenido mala experiencia con algún animalito? de ser así
                indique cuál
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query6", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query6?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query6?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                7. ¿Tiene limitaciones con la edad o preferencia de sexo?
                Indique cuáles si es que las tiene
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query7", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query7?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query7?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                8. ¿Dónde estará el animal durante el día y donde dormirá?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query8", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query8?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query8?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                9. ¿Ha tenido un animalito? Cuéntenos su experiencia (indicando
                especie, sexo, raza, edad, cómo llegó, cómo falleció)
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query9", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query9?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query9?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                10. ¿Tiene otros animales actualmente en casa? Cuéntenos algo de
                ellos: cuántos son, qué relación tiene con ellos, dónde los
                obtuvo, etc.
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query10", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query10?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query10?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                11. ¿Cuánto tiempo pasaría solo en casa?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query11", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query11?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query11?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                12. ¿Dónde estará el tiempo que este solo?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query12", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query12?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query12?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                13. ¿Qué pasaría si rompe plantas, ropa o zapatos?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query13", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query13?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query13?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                14. ¿Qué opina sobre las familias que tienen dentro de la casa a
                sus animales y duermen con ellos?{" "}
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query14", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query14?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query14?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                15. ¿Cuánto sería el máximo que gastaría en una emergencia
                veterinaria?{" "}
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query15", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query15?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query15?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                16. Según la especie que desee adoptar ¿conoces las vacunas que
                necesita?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query16")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query16")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                17. Nuestros animales son rescatados de abandono, muchas veces
                no se conoce a los padres. En caso de querer adoptar perro, ¿qué
                pasaría si el tamaño definitivo no era el que usted esperaba
                cuando sea adulto?{" "}
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query17", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query17?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query17?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                18. ¿Cuenta con vehículo?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query18")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query18")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                19. En caso de que quieras adoptar un perro ¿Cómo serían sus
                paseos diarios?{" "}
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query19", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query19?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query19?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <p className="fw-semibold border-bottom mt-5">
              {" "}
              SI BUSCA ADOPTAR UN GATO Y YA TIENE OTRO EN SU HOGAR...{" "}
            </p>
            <p className="mb-4">
              Existen enfermedades que los gatos pueden portar sin manifestar
              síntomas, es por eso que se realiza esta sección y así podamos
              evitar enfermedades teniendo la adecuada información.
            </p>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                20. ¿Cuenta su gatito con su examen retroviral negativo?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query20")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO, no he realizado el examen o su examen retroviral es
                    positivo{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query20")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI, cuenta con su examen retroviral negativo{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                21. ¿Esta vacunado contra la leucemia su gatito?
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query21")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO, no esta vacunado contra la leucemia{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query21")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI, esta vacunado contra la leucemia{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                22. ¿Su gatito es indoor o outdoor?
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="Indoor"
                    {...register("query22")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Indoor (vive solo al interior del hogar){" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="Outdoor"
                    {...register("query22")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Outdoor (vive en el interior y también sale a la calle){" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                23. Si ya tiene otro gato en casa, ¿qué enriquecimiento
                ambiental le tiene? por ejemplo: rascadores, fuente de agua
                eléctrica, Juguetes interactivos, etc{" "}
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query23", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query23?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query23?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <p className="fw-semibold mb-4 border-bottom mt-5">
              {" "}
              VIVIENDA DESTINADA AL ANIMAL{" "}
            </p>
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                24. Indica el tipo de vivienda y su tamaño{" "}
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query24", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query24?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query24?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                25. ¿Dispone de jardín, patio o terraza?{" "}
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query25", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query25?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query25?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                26. ¿Están bien cerrados los límites de vivienda a la calle?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query26")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query26")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                27. En caso de departamento, tiene mallas de seguridad?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query27")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query27")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                28. ¿Vivienda propia o en arriendo?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query28", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query28?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query28?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                29. ¿Tiene conocimiento el dueño/a de la vivienda o Jefe de
                hogar de que usted va adoptar a un animal? ¿Está de acuerdo?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query29", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query29?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query29?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                30. ¿Existe la posibilidad de una mudanza próximamente?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query30")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query30")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <p className="fw-semibold mb-4 border-bottom mt-5"> FAMILIA </p>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                31. ¿Quién compone su familia que habita el hogar? Si tiene
                niños mencionar edades
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query31", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query31?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query31?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                32. ¿Saben todos que adoptaran? ¿Entre quienes tomaron la
                decisión?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query32", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query32?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query32?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                33. Si es soltero y vives solo, ¿qué harías si a tu pareja no le
                gusta su animal de compañía?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query33", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query33?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query33?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                34. Si vive con padres, ¿qué pasará cuando se independice?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query34", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query34?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query34?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                35. ¿Qué piensa de la convivencia de bebés con animales? ¿Cree
                que son compatibles? ¿Por qué?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query35", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query35?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query35?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                36. ¿Hay personas con alergias en su familia?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query36")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query36")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <p className="fw-semibold mb-4 border-bottom mt-5">
              {" "}
              OCUPACIONES, TIEMPO LIBRE, OTROS ...{" "}
            </p>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                37. ¿Trabaja actualmente?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query37")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query37")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                38. ¿Tiene estabilidad Laboral?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query38")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query38")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                39. ¿Cuál es su horario de trabajo?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query39", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query39?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query39?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                40. ¿A qué dedica su tiempo libre? (hobbies){" "}
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query40", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query40?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query40?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                41. ¿Qué suele hacer en las vacaciones de verano?
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query41", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query41?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query41?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                42. Supongamos. Si es extranjero, ¿qué pasaría con el animal si
                regresa a su país? (O si es chileno, y se fuese a vivir al
                extranjero)
              </label>
              <textarea
                className="form-control"
                id=""
                rows="3"
                type="text"
                {...register("query42", { required: true, maxLength: 500 })}
              ></textarea>
              {errors.query42?.type === "maxLength" && (
                <p className="text-danger">
                  * El campo debe tener menos de 500 caracteres
                </p>
              )}
              {errors.query42?.type === "required" && (
                <p className="text-danger">* El campo debe ser completado</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                43. ¿Cuenta con la solvencia económica para seguir con una
                alimentación súper premium para su animalito adoptado?{" "}
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query43")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query43")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fw-semibold"
              >
                44. ¿Esta de acuerdo con las condiciones para adoptar y su
                seguimiento?
              </label>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="no"
                    {...register("query44")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    NO{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id=""
                    value="si"
                    {...register("query44")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    SI{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="col-12 my-5">
              <button
                className="btn my-3 fw-semibold text-start rounded shadow "
                style={{ backgroundColor: "#5BD3C7" }}
                type="submit"
                value="send"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Formcomp;
