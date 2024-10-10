import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage: number;  // Add currentPage as a prop
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange, currentPage }) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage - 1}  // Add forcePage prop, subtract 1 since it's zero-based
      />
    </div>
  );
};

export default Pagination;
