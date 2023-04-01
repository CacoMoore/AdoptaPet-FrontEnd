import Formcomp from "../components/formcomp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Adopform = () => {
    const pawn = <FontAwesomeIcon icon={faPaw} />

    return (
        <>
            <div className="container">
                <div className="py-5 text-center">
                    <p className="fs-1">{pawn}</p>
                    <h2>Formulario de adopción</h2>
                    <p className="lead">Completa este formulario de adopción una vez que estés segura o seguro de tu desición. Nuestros animales en adopción han sido rescatados y recuperados de abandono y/o maltrato, la mayoría ha  sufrido mucho antes de estar listos para reintegrarse a un hogar, no queremos que una adopción irresponsable los haga sufrir nuevamente, es por ello que hemos diseñado este formulario, desde ya agradecemos su confianza y sinceridad para llenarlo junto a su familia.
                        La información entregada en este formulario es de carácter privada entre el postulante y fundación.
                    </p>
                    <p className="lead"><strong>IMPORTANTE</strong> Si su postulación es aprobada se le contactará, la entrega se realizará previa coordinación con el postulante. Si su solicitud no fue  aprobada, se podrán en contacto con usted.</p>
                </div>

                <Formcomp></Formcomp>


            </div>
        </>
    );
}

export default Adopform;