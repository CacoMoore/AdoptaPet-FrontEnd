const InfoOne = () => {

    return (
        <div
            style={{ borderRadius: '5px' }}
            className="text-center mt-4 pt-4 border border-dark shadow-lg">
            <h1>Información</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            ¿Quiénes somos?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Somos una fundación dedicada a rescatar mascotas en riesgo y ofrecerles una segunda oportunidad en hogares amorosos. Nuestra plataforma online permite a posibles adoptantes buscar y encontrar su compañero ideal de manera fácil y conveniente. Nos enorgullece trabajar incansablemente para garantizar que cada animal reciba la atención médica, el amor y la protección que merecen. Juntos, estamos construyendo un futuro más brillante para mascotas y personas por igual.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ¿Cómo adoptar?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            ¡Gracias por considerar la adopción de una mascota! Nuestro proceso de adopción es sencillo pero riguroso para asegurarnos de que cada animal encuentre el hogar adecuado. El primer paso es registrarse en nuestra página web y crear una cuenta. Una vez que haya creado su cuenta, podrá explorar nuestras mascotas disponibles y leer sobre sus historias únicas. Si encuentra un animal que cree que podría ser el compañero adecuado para usted, puede comenzar el proceso de adopción completando nuestro cuestionario en línea de 44 preguntas. Este cuestionario nos ayuda a conocerlo mejor y a entender sus necesidades y expectativas en cuanto a la adopción. Una vez que hayamos revisado su cuestionario, nos pondremos en contacto con usted para programar una visita en persona con el animal. Si todo va bien y se siente cómodo adoptando a la mascota, le entregaremos el animal en su hogar y le brindaremos asesoramiento para la transición a su nueva vida.
                            <br></br><strong>¡Gracias por elegir adoptar y por considerar nuestra fundación!</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ¿Dónde estamos?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            En nuestra fundación, no contamos con una casa matriz central. En lugar de eso, cada "oficina" es un hogar temporal para nuestras mascotas en proceso de adopción. Esto significa que nuestras mascotas son atendidas y cuidadas en hogares amorosos, en lugar de en un refugio frío y desconocido. Este enfoque nos permite brindar a nuestras mascotas la atención personalizada que necesitan y merecen, y también nos permite estar presentes en múltiples comunidades para llegar a más personas y mascotas necesitadas. Nuestros voluntarios y cuidadores de hogares temporales trabajan arduamente para brindar a las mascotas un ambiente cálido y amoroso mientras esperan su adopción definitiva. Estamos orgullosos de ser una fundación descentralizada y comprometida con el bienestar de todas nuestras mascotas.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default InfoOne;