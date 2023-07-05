import React from 'react';
import style from './style.module.css';

const AuthorReview = ({ author, text }) => {
  return (
    <>
      <div className={style.userName}>{author.name || ''}</div>
      <img className={style.avatar} src={author.avatar} alt={author}></img>
      <div className={style.about}>{text}</div>
    </>
  );
};

export default AuthorReview;
