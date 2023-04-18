import CardGallery from "../components/cardGallery";
import FormGallery from "../components/formGallery";
import { useContext, useEffect } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PhotoGallery = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPets();
  }, []);

  const lastIndex = store.currentPage * store.petsPerPage;
  const firstIndex = lastIndex - store.petsPerPage;


  const fav = <FontAwesomeIcon icon={faHeart} />
  const pawn = <FontAwesomeIcon icon={faPaw} />


  return (<div className="div-main ">

    <div className="  header-gallery ">
    </div>
    <div className='col-md-12 text-center'>
      <div className="py-5 text-center">
        <p className="fs-1">{pawn}</p>
        <h2>Galeria De Mascotas </h2>
        <p className="lead">Aquí encontrarás la galeria de todas las mascotas que se encuentran en adopción.</p>
        <p className="lead">La <a href="https://www.bcn.cl/leychile/navegar?idNorma=1106037"><strong>Ley 21020</strong> </a> , sobre Tenencia Responsable de Mascotas y Animales de Compañía, más conocida como “Ley Cholito”, determina las obligaciones y los derechos de las personas responsables de mascotas o animales de compañía, entendidos como domésticos, de cualquier especie al aceptar tenerlos bajo su resguardo; lo que implica el cumplimiento de normas de salud, higiene y seguridad pública.</p>
      </div>
    </div>
    <div className="div-father">
      <div className="row d-flex flex-row-reverse">
        <div className="col-md-4 mt-5">
          <FormGallery />
        </div>
        <div className=" col-md-7  ">
          <div className=" py-2 mb-2 height-div">
            <div className="row ">
              <h1 className="my-5 text-center display-4">Mascotas en adopción</h1>
              {store.pets.length ? (
                store.pets.map(pet => {

                  return <div
                    style={{ borderRadius: "5px" }}
                    className=" col-lg-4 col-md-12 mb-5 border p-2"
                    key={pet.id}
                  >
                    <CardGallery pet={pet} />
                    <div className="text-center border">
                      <Link
                        style={{ backgroundColor: "#353755" }}
                        className="btn btn-md text-light w-100"
                        to={`/pet/${pet.id}`}
                      >
                        {" "}
                        Ver más sobre {pet.name}{" "}{pawn}
                      </Link>
                    </div>
                  </div>

                }).slice(firstIndex, lastIndex)
              ) : (
                <p className="text-center display-6">No hay animales para adoptar</p>
              )}
              <div className="d-flex justify-content-center">

                <Pagination




                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="container p-5 mb-5 text-center d-flex justify-content-center div-footer ">
      <p className="fs-5 fw-lighter border  p-2 w-50 bg-white rounded shadow ">Para lograr evitar el abandono de perros se necesita de <br /> una participación integral en donde se una la ciudadanía, <br />las instituciones o asociaciones de protección animal y las <br />autoridades.</p>
    </div>
  </div>
  );
};

export default PhotoGallery;
