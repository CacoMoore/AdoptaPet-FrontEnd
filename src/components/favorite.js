import { useContext } from "react";
import { Context } from "../store/context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CardGallery from "../components/cardGallery";



const Favorites = () => {
    const trash = <FontAwesomeIcon icon={faTrash} />   
    const { store, actions } = useContext(Context);

    const sendFavorite = (data) => {
        console.log(data);
        actions.sendFavorite(data)
        .then(() => {alert("Favorito enviado exitosamente")})  
        .catch (()=>{alert("Favorito no guardado")})                       
    }

   
    return (
        
            <div className="cards container px-4 py-5" id="custom-cards">
                
                    {store.favorites.length > 0 ? (
                        store.favorites.map((item, index) => (
                            <ul className="" style={{ listStyle: "none" }}>
                                <li
                                    key={index}
                                    className=" text-dark">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-dark rounded-circle border-0 mb-2"
                                        onClick={() => actions.removeFavorite(item)}>{trash}</button>
                                    <CardGallery pet={item} />
                                    
                                </li>


                            </ul>
                        ))
                    ) : (
                        <li className="dropdown-item-text text-center text-secondary"> Vacío </li>

                    )}
            </div>
        
    )

}


export default Favorites;