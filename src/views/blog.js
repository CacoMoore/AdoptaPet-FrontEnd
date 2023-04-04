
const Blog = () => {
    return (
        <div>
            <div className="p-4 p-md-5 mb-4 rounded">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Noticias de nuestra comunidad</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    <p className="lead mb-0"><a href="/#" className="text-black fw-bold">Continue reading...</a></p>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://conecta.tec.mx/sites/default/files/styles/header_full/public/2021-06/adoptar-perro.jpg?itok=BSPwpz4C" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="mb-0">Jornadas de adopción</h3>
                                    <div className="mb-1 text-body-secondary">2023</div>
                                    <p className="mb-auto">Encuentra las fechas destindas a jornadas de adopción y adopta al nuevo miembro de la familia.</p>
                                    <button id="btn-date-adoption" className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Ver fechas</button>

                                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Jornadas de adopción</h5>
                                            <button  type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <p>
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Día</th>
                                                            <th></th>
                                                            <th>Mes</th>
                                                            <th>Año</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Sábado</td>
                                                            <td>07 </td>
                                                            <td>Enero</td>
                                                            <td>2023</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Sábado</td>
                                                            <td>11 </td>
                                                            <td>Febrero</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Sábado</td>
                                                            <td>11 </td>
                                                            <td>Marzo</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                           
                                                            <td>Sábado</td>
                                                            <td>15 </td>
                                                            <td>Abril</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Sábado</td>
                                                            <td>13 </td>
                                                            <td>Mayo</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Sábado</td>
                                                            <td>10 </td>
                                                            <td>Junio</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                           
                                                            <td>Sábado</td>
                                                            <td>08 </td>
                                                            <td>Julio</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Sábado</td>
                                                            <td>12 </td>
                                                            <td>Agosto</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Sábado</td>
                                                            <td>09 </td>
                                                            <td>Septiembre</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Sábado</td>
                                                            <td>07 </td>
                                                            <td>Octubre</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Sábado</td>
                                                            <td>11 </td>
                                                            <td>Noviembre</td>
                                                            <td>2023</td>
                                                        </tr>
                                                        <tr>
                                                            
                                                            <td>Sábado</td>
                                                            <td>09 </td>
                                                            <td>Diciembre</td>
                                                            <td>2023</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*esta parte del blog debe estar conectada al backend por props */}

                <div className="col-md-6">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img /*{prop.blogimage}*/ src="https://www.purina-latam.com/sites/default/files/styles/social_share_large/public/purina-gatos%20en%20adopcion-que-es-mejor-gatitos-bebes-o-gatos-adultos.jpg?itok=IqRKD1Zt" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8"> 
                                <div className="card-body">
                                    <h3 className="mb-0"> {/*{prop.title*/}Alejandra encontro a su compañera de aventuras</h3>
                                    <div className="mb-1 text-body-secondary">{/*{prop.date*/}Abril 2023</div>
                                    <p className="mb-auto">{/*{prop.description*/}Alejandra llegó a nosotros con la esperanza de encontrar un gatito que la acompañara en sus viajes y aventuras por el mundo. Ella se dedica a cuidar casas de personas que salen de vacaciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Blog;