export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }

    //проверяем ответ сервера
    _serverAnswer(res){
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    
    //подгружаем с сервера данные карточек
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      })
      .then(this._serverAnswer)
    }

    //подгружаем информацию о пользователе с сервера
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      })
      .then(this._serverAnswer)
    }

    //загружаем на сервер информацию о пользователе, отредактированную
    patchUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      })
      .then(this._serverAnswer)
    }
  
    //обновление аватара
    patchAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      })
      .then(this._serverAnswer)
    }
  
    //добавление новой карты
    postNewCard(data) {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      })
      .then(this._serverAnswer)
    }
    
    //удаление карточки 
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        headers: this._headers,
        method: "DELETE",
      })
      .then(this._serverAnswer)
    }

    //постановка лайка
    putlike(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: this._headers,
      })
      .then(this._serverAnswer)
    }

    //снятие лайка
    deleteLike(cardId) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      })
      .then(this._serverAnswer)
    }

  }
