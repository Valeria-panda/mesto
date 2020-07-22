const profile = document.querySelector(".profile");

const editButton = profile.querySelector(".profile__edit-button");// кнопка реактировать профиль
const addButton = profile.querySelector(".profile__button");// кнопка добавить карточку с фото

const popupOpened = document.querySelector(".popup");//модалка редактирования карты
const popupOpenedCards = document.querySelectorAll(".popup")[1];//модалка добавления карты

const popupClose = document.querySelector(".popup__button");//кнопки закрытия модалки редактирования профиля
const popupCloseCards = popupOpenedCards.querySelector(".popup__button");//кнопки закрытия модалки добавления карточки с фото

const formElement = document.querySelector(".popup__form");//форма редактирования профиля
const formElementAddCard = popupOpenedCards.querySelector(".popup__form");//форма для реадктирования данных для создания карты 

const nameInput = formElement.querySelector(".popup__input_name");//инпут для добавления имени в профиле
const jobInput = formElement.querySelector(".popup__input_job");//инпут для добавления профессии в профиле

const intro = document.querySelector(".intro"); //профиль 
const introTitle = intro.querySelector(".intro__title");//имя записанное в профиле(тайтл)
const introSubTitle = intro.querySelector(".intro__subtitle");//профессия записанная в профиле 

const cardsTemplate = document.querySelector('.cards').content.querySelector('.elements__item');// тэмплэйт элемент на странице

const submitButtonCard = popupOpened.querySelector('.popup__submit');//кнопка 'сохранить' в модалке редактирования
const submitButtonCardPhoto = popupOpenedCards.querySelector('.popup__submit');//кнопка 'сохранить' в модалке добавлеия карточки с фото

const cardName = popupOpenedCards.querySelector('.popup__input_place');//инпут во второй форме для названия места
const cardLink = popupOpenedCards.querySelector('.popup__input_way');//инпут во второй форме для ссылки на картинку

const photoPopup = document.querySelectorAll('.popup')[2];
const photoTitle = photoPopup.querySelector('.popup__title');
const photoImage = photoPopup.querySelector('.popup__image');
const popupClosePhoto = photoPopup.querySelector(".popup__button");//кнопки закрытия модалки с фото
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
] //массив который мы будем выводить 

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
} 

//слушатели событий
editButton.addEventListener('click', function(){
  showClick(popupOpened); 
});
addButton.addEventListener('click', () => {
  showClick(popupOpenedCards);
});
popupClose.addEventListener('click', function() {
closeForm(popupOpened);
}); 
popupCloseCards.addEventListener('click', function() {
closeForm(popupOpenedCards);
}); 
popupClosePhoto.addEventListener('click', function() {
  closeForm(photoPopup);
}); 
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
  //слушатель 
  titleImage.addEventListener('click', function handledPhotoCards() {
  photoTitle.textContent =  data.name;
  photoImage.src = data.link;
  showClickPhoto();
  });

  titleCard.textContent = data.name;
  titleImage.src = data.link;
  
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
}

//функция открытия попапа с фотографией
function showClickPhoto() {
  photoPopup.classList.add('popup_opened');  
} 


//Вариант кода мой, до просмотра вебинара от Лизы Гриненко
/*//функция добавления тэмплэйт элемента с его содержимым на страничку в секцию elements и рендеринга 6 карточек

/*initialCards.forEach((data) => {
  const cardsElement = cardsTemplate.cloneNode(true);
  const titleCard = cardsElement.querySelector('.elements__text-title').textContent = data.name;
  const titleImage = cardsElement.querySelector('.elements__item-img').src = data.link;
  elements.prepend(cardsElement);

});
//функция добавления карточки пользователем 

//вариант второй вывода 6 карт по дефолту на страницу)
function addCards(name, link) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const titleCard = cardsElement.querySelector('.elements__text-title').textContent = name;
  const titleImage = cardsElement.querySelector('.elements__item-img').src = link;
  elements.prepend(cardsElement);
}
//массив переберется 6 раз и добавится 6 элементов на страницу. в функцию передаем значения имени и ссылки 
initialCards.forEach(function addArr(item){
addCards(item.name, item.link);
});

submitButtonCard.addEventListener('click', function(evt) {
  evt.preventDefault();
  cardName.textContent = '';
  cardLink.src = '';
  addCards(cardName.value, cardLink.value);
  closeForm(popupOpenedCards);
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
const photoPopup = document.querySelector('.popup-photo');
const photoTitle = photoPopup.querySelector('.popup-photo__title');
const photoImage = photoPopup.querySelector('.popup-photo__image');
function popPhotoOpen(){
photoPopup.classList.add('popup-photo_opened'); 
photoTitle.textContent = titleName;
photoImage.src = titleCard;
}
elements.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('elements__item-img')) {
    popPhotoOpen(photoPopup);
}
});
*/
