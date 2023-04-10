import { useContext } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";

const AddDescription = () => {
    const { actions } = useContext(Context)


    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}>
            <div
                style={{ borderRadius: '5px' }}
                className="shadow-lg m-4 p-2">

                <ul className="nav nav-pills justify-content-center m-1" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="btn btn-lg btn-light active m-2" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="bi bi-box-arrow-in-left"></i></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="btn btn-lg btn-light m-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="bi bi-box-arrow-in-right"></i></button>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    <div className=" tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                        tabindex="0">
                        <div className="m-5">
                            <h1>Háblanos de ti...</h1>
                            <form
                                id="description"
                                onSubmit={actions.handleUserDescription} >
                                <div className="form-outline mb-4 mt-5">
                                    <input
                                        onChange={actions.handleChangeDescription}
                                        type="text"
                                        id="description"
                                        name="description"
                                        className="form-control"
                                        maxLength={500}
                                        required
                                        placeholder="Máximo 500 caracteres" />
                                    <label
                                        className="form-label"
                                        htmlFor="description">Brevemente, háblanos de ti...</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        onChange={actions.handleChangeDescription}
                                        type="text"
                                        id="motivation"
                                        name="motivation"
                                        className="form-control"
                                        maxLength={500}
                                        required
                                        placeholder="Máximo 500 caracteres" />
                                    <label
                                        className="form-label"
                                        htmlFor="motivation">¿Cuál es tu motivación para adoptar?</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        onChange={actions.handleChangeDescription}
                                        type="text"
                                        id="style"
                                        name="style"
                                        className="form-control"
                                        maxLength={500}
                                        required
                                        placeholder="Máximo 500 caracteres" />
                                    <label
                                        className="form-label"
                                        htmlFor="style">Háblanos del lugar donde vives, ¿Tienes espacio para una mascota?</label>
                                </div>
                                <div className="text-center">
                                    <button
                                        form="description"
                                        type="submit"
                                        className="btn btn-lg text-light mb-4 col-12"
                                        style={{ backgroundColor: "#5BD3C7" }}>Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                        <div className="m-5">
                            <h1>¿Quieres actualizar tu información?</h1>
                            <form
                                onSubmit={actions.putUserInfo}
                                id="info">
                                <div className="form-outline mb-4 mt-5">
                                    <input
                                        onChange={actions.handleChangeInfo}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        maxLength={50}
                                        required
                                        placeholder="Máximo 50 caracteres" />
                                    <label
                                        className="form-label"
                                        htmlFor="description">Nombre:</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        onChange={actions.handleChangeInfo}
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        className="form-control"
                                        maxLength={50}
                                        required
                                        placeholder="Máximo 50 caracteres" />
                                    <label
                                        className="form-label"
                                        htmlFor="motivation">Apellidos:</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        onChange={actions.handleChangeInfo}
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        className="form-control"
                                        maxLength={50}
                                        placeholder="Ej: 988887777" />
                                    <label
                                        className="form-label"
                                        htmlFor="style">Teléfono:</label>
                                </div>
                                <div className="text-center">
                                    <button
                                        form="info"
                                        type="submit"
                                        className="btn btn-lg text-light mb-4 col-12"
                                        style={{ backgroundColor: "#5BD3C7" }}>Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="m-5">
                    <Link
                        to="/user"
                        className="btn btn-lg text-light col-12"
                        style={{ backgroundColor: "#353755" }}
                    >Volver a tu perfil</Link>
                </div>
            </div>

        </div>

    )
}
export default AddDescription;