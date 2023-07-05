import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Rate } from './../../components/Rate/Rate';
import truck from './../../images/truck.svg';
import quality from './../../images/quality.svg';
import style from './index.module.css';
import classNames from 'classnames';
import Review from './../../components/Review/review';
import { FormReview } from '../FormReview/FormReview';
// import { useNavigate } from 'react-router-dom';
import { Ctx } from '../../context/Ctx';
import { api } from '../../utils/Api';
// import { Trash3 } from 'react-bootstrap-icons';

export const Product = ({ product, setProduct }) => {
  const [count] = useState(0);
//   const navigate = useNavigate();
  const { basket, setBasket } = useContext(Ctx);
  const discount_price = Math.round(
    product.price - (product.price * product.discount) / 100
  );

  useEffect(
    (id) => {
      api
        .getProduct(id)
        .then((data) => {
          setProduct(data);
        });
    },
    [setProduct]
  );

//   const remove = (id) => {
//     api
//       .delProduct(id)
//       .then((res) => res.json())
//       .then((data) => {
//         if (!data.error) {
//           alert(data.name + ' товар удален');
//           setGoods((prev) => prev.filter((g) => g._id !== data._id));
//           navigate(`/catalog`);
//         }
//       });
//   };

  const buy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBasket((prev) => {
      const test = prev.filter((el) => el.id === basket._id);
      if (test.length) {
        return prev.map((el) => {
          if (el.id === basket._id) {
            el.cnt++;
          }
          return el;
        });
      } else {
        return [...prev, { id: basket._id, cnt: 1,  card: product }];
      }
    });
  };


  const productRating = (reviews) => {
    if (!reviews || !reviews?.length) {
      return 0;
    }
    const res = reviews.reduce((acc, el) => (acc += el.rating), 0);
    return Math.floor(res / reviews.length);
  };

  return (
    <div>
      <div className={style.title}>{product.name}</div>
      <div className={style.productInfo}>
        <span>
          Артикул: <b>2388907</b>
        </span>
        <Rate rating={productRating(product?.reviews)} />
      </div>

      <div className={style.product}>
        <div className={style.imgWrapper}>
          <img
            className={style.img_product}
            src={product.pictures}
            alt={`Изображение товара`}
          />
        </div>
        <div className={style.desc}>
          <span className={!!product.discount ? style.oldPrice : style.price}>
            {product.price} ₽ <p>за 100 грамм</p>
          </span>
          {!!product.discount && (
            <span
              className={classNames(style.price, style['price_type_discount'])}
            >
              {discount_price}₽
            </span>
          )}
          <div className={style.btnWrap}>
            <div className={style.btnLeft}>
              <button className={style.minus}> - </button>
              <span className={style.amount}>{count}</span>
              <button className={style.plus}> + </button>
            </div>
            <button className='btn' onClick={buy}>
              В корзину
            </button>
             </div>
          <div className={style.delivery}>
            <img src={truck} aria-hidden='true' alt='Доставка' />
            <div className={style.right}>
              <h3 className={style.name}>Доставка по всему Миру!</h3>
              <p className={style.text}>
                Доставка курьером - <span className={style.bold}>от 399 ₽</span>
              </p>
              <p className={style.text}>
                Доставка в пункт выдачи -{' '}
                <span className={style.bold}>от 199 ₽</span>
              </p>
            </div>
          </div>
          <div className={style.delivery}>
            <img src={quality} aria-hidden='true' alt='' />
            <div className={style.right}>
              <h3 className={style.name}>Гарантия качества</h3>
              <p className={style.text}>
                Если вам не понравилось качество нашей продукции, мы вернем
                деньги, либо сделаем все возможное, чтобы удовлетворить ваши
                нужды
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.box}>
        <h3 className={style.title}>Описание</h3>
        <p>{product.description}</p>
        <h3 className={style.title}>Характеристики</h3>
        <div className={style.grid}>
          <div className={style.naming}>Вес</div>
          <div>1 шт. 120-200 грамм</div>
          <div className={style.naming}>Цена</div>
          <div> {product.price} ₽ за 100 грамм</div>
          <div className={style.naming}>Польза</div>
          <div className={style.description}>
            <p>
              Большое содержание аминокислот и микроэлементов оказывает
              положительное воздействие на общий обмен веществ собаки.
            </p>
            <p>Способствуют укреплению десен и жевательных мышц.</p>
            <p>
              Развивают зубочелюстной аппарат, отвлекают собаку во время смены
              зубов.
            </p>
            <p>
              Имеет цельную волокнистую структуру, при разжевывание получается
              эффект зубной щетки, лучше всего очищает клыки собак.
            </p>
            <p>Следует учесть высокую калорийность продукта.</p>
          </div>
        </div>
      </div>
      <h2>Отзывы</h2>
      <div className='reviews'>
        {product.reviews &&
          product.reviews.length > 0 &&
          product.reviews.map((el, i) => <Review {...el} key={i} />)}
      </div>

      <div className={style.form}>
        <FormReview product={product} setProduct={setProduct} />
      </div>
    </div>
  );
};
