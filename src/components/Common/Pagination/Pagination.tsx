import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';
import { PaginationProps } from '../../../interfaces';



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
        forcePage={currentPage - 1}  
      />
    </div>
  );
};

export default Pagination;
