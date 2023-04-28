import React from 'react';

import { FiSearch, FiX } from 'react-icons/fi';
import debounce from 'lodash.debounce';

import { SearchContext } from '../../App';

import style from './Search.module.scss';

const Search = () => {
  const { setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef();

  const updateSearchVAlue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchVAlue(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <FiSearch className={style.wrapper__icon} />
      <input
        ref={inputRef}
        className={style.wrapper__input}
        type="text"
        placeholder="Поиск пиццы ..."
        value={value}
        onChange={onChangeInput}
      />
      {value && <FiX className={style.wrapper__delete} onClick={onClickClear} />}
    </div>
  );
};

export default Search;
