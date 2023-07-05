import React from 'react';
import { Logo } from './../Logo/Logo.jsx';
import { NavList } from '../NavList/NavList.jsx';
import { Contacts } from '../Contakts/Contacts.jsx';
import s from './Footer.module.css';

export const Footer = (props) => {
  const ul1 = ['Каталог', 'Акции', 'Новости', 'Отзывы'];
  const ul2 = [
    'Оплата и доставка',
    'Часто спрашивают',
    'Обратная связь',
    'Контакты',
  ];
  return (
    <div className={s.footer}>
      <div className={s.footer__wrapper}>
        <div className={s.footer__logo}>
          <Logo className='logo' />
          <p className={s.copyright}>© «Интернет-магазин DogFood.ru»</p>
        </div>

        <NavList list={ul1} />
        <NavList list={ul2} />
        <Contacts />
      </div>
    </div>
  );
};
