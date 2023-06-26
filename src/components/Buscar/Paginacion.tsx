

interface PaginacionProps {
  currentPage: number;
  totalPages: number;
  nextPage: string;
  previousPage: string;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number | null) => void;
}

const Paginacion = (props: PaginacionProps) => {
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const { currentPage, totalPages } = props;
        // console.log(props)
        if (totalPages <= 5) {
          for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else {
          let startPage = currentPage;
          let endPage = startPage + 4;
      
          if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - 4, 1); // Adjust startPage if it goes below 1
          }
      
          for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
          }
        }
      
        return pageNumbers;
      };
      

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination d-flex justify-content-center">
        {props.previousPage &&(
          <li className="page-item">
            <button className="page-link" onClick={props.handlePreviousPage}>
              &lt;
            </button>
          </li>
        )}
        {generatePageNumbers().map((pageNumber) => (
          <li className="page-item" key={pageNumber}>
            <button
              className={`page-link ${pageNumber !== 1 ? 'mr-1' : ''}  ${pageNumber == props.currentPage && ' active'}`}
              onClick={() => props.handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        {props.nextPage && (
          <li className="page-item">
            <button className="page-link" onClick={props.handleNextPage}>
              &gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginacion;
