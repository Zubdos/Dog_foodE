import React from 'react';
import { Logo } from './../Logo/Logo.jsx';
import { Search } from './../Search/Search.jsx';
import s from './header.module.css';
import { Link } from 'react-router-dom';
import {ReactComponent as Basket} from './img/basket.svg'

export const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <Logo className='logo' />
        <Search setSearch={() => {}} />
        <Link to='/basket' className={s.link}>
          <Basket  className={s.image}/>
        </Link>
        <Link to='/' className={s.link}>
          Войти
        </Link>
      </div>
    </div>
  );
};
