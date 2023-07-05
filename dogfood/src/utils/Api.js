const baseData = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlMTRiNmUwYmYyYzUxOWJkYThkYmMiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjg1OTg0NDY5LCJleHAiOjE3MTc1MjA0Njl9.UBepR6oMDISyRrkGLBszSgg_unfFaeapReAK2fS-L-c',
  },
};

const resp = (res) => {
  return res.json();
};


class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }

  signUp(data) {
    // регистрация
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(resp)
      .catch((e) => console.log(e));
  }

  signIn(data) {
    // авторизация
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(resp)
      .catch((e) => console.log(e));
  }
  getProducts() {
    return fetch(`${this.baseUrl}/products`, {
      method: 'GET',
      headers: this.headers,
    })
      .then(resp)
      .catch((e) => console.log(e));
  }
  getProduct(id) {
    return fetch(`${this.baseUrl}/products/${id}`, {
      headers: this.headers,
    })
      .then(resp)
      .catch((e) => console.log(e));
  }

  addProduct(body) {
    return fetch(`${this.path}/products`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(resp);
  }
  delProduct(id) {
    return fetch(`${this.path}/products/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(resp);
  }
  setLike(id, isLike) {
    return fetch(`${this.path}/products/likes/${id}`, {
      method: isLike ? 'DELETE' : 'PUT',
      headers: this.headers,
    }).then(resp);
  }
  deleteLike() {
    // убрать лайк
    return fetch(`${this.path}/products/likes/:productId`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(resp);
  }

  createReview(productId, data) {
    //добавить отзыв
   return fetch(`${this.baseUrl}/products/review/${productId}`, {
     method: 'POST',
     headers: this.headers,
     body: JSON.stringify(data),
   })
     .then(resp)
     .catch((e) => console.error(e));
  }

  deleteReview() {
    //удалить отзыв
    return (fetch(`${this.path}/products/review/:postId/:reviewId`),
    {
      method: 'DELETE',
      headers: this.headers,
    }).then(resp);
  }

  setAllReviews() {
    // получить все отзывы
    return (fetch(`${this.path}/products/review/`),
    {
      method: 'GET',
      headers: this.headers,
    }).then(resp);
  }

  setIdReviews() {
    // получить отзывы по конкретному товару
    return (fetch(`${this.path}/products/review/:productId`),
    {
      method: 'POST',
      headers: this.headers,
    }).then(resp);
  }

  // Данные о пользователе
  getUsers() {
    return fetch(`${this.path}/v2/${this.group}/users`, {
      headers: this.headers,
    }).then(resp);
  }

  updUser(body, img = false) {
    return fetch(
      `${this.path}/v2/${this.group}/users/me${img ? '/avatar' : ''}`,
      {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    ).then(resp);
  }
}

export const api = new Api(baseData);
