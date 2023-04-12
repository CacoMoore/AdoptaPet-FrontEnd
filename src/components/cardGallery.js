const CardGallery = (props) => {

    

    return (
        <div className="card container-photo-card  ">
            <img src={'http://127.0.0.1:8080/uploads/' + props.pet.img} className="card-img-top image-size-for-card height-card" alt="..." />

            <div className='card-header d-flex justify-content-center bg-white fw-bold text-capitalize'>
                <span>{props.pet.name}</span>
            </div>
            <div className="card-body ">
                <div className="row ">
                    <span className='col-12'>Género: {props.pet.gender}</span>
                    <span className='col-12'>Especie: {props.pet.species}</span>
                    <span className='col-12'>Tamaño: {props.pet.size}</span>
                </div>
            </div>
        </div>
    )
}

export default CardGallery