const AddPost = () => {

    return (
        <div
        style={{ borderRadius: '5px', minHeight: '100vh' }}
        className="container mt-4">
            <h1>Agregar noticia</h1>
            <form style={{ borderRadius: '5px' }}
            className="border border-dark shadow-lg m-4 p-2">
                <div className="form-outline m-4">
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control" />
                    <label
                        className="form-label"
                        htmlFor="title">Título</label>
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
            </form>
        </div>
    )
}
export default AddPost;