import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
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
      />
    </div>
  );
};

export default Pagination;