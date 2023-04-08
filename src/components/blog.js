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
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-10 d-flex justify-content-between p-2">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4 p-2">
                            <img /*props.blogimage*/ src="https://www.purina-latam.com/sites/default/files/styles/social_share_large/public/purina-gatos%20en%20adopcion-que-es-mejor-gatitos-bebes-o-gatos-adultos.jpg?itok=IqRKD1Zt" className="img-fluid rounded-start p-2" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="mb-0">{props.post.id}</p>
                                <h3 className="mb-0"> {props.post.title}</h3>
                                <div className="mb-1 text-body-secondary">{props.post.date}</div>
                                <p className="mb-auto">{props.post.description}</p>
                                {rol_id === 1 && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-dark rounded-circle border-0 mb-2"
                                        onClick={() => actions.handleDeletePost(props.post.id)} >{trash}</button>
                                        
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
};

export default Blog;