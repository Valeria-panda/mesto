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
const cardsItem = document.querySelector(".elements__item");
const deleteButton = document.querySelector(".elements__delete");
//добавление карты 
const name = document.querySelector('.elements__text-title');
const link = document.querySelector('.elements__item-img');
const elements = document.querySelector(".elements__list");

//массив который мы будем выводить 
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
]
//функция открытия попапов
function showClick(form) {
  form.classList.add('popup_opened');
  nameInput.value = introTitle.textContent; 
  jobInput.value = introSubTitle.textContent;
}
//функция закрытия попапов нажатием на крестик
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
formElement.addEventListener("submit",formElementSubmitHandler);

function formElementSubmitHandler(evt) { 
 evt.preventDefault();  
  introTitle.textContent = nameInput.value; 
  introSubTitle.textContent = jobInput.value; 
  closeForm(popupOpened); 
} 

//функция добавления тэмплэйт элемента с его содержимым на страничку в секцию elements
function addCards(name, link) {
  const cardsTemplate = document.querySelector('.cards').content;
  const cardsElement = cardsTemplate.cloneNode(true);
  cardsElement.querySelector('.elements__text-title').innerHTML = name;
  cardsElement.querySelector('.elements__item-img').src = link;
  elements.append(cardsElement);
}

//массив переберется 6 раз и добавится 6 элементов на страницу. в функцию передаем значения имени и ссылки 
initialCards.forEach(function addArr(item){
addCards(item.name, item.link);
});

//функция лайк / дизлайк
function like() {
  elements.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('elements__text-like')) {
  const button = evt.target;
  button.classList.toggle('elements__text-like_active');
  }
});
}
like();

//функция удаления карты
function deleteCard() {
elements.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('elements__delete')) {
  const eventTarget = evt.target;
  eventTarget.closest('.elements__item').remove();
  }
});
}
deleteCard();
