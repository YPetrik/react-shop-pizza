import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onChangeIndex = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => (
          <li
            key={i}
            className={activeIndex === i ? 'active' : ''}
            onClick={() => onChangeIndex(i)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
