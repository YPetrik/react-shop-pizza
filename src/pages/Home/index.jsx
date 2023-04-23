import React from 'react';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

import axios from 'axios';

const Home = () => {
  const [arrPizzas, setArrPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [categoryId, setCategoryId] = React.useState(0);

  const getFetchData = async () => {
    setIsLoading(true);

    const category = categoryId > 0 ? categoryId : '';
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');

    try {
      const { data } = await axios.get(
        `https://641fd25482bea25f6df5717d.mockapi.io/items?category=${category}&sortBy=${sortBy}&order=${order} 
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
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : arrPizzas.map((obj, id) => <PizzaBlock key={id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
