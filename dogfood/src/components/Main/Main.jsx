import React from 'react';
import s from './Main.module.css';
import { Card } from '../Card/Card.jsx';

export const Main = ({ cards }) => {
    return (
    <div className={s['main-container']}>
      <div className={s['card-advertisement1']}></div>
      <div className={s['cards-home']}>
        <div className={s['card-advertisement2']}></div>
        <div className={s['card-advertisement3']}></div>
        {cards.map((item, i) => {
          return <Card key={'card_' + i} card={item}	/>;
        })}
      </div>
    </div>
  );
};
