const InfoOne = () => {

    return (
        <div
            id="acordeon1"
            style={{ borderRadius: '5px' }}
            className="text-center mt-4 pt-4 shadow-lg">
            <h1>Información</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button id="acordionbtn2" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            ¿Quiénes somos?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Somos una fundación dedicada a rescatar mascotas en riesgo y ofrecerles una segunda oportunidad en hogares amorosos. Nuestra plataforma online permite a posibles adoptantes buscar y encontrar su compañero ideal de manera fácil y conveniente.
                            Nos enorgullece trabajar incansablemente para garantizar que cada animal reciba la atención médica, el amor y la protección que merecen. Juntos, estamos construyendo un futuro más brillante para mascotas y personas por igual.
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button id="acordionbtn2" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                ¿Cómo adoptar? 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>¡Gracias por considerar la adopción de una mascota! Nuestro proceso de adopción es sencillo pero riguroso para asegurarnos de que cada animal encuentre el hogar adecuado.</p>
                                <p>Podrás explorar nuestras mascotas disponibles y leer sobre sus historias únicas. </p>
                                <p>El primer paso es registrarse en nuestra página web y crear una cuenta. En tu sesión podrás guardar tus peludos favoritos.</p>
                                <p>Una vez que hayas creado tu cuenta, si encuentras un animal que crees podría ser el compañero adecuado para usted, puede comenzar el proceso de adopción completando nuestro cuestionario en línea de 44 preguntas.
                                    Este cuestionario nos ayuda a conocerlo mejor y a entender sus necesidades y expectativas en cuanto a la adopción. Una vez que hayamos revisado su cuestionario, nos pondremos en contacto con usted.
                                    Si todo va bien con el formulario y se siente cómodo adoptando a la mascota, se coordinará la entrega del animal y le brindaremos asesoramiento para la transición a su nueva vida.</p>
                                <p></p>
                                <br></br><strong>¡Gracias por elegir adoptar y por considerar nuestra fundación!</strong>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button id="acordionbtn2" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Condiciones para adoptar
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul className="text-start">
                                        <li>La fundación solicita una tarifa de adopción de $5.000. Dicho monto ayuda a cubrir los gastos de mantención del animal mientras permaneció en hogar temporal y contribuye a los gastos de los voluntarios para efectuar la entrega del animal.</li>
                                        <li>El formulario debe ser llenado por el jefe de hogar acompañado por la familia</li>
                                        <li>El adoptante firmará un compromiso de tenencia responsable en donde acepta las condiciones para adoptar establecidas en este formulario.</li>
                                        <li>No se entregan animales para “regalar” a terceras personas.</li>
                                        <li>Adopción de gatos  es  solo para tenencia indoor,  departamentos o casas  deben  contar con mallas de seguridad instaladas  al momento de la adopción.</li>
                                        <li>Si adopta  perro, debe salir siempre a pasear junto con algún familiar, nunca solo y de esta manera cumplir con una tenencia responsable. </li>
                                        <li>El día de la adopción   se solicita estar   presente toda la familia  y ver la interacción con el nuevo integrante.</li>
                                        <li>Todo animal adoptado tiene  un seguimiento médico de por vida. Contempla controles sanos y vacunaciones de prevención de enfermedades, se hace en la comodidad del hogar por el médico veterinario que se le asignará,  a un menor costo de lo usual, 
                                            premiando su decisión de adoptar  un animal. Apunta a la medicina preventiva, y a otorgar información a las familias para que sepan qué hacer en cada etapa de vida del animalito. Ya son adultos, sus controles son cada 6 o 12  meses, de por vida.</li>
                                        <li>El día de la adopción se entrega su carnet veterinario con  registros médicos para continuar de manera responsable su control sanitario, además de una completa charla de asesoría de cuidados básicos, por el médico veterinario. En caso de adoptar un cachorro, 
                                            durante los primeros meses, se le entregan tips de conducta, estímulos y pautas de socialización.</li>
                                        <li>En caso de adoptar cachorros, control es  cada 21 a 30 días hasta que terminen todas las vacunas de cachorros.</li>
                                        <li>Animales mayores a 5 meses de vida se entregan ya esterilizados. Si elige adoptar a un animalito menor a esta edad, este será esterilizado cuando el veterinario designado lo estipule, a un bajo costo. No es optativa.</li>
                                        <li>Microchip es la opción para ingresarlo a registro de mascotas según  ley Cholito sobre tenencia responsable de animales de compañía. </li>
                                        <li>Microchip es la opción para ingresarlo a registro de mascotas según  ley Cholito sobre tenencia responsable de animales de compañía. </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button id="acordionbtn2" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                        ¿Dónde estamos?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        En nuestra fundación, no contamos con una casa matriz central. En lugar de eso, cada "oficina" es un hogar temporal para nuestras mascotas en proceso de adopción. Esto significa que nuestras mascotas son atendidas y cuidadas en hogares amorosos, en lugar de en un refugio frío y desconocido. Este enfoque nos permite brindar a nuestras mascotas la atención personalizada que necesitan y merecen, y también nos permite estar presentes en múltiples comunidades para llegar a más personas y mascotas necesitadas. Nuestros voluntarios y cuidadores de hogares temporales trabajan arduamente para brindar a las mascotas un ambiente cálido y amoroso mientras esperan su adopción definitiva. Estamos orgullosos de ser una fundación descentralizada y comprometida con el bienestar de todas nuestras mascotas.
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button id="acordionbtn2" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseFour">
                                            ¿Quieres más información?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Quieres saber más información sobre nuestra fundación y comunidad. <br></br>
                                            Solicitar una cita para realizar una adopción o conocer a tu futura mascota.<br></br>
                                            Comunicate con nosotros a través de nuestros canales de información, haz <a className="link-opacity-100" href="#footer">click aquí</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoOne;