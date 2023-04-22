import React from 'react';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

import axios from 'axios';

const Home = () => {
  const [arrPizzas, setArrPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getFetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('https://641fd25482bea25f6df5717d.mockapi.io/items');
      setArrPizzas(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getFetchData();
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
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
