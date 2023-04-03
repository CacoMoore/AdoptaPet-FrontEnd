import { useContext } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";

const AddDescription = () => {
    const { actions} = useContext(Context)
    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}>

            <div className="  header-gallery ">

            </div>
            
            <div
                style={{ borderRadius: '5px' }}
                className="border shadow-lg m-4 p-2">
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
                            className="btn btn-lg text-light mb-4"
                            style={{ backgroundColor: "#5BD3C7" }}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                style={{ borderRadius: '5px' }}
                className="border shadow-lg m-4 p-2">
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
                                htmlFor="description">Brevemente, hablanos de ti...</label>
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
                            className="btn btn-lg text-light mb-4"
                            style={{ backgroundColor: "#5BD3C7" }}>Enviar</button>
                        </div>
                        
                        <div className="text-center">
                            <p><Link to="/user">Volver a tu cuenta</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default AddDescription;