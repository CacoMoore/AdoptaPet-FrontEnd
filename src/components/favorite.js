import { useContext } from "react";
import { Context } from "../store/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CardGallery from "../components/cardGallery";
import Swal from 'sweetalert2'




const Favorites = () => {
    const trash = <FontAwesomeIcon icon={faTrash} />
    const { store, actions } = useContext(Context);

    return (


        <div className="container" >
            <div className="row flex-wrap justify-content-center">
                {store.favorites.length > 0 ? (
                    store.favorites.map((item, index) => (
                        <div className="col-sm-8 col-md-6 col-lg-4 p-2" style={{ listStyle: "none" }}>
                            <div key={index} className="p-2 text-dark shadow-lg">
                                <CardGallery pet={item} />
                                <button
                                    id="btn-dislike"
                                    type="button"
                                    className="btn btn w-100"
                                    onClick={() => {
                                        Swal.fire({
                                            text: '¿Realmente deseas eliminarlo de tu lista de favoritos?',
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonText: 'Sí',
                                            confirmButtonColor: '#5BD3C7',
                                            cancelButtonText: 'Cancelar'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                actions.handlePet(item.id)
                                                Swal.fire(
                                                    'Listo',
                                                    'Ha hecho clic en el botón',
                                                    'success'
                                                )
                                            }
                                        })
                                    }}
                                >
                                    <i className="bi bi-heartbreak"></i>
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