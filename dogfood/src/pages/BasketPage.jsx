import React, { useContext } from 'react';
import { Ctx } from './../context/Ctx';
import { Basket } from '../components/Basket/Basket';
import { BasketFull } from '../components/BasketFull/BasketFull';

export const BasketPage = () => {
  const { basket } = useContext(Ctx);

  return <>{basket?.length ? <BasketFull basket={basket} /> : <Basket />}</>;
};
