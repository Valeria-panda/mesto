//класс кард
export default class Card {
    constructor(data, userId, cardSelector, handleCardClick, handleDeleteCard, deleteLike, addLike){
      this.data = data;
      this._userId = userId;
      this._cardId = data._id;
      this._ownerId = data.owner._id;
      this._likes = data.likes;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeleteCard = handleDeleteCard;
      this._deleteLike = deleteLike;
      this._addLike = addLike;
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
      

      this._countLikes = this._element.querySelector('.elements__text-likecounter');
      this._countLikes.textContent = this._likes.length;

      const deleteCard = this._element.querySelector('.elements__delete');
      if (this._ownerId === this._userId) {
        deleteCard.classList.add("elements__delete_visible");
      }
      this._setEventListeners();
      this.ifAlreadyLiked();
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
      if(event.target.classList.contains('elements__text-like_active')){
        event.target.classList.remove('elements__text-like_active')
        this._countLikes.textContent = this._likes.length -=1;
        this._deleteLike(this._cardId);
      }else{
        event.target.classList.add('elements__text-like_active')
        this._countLikes.textContent = ++this._likes.length ;
        this._addLike(this._cardId);
      }
    }

    ifAlreadyLiked() {
      if (this._likes.some((like) => like._id === this._userId)) {
        this._element.querySelector(".elements__text-like").classList.add("elements__text-like_active");
      }
    }

    //метод удаляет карточки с фото
    removeCard(){
     this._element.remove();
     this._element = null;
    }

  }