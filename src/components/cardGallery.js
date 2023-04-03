import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../store/context";

const CardGallery = (props) => {

    const { store, actions } = useContext(Context)

    const fav = <FontAwesomeIcon icon={faHeart} />


    const handleSubmit = () => {
        actions.addFavorite(props.name);
      };


    return (

        <div className="card container-photo-card">

            <img src={props.imgGallery} className="card-img-top image-size-for-card" alt="..." />

            <div className='card-header d-flex justify-content-center bg-white fw-bold'>
                <span>{props.nombreGallery}</span>
            </div>
            <div className="card-body">

                <div className="row text-center">
                    <span className='col-6'>{props.sexoGallery}</span>
                    <span className='col-6'>{props.especieGallery}</span>
                    <span className='col-12'>{props.tamanoGallery}</span>
                </div>
            </div>
            <button id="btn-fav" onClick={handleSubmit}> {fav} </button>
        </div>


    )
}

export default CardGallery