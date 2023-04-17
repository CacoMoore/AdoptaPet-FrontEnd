import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import CardGallery from "../components/cardGallery";
import Swal from 'sweetalert2'

function Favorites() {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const { store, actions } = useContext(Context);
  const { user_id, token } = store;


  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8080/favorites/user/${user_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [token, user_id]);

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading....</span>
        </div>
      ) : (
        <div className="row flex-wrap justify-content-center">



          {data.length > 0 ? (
            data.map((item, index) => (


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
            <li className="dropdown-item-text text-center text-secondary">
              Vacío
            </li>
          )}

        </div>

      )}
    </div>
  );
}

export default Favorites;