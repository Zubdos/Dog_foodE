import React from 'react';
import AuthorReview from '../AuthorReview/AuthorReview';
import { Rate } from '../Rate/Rate';

const Review = ({ author, rating, created_at, text }) => {
  return (
    <>
      <AuthorReview author={author} text={text}></AuthorReview>
      <Rate rating={rating} />
      <div>{new Date(created_at).toLocaleString()}</div>
    </>
  );
};

export default Review;
