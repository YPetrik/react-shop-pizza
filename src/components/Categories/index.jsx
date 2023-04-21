import React from 'react';

const Categories = () => {
  const title = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {title.map((el, i) => (
          <li key={i} className="active">
            {' '}
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
