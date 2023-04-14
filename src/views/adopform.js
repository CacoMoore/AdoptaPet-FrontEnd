import Formcomp from "../components/formcomp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Context } from "../store/context";
import React, { useContext } from "react";

const Adopform = () => {
  const pawn = <FontAwesomeIcon icon={faPaw} />;
  const { store } = useContext(Context);
  const { loginUser } = store;
  const { rol_id } = loginUser;

  if (rol_id === 1 || rol_id === 2) {
    return (
      <>
        <div className="container">
          <div className="py-5 text-center">
            <p className="fs-1">{pawn}</p>
            <h2>Formulario de adopción</h2>
            <p className="lead">
              Completa este formulario de adopción una vez que estés segura o
              seguro de tu desición. Nuestros animales en adopción han sido
              rescatados y recuperados de abandono y/o maltrato, la mayoría ha
              sufrido mucho antes de estar listos para reintegrarse a un hogar,
              no queremos que una adopción irresponsable los haga sufrir
              nuevamente, es por ello que hemos diseñado este formulario, desde
              ya agradecemos su confianza y sinceridad para llenarlo junto a su
              familia. La información entregada en este formulario es de
              carácter privada entre el postulante y fundación.
            </p>
            <p className="lead">
              <strong>IMPORTANTE</strong>
            </p>
            <p className="lead">
              Revisa previamente en el apartado de información las{" "}
              <Link to="/info">
                <strong>condiciones de adopción</strong>{" "}
              </Link>{" "}
              antes de rellenar el formulario. Podermos preguntar por su
              cumplimiento a la hora de concretar la adopción.
            </p>
          </div>

          <Formcomp></Formcomp>
        </div>
      </>
    );
  } else {
    return (
      <div className="container p-4">
        <div className="row text-center p-5">
          <h4 className="">Ups!... Al parecer no has iniciado sesión. </h4>
        </div>
        <div className="row">
          <Link
            className="btn btn-lg text-light"
            to="/login"
            style={{ backgroundColor: "#5BD3C7" }}
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    );
  }
};

export default Adopform;
