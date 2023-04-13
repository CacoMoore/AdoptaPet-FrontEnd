import { useContext } from "react";
import { Context } from "../store/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CardGallery from "../components/cardGallery";



const Favorites = () => {
    const trash = <FontAwesomeIcon icon={faTrash} />
    const { store, actions } = useContext(Context);

    return (


            <div className="container d-flex" >
                <div className="row">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((item, index) => (
                            <div className="col-4 p-2" style={{ listStyle: "none" }}>
                                <div key={index} className="p-2 text-dark shadow-lg">
                                    <CardGallery pet={item} />
                                    <button
                                    id="btn-dislike"
                                        type="button"
                                        className="btn btn w-100"
                                        onClick={() => actions.handlePet(item.id)}
                                    >
                                       <i class="bi bi-heartbreak"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <li className="dropdown-item-text text-center text-secondary"> Vacío </li>
                    )}
                </div>
            </div>

    )
}


export default Favorites;