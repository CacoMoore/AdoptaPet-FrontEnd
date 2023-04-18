import { useContext } from "react";
import { Context } from "../store/context";
import { useEffect, useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Blog = (props) => {
    const { store, actions } = useContext(Context)
    const { loginUser } = store;
    const { rol_id } = loginUser;

    const trash = <FontAwesomeIcon icon={faTrash} />

    return (
        <div className="row mb-2 justify-content-center">
            <div className="col-md-8">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4 col-sm-12 d-flex img-container" id="img-blog">
                            <img src="https://www.purina-latam.com/sites/default/files/styles/social_share_large/public/purina-gatos%20en%20adopcion-que-es-mejor-gatitos-bebes-o-gatos-adultos.jpg?itok=IqRKD1Zt"
                                className="img-fluid rounded-start p-2" alt="..." />
                        </div>
                        <div className="col-md-8 container">
                            <div className="card-body" id="containerpost">
                                <h3 className="mb-0"> {props.post.title}</h3>
                                <div className="mb-1 text-body-secondary">{props.post.date}</div>
                                <p className="mb-auto">{props.post.description}</p>

                            </div>
                            {rol_id === 1 && (
                                <div style={{ position: "relative" }}>
                                <button id="btn-trash-blog"
                                    type="button"
                                    className="btn btn-lg btn-block justify-content-center-end"
                                    onClick={() => actions.handleDeletePost(props.post.id)} ><i class="bi bi-trash3"
                                    style={{ position: "absolute", bottom: 0, right: 0 }}></i> </button>
                                </div>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>



    )
};

export default Blog;