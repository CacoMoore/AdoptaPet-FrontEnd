import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

const CardGallery = (props) => {

    const fav = <FontAwesomeIcon icon={faHeart} />


    return (
        <div className=" col-lg-4 col-md-12 mb-5">

            <div className="card   container-photo-card">

                <Link to='/pet'><img src={props.imgGallery} className="card-img-top image-size-for-card" alt="..."
                /></Link>
                <div className='card-header d-flex justify-content-center bg-white fw-bold'>
                    <span>{props.nombreGallery}</span>
                    <span className='ms-2'>{fav}
                    </span>
                </div>
                <div className="card-body">

                    <span className="text-card">

                    </span>
                    <div className="row text-center">
                        <span className='col-6'>{props.sexoGallery}</span>

                        <span className='col-6'>{props.especieGallery}</span>
                        <span className='col-12'>{props.tamanoGallery}</span>

                    </div>

                </div>
            </div>
        </div>)
}

export default CardGallery