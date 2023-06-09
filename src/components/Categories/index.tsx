import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};
const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} className={value === i ? 'active' : ''} onClick={() => onChangeCategory(i)}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
