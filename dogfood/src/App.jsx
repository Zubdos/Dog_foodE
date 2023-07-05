import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage';
import { ProductPage } from './pages/ProductPage';
import { BasketPage } from './pages/BasketPage';
import { useEffect, useState } from 'react';
import { api } from './utils/Api';
import { Ctx } from './context/Ctx';

function App() {
  let usr = localStorage.getItem('user');
  if (usr) {
    usr = JSON.parse(usr);
  }

  const [setApi] = useState({});
  const [user, setUser] = useState(usr);
  const [token, setToken] = useState(localStorage.getItem('token12'));
  const [goods, setGoods] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [authors] = useState([]);
  const [basket, setBasket] = useState(
    localStorage.getItem('basket12')
      ? JSON.parse(localStorage.getItem('basket12'))
      : []
  );

  useEffect(() => {
    setGoods(goods);
  }, [goods]);

  useEffect(() => {
    localStorage.setItem('basket12', JSON.stringify(basket));
  }, [basket]);

  const value = {
    user,
    token,
    api,
    goods,
    favorites,
    setUser,
    setToken,
    setApi,
    setGoods,
    setFavorites,
    basket,
    setBasket,
    authors,
  };

  return (
    <>
      {' '}
      <Ctx.Provider value={value}>
        <div className='App'>
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/basket' element={<BasketPage />} />
              <Route path='/product/:id' element={<ProductPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Ctx.Provider>
    </>
  );
}

export default App;
