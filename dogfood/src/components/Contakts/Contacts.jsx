import React from 'react';
import s from './Contacts.module.css';

export const Contacts = (props) => {
  return (
    <div className={s.footer__contacts}>
      <p>Мы на связи</p>
      <p>
        <a href='/'>8 (999) 00-00-00</a>
      </p>
      <p>
        <a href='/#'>dogfood.ru@gmail.com</a>
      </p>
    </div>
  );
};
