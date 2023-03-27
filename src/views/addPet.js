const AddPet = () => {

    return (
        <div
        style={{ borderRadius: '5px', minHeight: '100vh' }}
        className="container mt-4">
            <h1>Agregar mascota</h1>
            <form style={{ borderRadius: '5px' }}
            className="border border-dark shadow-lg m-4 p-2">
                <div className="form-outline m-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control" />
                    <label
                        className="form-label"
                        htmlFor="name">Nombre</label>
                </div>
                <div className="form-outline m-4">
                    <select
                        id="gender"
                        name="gender"
                        className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                    </select>
                    <label
                        className="form-label"
                        htmlFor="gender">Género</label>
                </div>
                <div className="form-outline m-4">
                    <select
                        id="age"
                        name="age"
                        className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="1">1 año</option>
                        <option value="2">2 años</option>
                        <option value="3">3 años</option>
                        <option value="4">4 años</option>
                        <option value="5">5 años</option>
                        <option value="6">6 años</option>
                        <option value="7">7 años</option>
                        <option value="8">8 años</option>
                        <option value="9">9 años</option>
                        <option value="10">10 años</option>
                        <option value="11">11 años</option>
                        <option value="12">12 años</option>
                        <option value="13">13 años</option>
                        <option value="14">14 años</option>
                        <option value="15">15 años</option>
                        <option value="16">16 años</option>
                        <option value="17">17 años</option>
                        <option value="18">18 años</option>
                        <option value="19">19 años</option>
                        <option value="20">20 años</option>
                    </select>
                    <label
                        className="form-label"
                        htmlFor="age">Edad</label>
                </div>
                <div className="form-outline m-4">
                    <select
                        id="spicies"
                        name="spicies"
                        className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="dog">Perro</option>
                        <option value="cat">Gato</option>
                        <option value="other">Otro</option>
                    </select>
                    <label
                        className="form-label"
                        htmlFor="spicies">Especie</label>
                </div>
                <div className="form-outline m-4">
                    <select
                        id="size"
                        name="size"
                        className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="small">Pequeño</option>
                        <option value="medium">Mediano</option>
                        <option value="large">Grande</option>
                    </select>
                    <label
                        className="form-label"
                        htmlFor="size">Tamaño</label>
                </div>
                <div className="form-outline m-4">
                    <input
                        type="text"
                        id="description"
                        name="description"
                        className="form-control" />
                    <label
                        className="form-label"
                        htmlFor="description">Descripción</label>
                </div>
                <div className="form-outline m-4">
                    <input
                        type="text"
                        id="medical"
                        name="medical"
                        className="form-control" />
                    <label
                        className="form-label"
                        htmlFor="medical">Historial médico</label>
                </div>
                <div className="form-outline m-4">
                    <select
                        id="isAdopted"
                        name="isAdopted"
                        className="form-control">
                        <option value="">Selecciona una opción</option>
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </select>
                    <label
                        className="form-label"
                        htmlFor="isAdopted">¿Está en adopción?</label>
                </div>
                <div className="form-outline m-4">
                    <input
                        type="text"
                        id="adress"
                        name="adress"
                        className="form-control" />
                    <label
                        className="form-label"
                        htmlFor="adress">Comuna de residencia</label>
                </div>
            </form>
        </div>
    )
}
export default AddPet;