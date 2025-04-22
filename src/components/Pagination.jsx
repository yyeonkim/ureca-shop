import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange, className }) {
  const isMobile = useIsMobile();

  const handlePageChange = (page) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={`${styles.pagination} ${className}`}>
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="bi bi-chevron-left" />
      </button>

      {isMobile ? (
        <span>
          {currentPage} of {totalPages}
        </span>
      ) : (
        Array.from({ length: totalPages }, (_, index) => (
          <button
            type="button"
            key={`page-${index + 1}`}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))
      )}

      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="bi bi-chevron-right" />
      </button>
    </div>
  );
}

export default Pagination;
