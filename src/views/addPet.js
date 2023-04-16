import { useContext } from "react";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const AddPet = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate();

    const postPet = (e) => {
        actions.handlePostPet(e)
        Swal.fire({
            icon: 'success',
            title: 'Agregar',
            text: 'Mascota agregada con éxito'

        });
        e.target.reset();
    }

    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
            className="container mt-4">
            <h1 className="text-center">Agregar mascota</h1>
            <form onSubmit={(e) => postPet(e)} style={{ borderRadius: '5px' }}
                className="border  shadow-lg m-4 p-2">
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={actions.handleChangePet}
                        className="form-control"
                        maxLength={50}
                        required
                    />

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="gender">Género</label>
                    <select
                        id="gender"
                        name="gender"
                        onChange={actions.handleChangePet}
                        className="form-control"
                        required
                    >
                        <option value="Selecciona una opción">Selecciona una opción</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="age">Edad</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        onChange={actions.handleChangePet}
                        className="form-control"
                        required
                    />

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="spicies">Especie</label>
                    <select
                        id="spicies"
                        name="species"
                        onChange={actions.handleChangePet}
                        className="form-control"
                        required
                    >
                        <option value="Selecciona una opción">Selecciona una opción</option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                        <option value="Otro">Otro</option>
                    </select>

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="size">Tamaño</label>
                    <select
                        id="size"
                        name="size"
                        onChange={actions.handleChangePet}
                        className="form-control"
                        required
                    >
                        <option value="Selecciona una opción">Selecciona una opción</option>
                        <option value="Pequeño">Pequeño</option>
                        <option value="Mediano">Mediano</option>
                        <option value="Grande">Grande</option>
                    </select>

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="description">Descripción</label>
                    <input
                        type="text"
                        id="description"
                        onChange={actions.handleChangePet}
                        name="description"
                        className="form-control"
                        required
                    />

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="medical">Historial médico</label>
                    <input
                        type="text"
                        id="medical"
                        onChange={actions.handleChangePet}
                        name="medical_history"
                        className="form-control"
                        required
                    />

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="is_adopted">¿Está en adopción?</label>
                    <select
                        id="is_adopted"
                        name="is_adopted"
                        onChange={actions.handleChangePet}
                        className="form-control"
                        required
                    >
                        <option value="Selecciona una opción">Selecciona una opción</option>
                        <option value={'si'}>Sí</option>
                        <option value={'no'}>No</option>
                    </select>

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="adress">Comuna de residencia</label>
                    <input
                        type="text"
                        id="adress"
                        name="adress_id"
                        className="form-control"
                        required
                    />

                </div>


                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="img">Subir imagen</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        className="form-control"
                        onChange={actions.handleChangeFilePet}
                        required
                    />

                </div>
                <div>

                    <button type="submit" className="btn btn-lg text-light" style={{ backgroundColor: "#353755" }}>Agregar</button>
                </div>
            </form>

        </div>
    );
};
export default AddPet;
