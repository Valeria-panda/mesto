import './index.css';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards, object, editButton, addButton, nameInput, jobInput, introTitle, 
  introSubTitle, cardListSelector} from '../utils/constant.js';


const renderer = data => {
  const handleCardClick = photoData => {
    imagePopupClass.open(photoData)
  }
  const card = new Card(data, '.cards', handleCardClick);
  defaultCardList.addItem(card.generateCard());
}

const defaultCardList = new Section(
  { 
  items: initialCards,
  renderer: renderer
  }, 
  cardListSelector);

//рендерим 6 карт на страницу
defaultCardList.renderer();


const userInfo = new UserInfo(
  {
    name: '.intro__title', 
    job: '.intro__subtitle'
  }
);

function editProfileSubmitForm(formData){
  userInfo.setUserInfo(formData); 
  editProfileForm.close();
}

function addCardSubmitForm(formData){
  renderer(formData);
  addNewCardForm.close();
}


//экземпляр класса для попапа с фотографией
const imagePopupClass = new PopupWithImage("#popup-openPhoto");
imagePopupClass.setEventListeners();

// экземпляр класса для попапа добавления новой карточки 
const addNewCardForm = new PopupWithForm("#popup-addCard", "#popup-add-card", addCardSubmitForm); 
addNewCardForm.setEventListeners();

//экземпляр класса для редактирования профиля 
const editProfileForm = new PopupWithForm("#popup-editForm", "#popup-edit-form", editProfileSubmitForm);
editProfileForm.setEventListeners();

//экземпляр класса для валидации полей формы реадктирвоания профиля
const formEditProfile = document.querySelector("#popup-editForm");
const form = new FormValidator(object, formEditProfile);

//экземпляр класса для валидации полей формы добавления карты
const formAddCard = document.querySelector("#popup-addCard")
const formNewCard = new FormValidator(object, formAddCard);


//слушатель кнопки редактировать профиль
editButton.addEventListener('click', function(){
  editProfileForm.open();
  form.enableValidation();
  nameInput.value = introTitle.textContent; 
  jobInput.value = introSubTitle.textContent; 
}); 

//слушатель кнопки добавить карточку
addButton.addEventListener('click', () => {
  addNewCardForm.open();
  formNewCard.enableValidation();
});

