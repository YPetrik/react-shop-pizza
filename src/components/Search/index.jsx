import React from 'react';

import { FiSearch, FiX } from 'react-icons/fi';

import style from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={style.wrapper}>
      <FiSearch className={style.wrapper__icon} />
      <input
        className={style.wrapper__input}
        type="text"
        placeholder="Поиск пиццы ..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && <FiX className={style.wrapper__delete} onClick={() => setSearchValue('')} />}
    </div>
  );
};

export default Search;
