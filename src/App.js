import React from 'react';

import Sort from './components/Sort';
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';
import axios from 'axios';

function App() {
  const [arrPizzas, setArrPizzas] = React.useState([]);

  const getFetchData = async () => {
    try {
      const { data } = await axios.get('https://641fd25482bea25f6df5717d.mockapi.io/items');
      setArrPizzas(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getFetchData();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {arrPizzas.map((obj, id) => (
              <PizzaBlock key={id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
