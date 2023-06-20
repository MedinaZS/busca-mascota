import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_ROUTES } from "../../helper/utility";

const ListaReportes = () => {
  const [lista, setLista] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    cargarReportes(API_ROUTES.REPORTES);
  }, []);

  const cargarReportes = (url) => {
    axios
      .get(url)
      .then((response) => {
        setLista(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
        setCurrentPage(1);
        setTotalPages(Math.ceil(response.data.count / response.data.results.length));
      })
      .catch((error) => console.error(error));
  };

  const handleNextPage = () => {
    cargarReportes(nextPage);
  };

  const handlePreviousPage = () => {
    cargarReportes(previousPage);
  };

  const handlePageClick = (page) => {
    const url = `http://127.0.0.1:8000/api/reportes/?page=${page}`;
    cargarReportes(url);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = currentPage;
      let endPage = startPage + 4;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - 4;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      {lista && (
        <div className="container-fluid">
          <div className="col-lg-7 mx-auto">
            <ul className="list-group mb-2">
              {lista.map((item, i) => (
                <li className="list-group-item" key={i}>
                  <div className="media d-flex">
                    <Link to={`/reporte/${item.id}`}>
                      <img
                        className="align-self-center mr-3 mt-1"
                        width="150px"
                        height="150px"
                        src={`http://127.0.0.1:8000${item.picture}`}
                        alt="report picture"
                      />
                    </Link>
                    <div className="media-body mx-3">
                      <h5 className="mt-0 text-uppercase text-dark mr-2">
                        <Link to={`/reporte/${item.id}`}>{item.title}</Link>
                      </h5>
                      <h6 className="mr-2 small">
                        Últ. vez visto el {item.last_time_seen}
                      </h6>
                      <p className="mr-2">{item.description}</p>{" "}
                      <p className="mr-2"> Contacto: {item.phone}</p>
                      <p>
                        {item.city}, {item.country}
                      </p>
                      <Link
                        className="btn btn-sm btn-warning mt-3 amarillo"
                        to={`/reporte/${item.id}`}
                      >
                        {" "}
                        Ver reporte completo
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <nav aria-label="Page navigation example ">
              <ul className="pagination d-flex justify-content-center">
                {previousPage && (
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={handlePreviousPage}
                    >
                      Anterior
                    </button>
                  </li>
                )}
                {generatePageNumbers().map((pageNumber) => (
                  <li className="page-item" key={pageNumber}>
                    <button
                      className={`page-link ${pageNumber !== 1 ? "mr-1" : ""}`}
                      onClick={() => handlePageClick(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                ))}
                {nextPage && (
                  <li className="page-item">
                    <button className="page-link" onClick={handleNextPage}>
                      Siguiente
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaReportes;
