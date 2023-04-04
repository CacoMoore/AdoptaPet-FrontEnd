const AddPost = () => {

    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
            className="container mt-4">
            <h1>Agregar noticia</h1>
            <form style={{ borderRadius: '5px' }}
                className="border shadow-lg m-4 p-2">
                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="title">Título</label>
                    <input placeholder="Título de la noticia"
                        type="text"
                        id="title"
                        name="title"
                        className="form-control" />

                </div>

                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="title">Fecha publicación</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="form-control" />

                </div>

                <div className="form-outline m-4">
                    <label
                        className="form-label"
                        htmlFor="description">Descripción</label>
                    <input
                        placeholder="Descripción de la noticia"
                        type="text"
                        id="description"
                        name="description"
                        className="form-control" />

                </div>
                <div class="form-outline m-4">
                    <label for="formFileSm" class="form-label">Adjuntar foto en JPG</label>
                    <input class="form-control form-control-sm" id="formFileSm" type="file" />
                </div>
                <button id="btn-add-news" className="btn btn-ms mt-1">Agregar Noticia</button>
            </form>
        </div>
    )
}
export default AddPost;