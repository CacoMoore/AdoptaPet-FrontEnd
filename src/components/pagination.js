import { useContext } from "react";
import { Context } from "../store/context";

const Pagination = () => {
  const { store, actions } = useContext(Context);

  const totalpets = store.pets.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalpets / store.petsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination">
        <li
          className={`page-item ${store.currentPage === 1 ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            onClick={actions.handleCurrentPagePrevius}
          >
            Anterior
          </button>
        </li>
        {pageNumbers.map((noPage) => (
          <li
            className={`page-item ${
              noPage === store.currentPage ? "active" : ""
            }`}
            key={noPage}
          >
            <button
              className="page-link"
              onClick={() => actions.onSpecificPage(noPage)}
            >
              {noPage}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            store.currentPage >= pageNumbers.length ? "disabled" : ""
          }`}
        >
          <button className="page-link" onClick={actions.handleCurrentPageNext}>
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
