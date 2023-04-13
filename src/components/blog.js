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
        <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://www.purina-latam.com/sites/default/files/styles/social_share_large/public/purina-gatos%20en%20adopcion-que-es-mejor-gatitos-bebes-o-gatos-adultos.jpg?itok=IqRKD1Zt" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{props.post.title}</h5>
                            <p class="card-text">{props.post.description}</p>  
                        </div>
                        <div class="card-footer">
                            <small class="text">{props.post.date}</small>
                        </div>
                        {rol_id === 1 && (
                                    <button id="btn-trash-blog"
                                        type="button"
                                        className="btn justify-content-end"
                                        onClick={() => actions.handleDeletePost(props.post.id)} ><i class="bi bi-trash3"></i> </button>

                                )}
                    </div>
                    
                </div>
            </div>
        </div>
        /*
              <div className="row mb-2">
                  <div className="col-md-12">
                      <div className="card mb-3" >
                          <div className="row g-0">
                              <div className="col-md-4 d-flex">
                                  <img /*props.blogimage*/
        /* src="https://www.purina-latam.com/sites/default/files/styles/social_share_large/public/purina-gatos%20en%20adopcion-que-es-mejor-gatitos-bebes-o-gatos-adultos.jpg?itok=IqRKD1Zt" className="img-fluid rounded-start p-2" alt="..." /> 
   </div>
    <div className="col-md-8 container">
        <div className="card-body">
            <h3 className="mb-0"> {props.post.title}</h3>
            <div className="mb-1 text-body-secondary">{props.post.date}</div>
            <p className="mb-auto">{props.post.description}</p>

        </div>
        {rol_id === 1 && (
                <button id="btn-trash-blog"
                    type="button"
                    className="btn justify-content-end"
                    onClick={() => actions.handleDeletePost(props.post.id)} ><i class="bi bi-trash3"></i> </button>

            )}
    </div>
</div>
</div>
</div>
</div>
*/


    )
};

export default Blog;