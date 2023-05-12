import React from 'react';
import style from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😏</span> <br />
        Ничего не найдено
      </h1>

      <p className={style.description}>К сожалению данная страница отсутствует в нашем магазине</p>
    </div>
  );
};

export default NotFoundBlock;
