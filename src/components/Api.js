export default class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      })
      .then(this._getResponseData);
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      })
      .then(this._getResponseData);
    }
  
    patchUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      })
      .then(this._getResponseData);
    }
  
    //обновление аватара
    patchAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar: data.link,
        }),
      })
      .then(this._getResponseData);
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
      .then(this._getResponseData);
    }

    _getResponseData(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
