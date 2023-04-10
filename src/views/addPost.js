import { useContext } from "react";
import { Context } from "../store/context";
import { useForm } from "react-hook-form";


const AddPost = () => {
    const { actions, store } = useContext(Context)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        data.rol_id=store.loginUser.rol_id
        actions.sendPost(data)
            .then(() => { alert("Post enviado exitosamente") })
            .catch(() => { alert("Error") })
    }
  
    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
            className="container mt-4">
            <h1>Agregar noticia</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{ borderRadius: '5px' }}
                className="border shadow-lg m-4 p-2">
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="title">Título</label>
                    <input {...register('title')}
                        placeholder="Título de la noticia"
                        type="text"
                        id="title"
                        name="title"
                        className="form-control" />
                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="date">Fecha publicación</label>
                        <input {...register('date')}
                            type="date"
                            id="date"
                            name="date"
                            className="form-control" />
    
                    </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="description">Descripción</label>
                    <input {...register('description')}

                        placeholder="Descripción de la noticia"
                        type="text"
                        id="description"
                        name="description"
                        className="form-control" />
                </div>

{ /*<div class="form-outline m-4">
    <label for="formFileSm" class="form-label">Adjuntar foto en JPG</label>
    <input {...register('imagePost')}
    class="form-control form-control-sm" id="formFileSm" type="file" />
</div>*/}
                <button id="btn-add-news" className="btn btn-ms mt-1" type="submit" value="send">Agregar Noticia</button>
            </form>
        </div>
    )
}
export default AddPost;