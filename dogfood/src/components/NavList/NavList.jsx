import React from 'react';
import s from './NavList.module.css';

export const NavList = ({ list }) => {
  return (
    <nav className={s.footer__nav}>
      <ul className={s.footer__list}>
        {list.map((el) => {
          return (
            <li className={s.footer__list_item} key={el}>
              <a href="/#" className={s.footer__list_link}>{el}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
