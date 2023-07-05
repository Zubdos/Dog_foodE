import React from 'react';
import s from './Banner.module.css';
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div className={s.home__wrapper}>
      <div className={s.home__banner}>
        <h1>
          Крафтовые <br /> лакомства для <br /> собак
        </h1>
        <p>
          Всегда свежие лакомства ручной <br /> работы с доставкой по Всему Миру
        </p>
        <button className={s.catalog__btn}>
          <Link to='/catalog' className={s.catalog__link}>
            ПЕРЕЙТИ В КАТАЛОГ &#62;
          </Link>
        </button>
      </div>
    </div>
  );
};
