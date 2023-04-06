import { useContext } from "react";
import { Context } from "../store/context";


const FormGallery = () => {



    const { store, actions } = useContext(Context)




    return <>
        <div className=" container  w-75 mb-5  form-bg rounded ">
            <form onSubmit={actions.handlePostPetSearch} >

                <div className="row d-grid gap-3">
                    <h3 className="text-center">Filtra tu busqueda</h3>
                    <div className="col-md-12 ">
                        <h6>Tamaño De Mascota</h6>
                        <select className="form-select"
                            onChange={actions.PetFilterContainer}
                            name="size"
                            aria-label="Default select example">
                            <option value={undefined}  >Selecionar</option>
                            <option value="Grande">Grande</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Pequeño">Pequeño</option>

                        </select>
                    </div>

                    <div className="col-md-12 ">
                        <h6>Especie</h6>
                        <select className="form-select"
                            onChange={actions.PetFilterContainer}
                            name="species"
                            aria-label="Default select example">
                            <option value={undefined}>Selecionar</option>
                            <option value="Perro">Perro</option>
                            <option value="Gato">Gato</option>

                        </select>
                    </div>

                    <div className="col-md-12 ">
                        <h6>Género</h6>
                        <select className="form-select"
                            onChange={actions.PetFilterContainer}
                            name="gender"
                            aria-label="Default select example">
                            <option value={undefined}>Selecionar</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>

                        </select>
                    </div>


                    <div className="mb-3 d-flex justify-content-center">
                        <button type="submit" class="btn btn-light ">Buscar</button>
                        <button onClick={actions.handlePostPetRestore} type="submit" class="btn btn-light">Restablecer</button>
                    </div>



                </div>
            </form>
        </div >

        <div className=" container  w-75 mb-5 paragraph-gallery ">
            <p className="display-7 fw-bold ">
                "En nuestro país existen 12.482.679 perros y gatos con dueños, alcanzando los 8.306.650 y 4.176.029 respectivamente. Paralelamente, hay otros 4.049.277 animales que no tienen ninguna supervisión en Chile."
            </p >


        </div>
        <div className=" container  w-75 mb-5 paragraph-gallery ">
            <p className="display-7 fw-bold" >
                La adopción animal es un proceso en el cual se busca el mejor hogar para los animales de compañía abandonados. La adopción, sin duda, es un acto de humanidad y compromiso.
            </p>
        </div>
    </>
}

export default FormGallery