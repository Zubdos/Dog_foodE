import React, { useContext, useEffect } from 'react';
import { Banner } from '../components/Banner/Banner';
import { Main } from '../components/Main/Main';
import { api } from './../utils/Api';
import { Ctx } from '../context/Ctx';

export const MainPage = () => {
  const { goods, setGoods } = useContext(Ctx);

  useEffect(() => {
    api.getProducts().then((data) => {
      const filteredData = data.products.slice(0, 16);
      setGoods(filteredData);
    });
  }, [setGoods]);

  return (
    <div>
      <Banner />
      <Main cards={goods} />
    </div>
  );
};
