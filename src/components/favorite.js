import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import CardGallery from "../components/cardGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Favorites() {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const { store, actions } = useContext(Context);
  const { user_id, token } = store;
  const trash = <FontAwesomeIcon icon={faTrash} />;

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
    <div className="container d-flex">
      {isLoading ? (
        <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      ) : (
        <div className="row">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div className="col-4 p-2" style={{ listStyle: "none" }}>
                <div key={index} className="p-2 text-dark shadow-lg">
                  <CardGallery pet={item} />
                  <button
                    type="button"
                    className="btn btn-lg btn-danger w-100"
                    onClick={() => actions.handlePet(item.id)}
                  >
                    {trash}
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

