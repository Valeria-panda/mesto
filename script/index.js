import Card from './card.js';
import FormValidator from './formValidator.js';



const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");// кнопка реактировать профиль
const addButton = profile.querySelector(".profile__button");// кнопка добавить карточку с фото
const popupOpened = document.querySelector("#popup-editForm");//модалка редактирования профиля
const popupOpenedCards = document.querySelector("#popup-addCard");//модалка добавления карты
const popupClose = popupOpened.querySelector(".popup__button");//кнопки закрытия модалки редактирования профиля
const popupCloseCards = popupOpenedCards.querySelector(".popup__button");//кнопки закрытия модалки добавления карточки с фото
const formElement = popupOpened.querySelector("#popup-edit-form");//форма редактирования профиля
const formElementAddCard = popupOpenedCards.querySelector("#popup-add-card");//форма для реадктирования данных для создания карты 
const nameInput = formElement.querySelector(".popup__input_name");//инпут для добавления имени в профиле
const jobInput = formElement.querySelector(".popup__input_job");//инпут для добавления профессии в профиле
const intro = document.querySelector(".intro"); //профиль 
const introTitle = intro.querySelector(".intro__title");//имя записанное в профиле(тайтл)
const introSubTitle = intro.querySelector(".intro__subtitle");//профессия записанная в профиле 
const submitButtonCardPhoto = popupOpenedCards.querySelector('.popup__submit');//кнопка 'сохранить' в модалке добавлеия карточки с фото
const cardName = popupOpenedCards.querySelector('.popup__input_place');//инпут во второй форме для названия места
const cardLink = popupOpenedCards.querySelector('.popup__input_way');//инпут во второй форме для ссылки на картинку
const elements = document.querySelector(".elements__list");

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

const object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  activeButtonClass: 'popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputValidClass: 'popup__input_type_valid',
  errorElement: 'popup__input-error',
  errorClass: 'popup__input-error_visible'
}

//функция открытия модалок.
function showClick(form) {
  form.classList.add('popup_opened');
}

//функция закрытия модалок
function closeForm(form) {
  form.classList.remove('popup_opened'); 
  formElement.reset();
  formElementAddCard.reset();
  document.removeEventListener('keydown', closePopupEscape);
  document.removeEventListener('click', closePopupOnBackgroundClick);
} 

//слушатели событий
editButton.addEventListener('click', function(){
  showClick(popupOpened); 
  nameInput.value = introTitle.textContent; 
  jobInput.value = introSubTitle.textContent;
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


//закрытие модалки по клавише escape
const closePopupEscape = (form) => {
 document.addEventListener('keydown', function handleClosePopupEscape(evt){
  if(evt.key === 'Escape') {
    closeForm(form);
  }
 }); 
};

//закрытие модалки по клику на фон
const closePopupOnBackgroundClick = (form) => {
  document.addEventListener('click', function handleClosePopupOnBackgroundClick(evt){
   if(evt.target.classList.contains('popup__background')) {
     closeForm(form);
   }
  }); 
};

formElement.addEventListener("submit",formElementSubmitHandler);
function formElementSubmitHandler(evt) { 
 evt.preventDefault();  
  introTitle.textContent = nameInput.value; 
  introSubTitle.textContent = jobInput.value; 
  closeForm(popupOpened); 
} 

submitButtonCardPhoto.addEventListener('click', function addCardSubmitHandler(evt){
  const cards = new Card({name:cardName.value,link:cardLink.value}, '.cards');
  const cardEl = cards.generateCard(cardName.value,cardLink.value);
  evt.preventDefault();
  elements.prepend(cardEl);
  closeForm(popupOpenedCards);
  submitButtonCardPhoto.setAttribute('disabled','disabled');
  submitButtonCardPhoto.classList.add('popup__submit_inactive');
});

//проходимся по массиву и рендерим 6 карточек на страницу
initialCards.forEach((item) => {
  const card = new Card(item, '.cards');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
});



const formEditProfile = document.querySelector("#popup-editForm");
const form = new FormValidator(object, formEditProfile);
const formValidationEditProfile = form.enableValidation();


const formAddCard = document.querySelector("#popup-addCard")
const formNewCard = new FormValidator(object, formAddCard);
const formValidationAddNewCard = formNewCard.enableValidation();








