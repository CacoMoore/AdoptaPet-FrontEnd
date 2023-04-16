import CardGallery from "../components/cardGallery"
import FormGallery from "../components/formGallery"
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination";


const PhotoGallery = () => {
    const { store, actions } = useContext(Context)


    useEffect(() => {
        actions.getPets()
    }, [])

    const lastIndex = store.currentPage * store.petsPerPage
    const firstIndex = lastIndex - store.petsPerPage

    return <div className="div-main ">

        <div className="  header-gallery ">
        </div>
        <div className=" div-header p-5">
            <h1 className=" text-center">Galeria de mascotas</h1>
            <p className="text-center fs-5 fw-lighter">
                En estas sección se muestran los animalitos que buscan un hogar. Debido a la gran cantidad de mascotas callejar en Chile, es imposible rescatar a todos los perros y gatos que se encuentran viviendo en la calle. Pero un pequeño porcentaje aquí mostrados puede tener la posibilidad de encontrar un nuevo hogar.
                <br />
                <br />
                "El abandono de perros es un problema nacional. Desde 2018 se estima que hay más de 300 mil animales callejeros en Chile, contando a perros y gatos. (subsecretaría de desarrollo regional y administrativo)"

            </p>
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

                                    return <div className=" col-lg-4 col-md-12 mb-5" key={pet.id}>
                                        <CardGallery pet={pet}

                                        /*  imgGallery="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" */
                                        />
                                        <Link to={`/pet/${pet.id}`}> Ver más Información
                                        </Link>

                                    </div>

                                }).slice(firstIndex, lastIndex)
                            ) : (
                                <p>No hay animales para adoptar</p>
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
        <div className="container p-5 mb-5 text-center d-flex justify-content-center div-footer rounded shadow-lg">
            <p className="fs-5 fw-lighter border  p-2 w-50 bg-white rounded shadow ">Para lograr evitar el abandono de perros se necesita de <br /> una participación integral en donde se una la ciudadanía, <br />las instituciones o asociaciones de protección animal y las <br />autoridades.</p>
        </div>
    </div>
}

export default PhotoGallery