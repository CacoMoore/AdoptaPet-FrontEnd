const InfoTwo = () => {

    return (
        <div
            id="accordion"
            style={{ borderRadius: '5px' }}
            className="text-center mt-4 pt-4 shadow-lg">
            <h1>¿Quieres colaborar?</h1>
            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button id="btn-collapsed" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Ayuda económica
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
                        <div className="accordion-body">¡Bienvenidos a nuestra Fundación! Si eres un amante de los animales y te gustaría ayudar a aquellos que cuidan de mascotas en su hogar, ¡estás en el lugar correcto! Nuestro objetivo es brindar apoyo económico a los cuidadores de mascotas que necesiten ayuda para cubrir los gastos médicos y de alimentación de sus animales. Si deseas hacer una donación, puedes hacerlo directamente en nuestra cuenta bancaria. ¡Cada pequeña contribución cuenta! En nuestra página web encontrarás información detallada sobre nuestra fundación y su trabajo, así como una lista de los cuidadores de mascotas que han recibido nuestra ayuda.
                            <br></br><br></br>
                            $20.000 = equivale a una esterilización
                            <br></br>
                            $30.000 = equivale a un saco de alimento
                            <br></br>
                            $40.000 = Vacunas para cachorros
                            <br></br>
                            $90.000 = Recuperación completa de un animal rescatado
                            <br></br>
                            <br></br>
                            <strong>Nuestros datos bancarios son los siguientes:</strong>
                            <br></br>Banco Scotiabank
                            <br></br>Rut: 65.185.305-2
                            <br></br>Email: empatianimal@gmail.com
                            <br></br>
                            <br></br>
                            <strong>¡Gracias por tu generosidad y apoyo a nuestra misión!</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button id="btn-collapsed" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Dona alimentos
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample2">
                        <div className="accordion-body">
                            ¡Hola de nuevo! Si prefieres hacer una donación de alimentos para ayudar a los cuidadores de mascotas en su hogar, ¡tenemos varias opciones para ti!Puedes donar alimentos para mascotas en uno de nuestros puntos de recolección cercanos. Asegúrate de revisar nuestra página web para obtener más información sobre dónde se encuentran nuestros puntos de recolección.Si tienes alimentos para mascotas que ya no necesitas en casa, ¡también aceptamos donaciones de alimentos usados! Solo asegúrate de que los alimentos estén en buen estado y dentro de su fecha de vencimiento.Cada pequeña contribución cuenta y es muy apreciada por los cuidadores de mascotas que necesitan ayuda para cubrir los gastos de alimentos de sus animales. <br></br><strong>¡Gracias por tu generosidad y apoyo a nuestra misión!</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button id="btn-collapsed" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                            ¿Quieres ser un hogar temporal?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                        <div className="accordion-body">
                            ¡Gracias por considerar convertirte en un hogar temporal para una mascota en adopción! Si estás interesado en convertirte en un hogar temporal para una mascota en adopción, aquí están los requisitos:
                            Debes ser mayor de edad y tener un lugar seguro y adecuado para que la mascota se quede.
                            Deberás tener experiencia previa cuidando mascotas y ser capaz de brindar el tiempo y atención que necesita el animal.
                            Tienes que comprometerte a proporcionar al animal todo lo que necesita, como comida, agua, juguetes y ejercicio.
                            Debes estar dispuesto a llevar a la mascota a su cita médica programada y administrar cualquier medicamento si es necesario.
                            Debes estar disponible para responder preguntas y proporcionar actualizaciones regulares sobre la mascota a la organización de adopción.
                            También es importante tener en cuenta que la duración de la estancia de la mascota en tu hogar puede variar según el caso. Algunas mascotas pueden necesitar una estancia corta, mientras que otras pueden requerir más tiempo antes de encontrar un hogar adoptivo permanente.

                            Si cumples con los requisitos y estás interesado en convertirte en un hogar temporal para una mascota en adopción, por favor ponte en contacto con nuestra organización.
                            <br></br><strong>¡Gracias por considerar ayudar a los animales necesitados!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoTwo;