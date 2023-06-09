import React from 'react';

import { FiSearch, FiX } from 'react-icons/fi';
import debounce from 'lodash.debounce';

import style from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useLocation } from 'react-router-dom';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();
  const newPath: string = pathname.split('').slice(0, -1).join('');

  const updateSearchVAlue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current?.focus();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchVAlue(e.target.value);
  };

  return (
    <>
      {newPath !== '/pizza/' ? (
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
      ) : (
        ''
      )}
    </>
  );
};

export default Search;
