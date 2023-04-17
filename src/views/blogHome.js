import { useContext } from "react";
import { Context } from "../store/context";
import { useEffect } from "react";
import Blog from "../components/blog";
import { Link } from "react-router-dom";

const BlogHome = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPost();
  }, [actions]);

  return (
    <>
      <div className="p-4 p-md-5 mb-4 rounded ">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">Galería de adopción</h1>
          <p className="lead my-3">
            ¡Conoce a nuestros adorables amigos peludos en busca de hogar!
            Visita nuestra galería de mascotas de adopción y enamórate de sus
            miradas tiernas y personalidades únicas. ¡Adopta a tu próximo mejor
            amigo y bríndale el amor y cuidado que se merece!
          </p>
          <p className="lead mb-0">
            <Link to="/photoGallery" className="text-black fw-bold">
              Haz clic aquí para ver la galería completa.
            </Link>
          </p>
        </div>
      </div>

      <div className="container d-flex justify-content-around p-4 mt-4">
        <h1>Información relevante...</h1>
      </div>
      <div className="container d-flex justify-content-around p-4 shadow-lg ">
        <div className="col-md-10">
          <div className="card" >
            <div className="row g-0 p-2">
              <div className="col-md-4 d-flex img-container">
                <img src="https://conecta.tec.mx/sites/default/files/styles/header_full/public/2021-06/adoptar-perro.jpg?itok=BSPwpz4C" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8 ">
                <div className="card-body">
                  <h3 className="mb-0">Jornadas de adopción</h3>
                  <div className="mb-1 text-body-secondary">2023</div>
                  <p className="mb-auto">Encuentra las fechas destindas a jornadas de adopción y adopta al nuevo miembro de la familia.</p>
                  <button id="btn-date-adoption" className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Ver fechas</button>

                  <div
                    className="offcanvas offcanvas-start"
                    data-bs-scroll="true"
                    tabindex="-1"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                  >
                    <div className="offcanvas-header">
                      <h5
                        className="offcanvas-title"
                        id="offcanvasWithBothOptionsLabel"
                      >
                        Jornadas de adopción
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
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
      </div>

      <div className="container d-flex justify-content-around p-4 mt-4">
        <h1>Las Últimas Noticias...</h1>
      </div>
      <div className="container p-4 shadow-lg mb-4">
        {store.posts.length ? (
          store.posts.map(post => {

            return <div className="row mt-4 "
              key={post.id}>
              <Blog post={post}
                title={post.title}

                description={post.description}

                rol_id={post.rol_id}
              />
            </div>

          })
        ) : (
          <h4 className="text-center p-4 border">No hay posts para mostrar</h4>
        )}
      </div>
    </>
  );
};

export default BlogHome;
