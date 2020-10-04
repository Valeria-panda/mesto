//класс кард
export default class Card {
    constructor(data, userId, cardSelector, handleCardClick, handleDeleteCard){
      this.data = data;
      this._userId = userId;
      this._cardId = data._id;
      this._ownerId = data.owner._id;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeleteCard = handleDeleteCard;
    }
    //метод возвращающий разметку карточки
    _getTemplate(){
      const cardElement = document.querySelector(this._cardSelector)
      .content.querySelector('.elements__item')
      .cloneNode(true);
      return cardElement;
    }
    
    //публчиный метод генерит карточки
    generateCard(){
      this._element = this._getTemplate();
      this._cardImage = this._element.querySelector('.elements__item-img');
     
      this._cardImage.src = this.data.link;
      this._cardImage.alt = this.data.name;
      this._element.querySelector('.elements__text-title').textContent = this.data.name;
      this._element.querySelector('.elements__text-like');
      const deleteCard = this._element.querySelector('.elements__delete');
      if (this._ownerId === this._userId) {
        deleteCard.classList.add("elements__delete_visible");
      }
      this._setEventListeners();
      return this._element;
    }

    _setEventListeners(){
      //слушает кнопку лайка дизлайка
      this._element.querySelector('.elements__text-like').addEventListener('click', () => this._handleLikeClick());
      //слушает кнопку удаления карты с фото
      if (this._ownerId === this._userId) {
        this._element.querySelector(".elements__delete").addEventListener("click", () => this._handleDeleteCard(this.data));
      }
      //слушает клик по фото и открывает попап с фото
      this._element.querySelector('.elements__item-img').addEventListener('click', () => this._handleCardClick(this.data));

    }

    //метод обработки лайка дизлайка
    _handleLikeClick(){
      this._element.querySelector('.elements__text-like').classList.toggle('elements__text-like_active');
    }
    //метод обработки удаления карточки с фото
    handleDeleteImageCard(){
     this._element.remove();
     this._element = null;
    }


  }