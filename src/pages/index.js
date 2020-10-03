import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PicturePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {object, editButton, addButton, nameInput, jobInput, introTitle, 
  introSubTitle, cardListSelector, editAvatarButton, avatarLink, avatarImage, submitButtonAvatar} from '../utils/constant.js';


const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-16",
  headers: {
      authorization: "3b2fde55-52e7-4322-8de5-f90b53e04551",
      "Content-Type": "application/json",
    },
});
  
function renderLoading(isLoading, button) {
    if (isLoading) {
      button.textContent = "Сохранение..";
    } else {
      button.textContent = "Сохранить";
    }
}

const userProfile = new UserInfo(
  {
    name: '.intro__title', 
    about: '.intro__subtitle',
    avatar: '.profile__avatarimage'
  }
);

const initialCards = [];

const renderer = data => {
  const card = new Card(data, '.cards', handleCardClick);
  const cardElement = card.generateCard();
  defaultCardList.addItem(cardElement);
  function handleCardClick(photoData){
    imagePopupClass.open(photoData)
  }
}

const defaultCardList = new Section(
  { 
  items: initialCards,
  renderer: renderer
  }, 
  cardListSelector
);

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then((result) => {
    const [items, userInfo] = result;
    defaultCardList.rendererItems(items);
    userProfile.setUserInfo(userInfo);
  })
  .catch((err) => {
    console.log(err);
});


function editProfileSubmitForm(formData){
  userProfile.setUserInfo(formData); 
  editProfileForm.close();
}

function addCardSubmitForm(formData){
  renderer(formData);
  addNewCardForm.close();
}


function avatarSubmitForm(item){
  renderLoading(true, submitButtonAvatar);
  api
    .patchAvatar(item)
    .then((item) => {
      userProfile.setUserInfo(item);
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, submitButtonAvatar);
    });
}
// ЭКЗЕМПЛЯРЫ КЛАССОВ

//экземпляр класса для попапа с фотографией
const imagePopupClass = new PopupWithImage("#popup-openPhoto");
imagePopupClass.setEventListeners();
// экземпляр класса для попапа добавления новой карточки 
const addNewCardForm = new PopupWithForm("#popup-addCard", "#popup-add-card", addCardSubmitForm); 
addNewCardForm.setEventListeners();
//экземпляр класса для редактирования профиля 
const editProfileForm = new PopupWithForm("#popup-editForm", "#popup-edit-form", editProfileSubmitForm);
editProfileForm.setEventListeners();
//экземпляр класса для редактирования аватара
const popupAvatar = new PopupWithForm("#popup-avatarEditForm", "#popup-editavatar-form", avatarSubmitForm);
popupAvatar.setEventListeners();

//ВАЛИДАЦИЯ

//экземпляр класса для валидации полей формы реадктирвоания профиля
const formEditProfile = document.querySelector("#popup-editForm");
const form = new FormValidator(object, formEditProfile);
form.enableValidation();
//экземпляр класса для валидации полей формы добавления карты
const formAddCard = document.querySelector("#popup-addCard")
const formNewCard = new FormValidator(object, formAddCard);
formNewCard.enableValidation();
//экземпляр класса для валидации аватара
const avatarForm = document.querySelector("#popup-avatarEditForm")
const avatarNewForm = new FormValidator(object, avatarForm);
avatarNewForm.enableValidation();

//СЛУШАТЕЛИ СОБЫТИЙ

//слушатель кнопки редактировать профиль
editButton.addEventListener('click', function(){
  editProfileForm.open();
  nameInput.value = introTitle.textContent; 
  jobInput.value = introSubTitle.textContent; 
}); 
//слушатель кнопки добавить карточку
addButton.addEventListener('click', () => {
  addNewCardForm.open();
});
//слушатель кнопки редактировать аватар
editAvatarButton.addEventListener('click', () => {
  avatarLink.value = avatarImage.src;
  popupAvatar.open();
});


