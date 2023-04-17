import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";

const AddPet = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    actions.getPet(id);
  }, []);

  const { petGet } = store;

  console.log("====================>", store.petGet);
  console.log("xxxxxxxxxxxxxx", store.petGet[id]);
  //console.log('Aca va el codigo necesario', store.pets.filter(key => ))

  return (
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="container mt-4"
    >
      <h1>Editar mascota</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.handlePutPet(id);
        }}
        style={{ borderRadius: "5px" }}
        className="border border-dark shadow-lg m-4 p-2"
      >
        <div className="form-outline m-4">
          <input
            type="text"
            id="name"
            name="name"
            onChange={actions.handleChangePet}
            className="form-control"
            maxLength={50}
            defaultValue={petGet.name}
          />
          <label className="form-label" htmlFor="name">
            Nombre
          </label>
        </div>
        <div className="form-outline m-4">
          <select
            id="gender"
            name="gender"
            onChange={actions.handleChangePet}
            className="form-control"
            defaultValue={petGet.gender}
          >
            <option value="Selecciona una opción">Selecciona una opción</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
          <label className="form-label" htmlFor="gender">
            Género
          </label>
        </div>
        <div className="form-outline m-4">
          <input
            type="text"
            id="age"
            name="age"
            onChange={actions.handleChangePet}
            className="form-control"
            defaultValue={petGet.age}
          />
          <label className="form-label" htmlFor="age">
            Edad
          </label>
        </div>
        <div className="form-outline m-4">
          <select
            id="spicies"
            name="species"
            onChange={actions.handleChangePet}
            className="form-control"
            defaultValue={petGet.species}
          >
            <option value="Selecciona una opción">Selecciona una opción</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otro">Otro</option>
          </select>
          <label className="form-label" htmlFor="spicies">
            Especie
          </label>
        </div>
        <div className="form-outline m-4">
          <select
            id="size"
            name="size"
            onChange={actions.handleChangePet}
            className="form-control"
            defaultValue={petGet.size}
          >
            <option value="Selecciona una opción">Selecciona una opción</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
          <label className="form-label" htmlFor="size">
            Tamaño
          </label>
        </div>
        <div className="form-outline m-4">
          <input
            type="text"
            id="description"
            onChange={actions.handleChangePet}
            name="description"
            className="form-control"
            defaultValue={petGet.description}
          />
          <label className="form-label" htmlFor="description">
            Descripción
          </label>
        </div>
        <div className="form-outline m-4">
          <input
            type="text"
            id="medical"
            onChange={actions.handleChangePet}
            name="medical_history"
            className="form-control"
            defaultValue={petGet.medical_history}
          />
          <label className="form-label" htmlFor="medical">
            Historial médico
          </label>
        </div>
        <div className="form-outline m-4">
          <select
            id="is_adopted"
            name="is_adopted"
            onChange={actions.handleChangePet}
            className="form-control"
            defaultValue={petGet.is_adopted}
          >
            <option value="Selecciona una opción">Selecciona una opción</option>
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
          <label className="form-label" htmlFor="is_adopted">
            ¿Está en adopción?
          </label>
        </div>
        <div className="form-outline m-4">
          <input
            type="text"
            id="adress"
            name="adress_id"
            className="form-control"
            defaultValue={petGet.adress_id}
          />
          <label className="form-label" htmlFor="adress">
            Comuna de residencia
          </label>
        </div>

        <div className="form-outline m-4">
          <input
            type="file"
            id="img"
            name="img"
            className="form-control"
            onChange={actions.handleChangeFilePet}
          />
          <label className="form-label" htmlFor="img">
            Subir imagen
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddPet;
