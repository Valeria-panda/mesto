const profile = document.querySelector(".profile");

// нашли в доме  2 кнопки. эдит и добавить.
const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__button");

const popup = document.querySelector(".popup");

//кнопки закрытия модалки
const popupClose = document.querySelector(".popup__button");
const popupCloseCards = document.querySelectorAll(".popup__button")[1];

//модалка редактирвоания и модалка добавления
const popupOpened = document.querySelector(".popup");
const popupOpenedCards = document.querySelectorAll(".popup")[1];

const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_name");
const jobInput = formElement.querySelector(".popup__input_job");
const intro = document.querySelector(".intro");
const introTitle = intro.querySelector(".intro__title");
const introSubTitle = intro.querySelector(".intro__subtitle");

function showClick(form) {
  form.classList.add('popup_opened');
  nameInput.value = introTitle.textContent; 
  jobInput.value = introSubTitle.textContent;
}
  
function closeForm(form) { 
  form.classList.remove('popup_opened'); 
  formElement.reset(); 
} 

//слушатели событий
editButton.addEventListener('click', function(){
  showClick(popupOpened); 
});
addButton.addEventListener('click', function(){
  showClick(popupOpenedCards);
});
popupClose.addEventListener('click', function() {
closeForm(popupOpened);
}); 
popupCloseCards.addEventListener('click', function() {
closeForm(popupOpenedCards);
}); 

function formElementSubmitHandler(evt) { 
 evt.preventDefault();  
  introTitle.textContent = nameInput.value; 
  introSubTitle.textContent = jobInput.value; 
  closeForm(popupOpened); 
} 
formElement.addEventListener("submit",formElementSubmitHandler);

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
//добавление карты 
initialCards.forEach(function addCards() {
  const elements = document.querySelector(".elements__list");
  const cardsTemplate = document.querySelector('.cards').content;
  //в элемент кардсэлемент склонировали всё содержимое между тегами темплэйт, теперь эту переменную с содержимым можно вставить везде где надо.
  const cardsElement = cardsTemplate.cloneNode(true);
    
  elements.append(cardsElement);
  });
  
  const buttonLike = document.querySelector('.elements__text-like');
  buttonLike.addEventListener('click', function (evt) {
  const button = evt.target;
  button.classList.toggle('elements__text-like_active');
  });