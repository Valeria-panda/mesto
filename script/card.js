
const handleClosePhotoPopup = (evt) => {
  if(evt.key === 'Escape') {
  closePhotoPopup();
  }
};

const handleClosePhotoPopupOnBackgroundClick = (evt) => {
  if(evt.target.classList.contains('popup__background')) {
    closePhotoPopup();
  }
};

//функция закрытия попапа с фото
const closePhotoPopup = () => {
  const photoPopup = document.querySelector("#popup-openPhoto");//модалка окрытия фото
  photoPopup.classList.remove('popup_opened')
  document.removeEventListener('keydown', handleClosePhotoPopup);
  document.removeEventListener('click', handleClosePhotoPopupOnBackgroundClick);
}


//класс кард
class Card {
  constructor(data, cardSelector){
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
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
    this._setEventListeners();
    this._element.querySelector('.elements__item-img').src = this._link;
    this._element.querySelector('.elements__item-img').alt = this._name;
    this._element.querySelector('.elements__text-title').textContent = this._name;
    this._element.querySelector('.elements__text-like');
    this._element.querySelector('.elements__delete');
    return this._element;
  }
  //слушатели событий 
  _setEventListeners(){
    //слушает кнопку лайка дизлайка
    this._element.querySelector('.elements__text-like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    //слушает кнопку удаления карты с фото
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });
    //слушает клик по фото и открывает попап с фото
    this._element.querySelector('.elements__item-img').addEventListener('click', () => {
      this._showPhotoClick();
    });
    //слушает клик по крестику для закрытия попапа
    const photoPopup = document.querySelector("#popup-openPhoto");//модалка окрытия фото
    const popupClosePhoto = photoPopup.querySelector(".popup__button");//кнопки закрытия модалки с фото
    popupClosePhoto.addEventListener('click', () => {
    this._closePopupCross();
    });
  }
  //методы обработки карточек
  //метод обработки лайка дизлайка
  _handleLikeClick = () => {
    this._element.querySelector('.elements__text-like').classList.toggle('elements__text-like_active');
  }
  //метод обработки удаления картчоки с фото
  _handleDeleteCard = () => {
    this._element.querySelector('.elements__delete').closest('.elements__item').remove();
  }
    
  //метод открытия попапа с фотографией
  _showPhotoPopup = () => {
    const photoPopup = document.querySelector("#popup-openPhoto");//модалка окрытия фото
    photoPopup.classList.add('popup_opened');
  }
  //функция закрытия попапа с фото по клавише эскейп
  _closePhotoPopupEscape = () => {
  document.addEventListener('keydown', handleClosePhotoPopup); 
  }
  //функция закрытия попапа по клику на фон
  _closePhotoPopupOnBackgroundClick = () => {
  document.addEventListener('click', handleClosePhotoPopupOnBackgroundClick);
  }
  // функция закрытия попапа по крестику
  _closePopupCross = () => {
    closePhotoPopup();
  }

  // метод открытия попапа с фото
  _showPhotoClick = () => {
    const photoPopup = document.querySelector("#popup-openPhoto");//модалка окрытия фото
    const photoTitle = photoPopup.querySelector('.popup__title');
    const photoImage = photoPopup.querySelector('.popup__image');
    photoTitle.textContent =  this._name;
    photoImage.src = this._link;
    photoImage.alt = this._name;
    this._showPhotoPopup();
    this._closePhotoPopupEscape();  
    this._closePhotoPopupOnBackgroundClick();
  }
}


export default Card;
