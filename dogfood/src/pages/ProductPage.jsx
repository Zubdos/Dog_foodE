import React from 'react';
import { useState, useEffect } from 'react';
import { BackNavigate } from '../components/BackNavigate/BackNavigate';
import { useParams } from 'react-router-dom';
import { api } from '../utils/Api';
import style from './productPage.module.css';
import { Product } from '../components/Product/Product';

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      api.getProduct(id).then((data) => {
        setProduct(data);
      });
    }
  }, [id]);

  return (
    <div className={style.container}>
      <BackNavigate />
      <Product product={product} setProduct={setProduct} />
    </div>
  );
};
