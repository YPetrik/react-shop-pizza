import React from 'react';

import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
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
        forcePage={0} // говорит на какой странице погинации мы будем при рендаринге
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
export default Pagination;
