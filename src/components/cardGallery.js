import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

const CardGallery = () => {

    const fav = <FontAwesomeIcon icon={faHeart} />


    return (
        <div className=" col-lg-4 col-md-12 mb-5">

            <div className="card   container-photo-card">

                <Link to='/pet'><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" className="card-img-top image-size-for-card" alt="..."
                /></Link>
                <div className='card-header d-flex justify-content-center bg-white fw-bold'>
                    <span>TOFY</span>
                    <span className='ms-2'>{fav}
                    </span>
                </div>
                <div className="card-body">

                    <span className="text-card">

                    </span>
                    <div className="row text-center">
                        <span className='col-6'>Macho</span>

                        <span className='col-6'>Perro</span>
                        <span className='col-12'>Perro</span>

                    </div>

                </div>
            </div>
        </div>)
}

export default CardGallery