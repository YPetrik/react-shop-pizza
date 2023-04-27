import React from 'react';

import Sort from '../../components/Sort';
import Pagination from '../../components/Pagination';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

import axios from 'axios';

import { SearchContext } from '../../App';

import { setCategoryId } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);

  const { searchValue } = React.useContext(SearchContext);
  const [arrPizzas, setArrPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  const onChangeCategory = (i) => {
    dispatch(setCategoryId(i));
  };

  const getFetchData = async () => {
    setIsLoading(true);

    const category = categoryId > 0 ? categoryId : '';
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    try {
      const { data } = await axios.get(
        `https://641fd25482bea25f6df5717d.mockapi.io/items?page=${currentPage}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}${search}
				`,
      );
      setArrPizzas(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getFetchData();
  }, [categoryId, sortType, searchValue, currentPage]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : arrPizzas.map((obj, id) => <PizzaBlock key={id} {...obj} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onChangePage={(number) => setCurrentPage(number)}
      />
    </div>
  );
};

export default Home;
