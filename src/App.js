import Sort from './components/Sort';
import Header from './components/Header';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => (
              <PizzaBlock key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
