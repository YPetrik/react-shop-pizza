import React from 'react';

import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: any;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={style.wrapper}
        breakLabel="..."
        // nextLabel={<FiChevronsRight />}
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4} // сколько на странице будет обьектов
        pageCount={3} // сколько страниц будет
        // previousLabel={<FiChevronsLeft />}
        forcePage={currentPage - 1} // говорит на какой странице погинации мы будем при рендаринге
        previousLabel="<"
        // renderOnZeroPageCount={null}
      />
    </>
  );
};
export default Pagination;
