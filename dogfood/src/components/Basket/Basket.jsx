import React from 'react';
import {ReactComponent as Smile} from './../../images/ic-notfound.svg'
import { Link } from 'react-router-dom';
import style from './basket.module.css'



export const Basket = () => {
    return (
        <div className={style.container}>
            <div className={style.header}><span className={style.count}>0 товаров</span> в корзине</div>
            <Smile className={style.smile}/>
            <p className={style.title}>В корзине нет товаров</p>
            <p className={style.subTitle}>Добавьте товар, нажав кнопку «В корзину» в карточке товара</p>

           <Link to="/" className={style.link}>На главную</Link>   
        </div>
    );
}

