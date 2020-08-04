const profile = document.querySelector(".profile");

const editButton = profile.querySelector(".profile__edit-button");// кнопка реактировать профиль
const addButton = profile.querySelector(".profile__button");// кнопка добавить карточку с фото

const popupOpened = document.querySelector("#popup-editForm");//модалка редактирования профиля
const popupOpenedCards = document.querySelector("#popup-addCard");//модалка добавления карты
const photoPopup = document.querySelector("#popup-openPhoto");//модалка окрытия фото

const popupClose = popupOpened.querySelector(".popup__button");//кнопки закрытия модалки редактирования профиля
const popupCloseCards = popupOpenedCards.querySelector(".popup__button");//кнопки закрытия модалки добавления карточки с фото
const popupClosePhoto = photoPopup.querySelector(".popup__button");//кнопки закрытия модалки с фото

const formElement = popupOpened.querySelector("#popup-edit-form");//форма редактирования профиля
const formElementAddCard = popupOpenedCards.querySelector("#popup-add-card");//форма для реадктирования данных для создания карты 

const nameInput = formElement.querySelector(".popup__input_name");//инпут для добавления имени в профиле
const jobInput = formElement.querySelector(".popup__input_job");//инпут для добавления профессии в профиле

const intro = document.querySelector(".intro"); //профиль 
const introTitle = intro.querySelector(".intro__title");//имя записанное в профиле(тайтл)
const introSubTitle = intro.querySelector(".intro__subtitle");//профессия записанная в профиле 

const cardsTemplate = document.querySelector('.cards').content.querySelector('.elements__item');// тэмплэйт элемент на странице

const submitButtonCard = popupOpened.querySelector('.popup__submit');//кнопка 'сохранить' в модалке редактирования
const submitButtonCardPhoto = popupOpenedCards.querySelector('.popup__submit');//кнопка 'сохранить' в модалке добавлеия карточки с фото
const submitButtonComments = photoPopup.querySelector('.popup__submit');//кнопка 'сохранить' в модалке открытия фотки

const cardName = popupOpenedCards.querySelector('.popup__input_place');//инпут во второй форме для названия места
const cardLink = popupOpenedCards.querySelector('.popup__input_way');//инпут во второй форме для ссылки на картинку


const photoTitle = photoPopup.querySelector('.popup__title');
const photoImage = photoPopup.querySelector('.popup__image');

const elements = document.querySelector(".elements__list");

const backgroundClose = popupOpened.querySelector('.popup__background');
const backgroundCloseCards = popupOpenedCards.querySelector('.popup__background');
const backgroundClosePhoto = photoPopup.querySelector('.popup__background');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//функция открытия первой модалки
function showClick(form) {
  form.classList.add('popup_opened');
  nameInput.value = introTitle.textContent; 
  jobInput.value = introSubTitle.textContent;

}
//функция закрытия попапов нажатием на крестик
function closeForm(form) {
  form.classList.remove('popup_opened'); 
  formElement.reset();
  formElementAddCard.reset();
  document.removeEventListener('keydown', closePopupEscape);
  document.removeEventListener('click',closePopupOnBackgroundClick);
} 

//слушатели событий
editButton.addEventListener('click', function(){
  showClick(popupOpened); 
  closePopupEscape(popupOpened);
  closePopupOnBackgroundClick(popupOpened);
});
addButton.addEventListener('click', () => {
  showClick(popupOpenedCards);
  closePopupEscape(popupOpenedCards);
  closePopupOnBackgroundClick(popupOpenedCards);
});

//слушатель закрытия попапа редактирования формы
popupClose.addEventListener('click', function() {
closeForm(popupOpened);

}); 
//слушатель закрытия попапа добавления карточки
popupCloseCards.addEventListener('click', function() {
closeForm(popupOpenedCards);
}); 
//слушатель закрытия попапа с фотогарфией
popupClosePhoto.addEventListener('click', function() {
  closeForm(photoPopup);
}); 


//закрытие модалки по клавише escape
const closePopupEscape = (form) => {
 document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    closeForm(form);
  }
 }); 
};

//закрытие модалки по клику на фон
const closePopupOnBackgroundClick = (form) => {
  document.addEventListener('click', (evt) => {
   if(evt.target.classList.contains('popup__background')) {
     closeForm(form);
   }
  }); 
};


formElement.addEventListener("submit",formElementSubmitHandler);
submitButtonCardPhoto.addEventListener('click', addCardSubmitHandler);

function formElementSubmitHandler(evt) { 
 evt.preventDefault();  
  introTitle.textContent = nameInput.value; 
  introSubTitle.textContent = jobInput.value; 
  closeForm(popupOpened); 
} 

function createCard(data) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const titleImage = cardsElement.querySelector('.elements__item-img');
  const titleCard = cardsElement.querySelector('.elements__text-title');
  const buttonLike = cardsElement.querySelector('.elements__text-like');
  const deleteButton = cardsElement.querySelector(".elements__delete");
  //слушатель кнопки лайка и функция лайка дизлайка
  buttonLike.addEventListener('click', function handleLikeClick() {
    buttonLike.classList.toggle('elements__text-like_active');
  });
  //слушатель кнопки удаления карточки с фото
  deleteButton.addEventListener('click', function handledeleteClick() {
    deleteButton.closest('.elements__item').remove();
  });
  titleImage.addEventListener('click', function handledPhotoCards() {
  photoTitle.textContent =  data.name;
  photoImage.src = data.link;
  photoImage.alt = data.name;

  showClickPhoto();
  });

  titleCard.textContent = data.name;
  titleImage.src = data.link;
  titleImage.alt = data.name;

  return cardsElement;
}

function renderCard(data) {
  elements.prepend(createCard(data))
}

initialCards.forEach((data) => {
  renderCard(data);
})

function addCardSubmitHandler(evt) {
  evt.preventDefault();
  renderCard({name: cardName.value, link: cardLink.value});
  closeForm(popupOpenedCards);
  submitButtonCardPhoto.setAttribute('disabled','disabled');
  submitButtonCardPhoto.classList.add('popup__submit_inactive');
}

//функция открытия попапа с фотографией
function showClickPhoto() {
  photoPopup.classList.add('popup_opened');
  closePopupEscape(photoPopup); 
  closePopupOnBackgroundClick(photoPopup);
} 





