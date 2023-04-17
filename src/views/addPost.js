import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'

const defaultValues = {
    title: "",
    date: "",
    description: ""
}

const AddPost = () => {
    const { actions, store } = useContext(Context)

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [formValues] = useState(defaultValues);


    const imagePost = useRef();
    
    const onSubmit = (data) => {
        reset()
        console.log(data)
        data.rol_id = store.loginUser.rol_id
        actions.sendPost(data)
          .then(() => {
            Swal.fire({
              title: 'Post enviado exitosamente',
              icon: 'success',
              timer: 2000, // Duración en milisegundos
              timerProgressBar: true,
              showConfirmButton: false
            })
          })
          .catch(() => { 
            Swal.fire({
              title: 'Debe completar todos los campos',
              icon: 'error'
            }) 
          })
      }
   /* const onSubmit = (data) => {
        reset()
        console.log(data)
        data.rol_id = store.loginUser.rol_id
        actions.sendPost(data)
            .then(() => {
                alert("Post enviado exitosamente")
            })
            .catch(() => { alert("debe completar todos los campos") })
    }*/

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
                    <input {...register('title', { required: true })}
                        placeholder="Título de la noticia"
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        ddefaultValue={formValues.title} />
                    {errors.title?.type === 'required' && <p className="text-danger">* El campo debe ser completado</p>}

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="date">Fecha publicación</label>
                    <input {...register('date', { required: true })}
                        type="date"
                        id="date"
                        name="date"
                        className="form-control"
                        defaultValue={formValues.date} />
                    {errors.date?.type === 'required' && <p className="text-danger">* El campo debe ser completado</p>}

                </div>
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="description">Descripción</label>
                    <input {...register('description', { required: true, maxLength: 500 })}

                        placeholder="Descripción de la noticia"
                        type="text"
                        id="description"
                        name="description"
                        className="form-control"
                        defaultValue={formValues.description} />
                    {errors.description?.type === 'maxLength' && <p className="text-danger">* El campo debe tener menos de 500 caracteres</p>}
                    {errors.description?.type === 'required' && <p className="text-danger">* El campo debe ser completado</p>}

                </div>

               {/* <div class="form-outline m-4">
                    <label htmlFor="imageInput" class="form-label">Adjuntar foto en JPG</label>
                    <input {...register('imagePost')}
                        className="form-control form-control-sm"
                        id="imageInput"
                        type="file"
                        />
                </div>*/}
                <button id="btn-add-news" className="btn btn-ms mt-1" type="submit" value="send">Agregar Noticia</button>
            </form>
        </div>
    )
}
export default AddPost;