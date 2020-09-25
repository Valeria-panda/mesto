export const initialCards = [
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

export const object = {
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


export const profile = document.querySelector(".profile");
export const editButton = profile.querySelector(".profile__edit-button");// кнопка реактировать профиль
export const addButton = profile.querySelector(".profile__button");// кнопка добавить карточку с фото
export const popupOpened = document.querySelector("#popup-editForm");//модалка редактирования профиля
export const popupOpenedCards = document.querySelector("#popup-addCard");//модалка добавления карты
export const popupClose = popupOpened.querySelector(".popup__button");//кнопки закрытия модалки редактирования профиля
export const popupCloseCards = popupOpenedCards.querySelector(".popup__button");//кнопки закрытия модалки добавления карточки с фото
export const formElement = popupOpened.querySelector("#popup-edit-form");//форма редактирования профиля
export const formElementAddCard = popupOpenedCards.querySelector("#popup-add-card");//форма для реадктирования данных для создания карты 
export const nameInput = formElement.querySelector(".popup__input_name");//инпут для добавления имени в профиле
export const jobInput = formElement.querySelector(".popup__input_job");//инпут для добавления профессии в профиле
export const intro = document.querySelector(".intro"); //профиль 
export const introTitle = intro.querySelector(".intro__title");//имя записанное в профиле(тайтл)
export const introSubTitle = intro.querySelector(".intro__subtitle");//профессия записанная в профиле 
export const submitButtonCardPhoto = popupOpenedCards.querySelector('.popup__submit');//кнопка 'сохранить' в модалке добавлеия карточки с фото
export const cardName = popupOpenedCards.querySelector('.popup__input_name');//инпут во второй форме для названия места
export const cardLink = popupOpenedCards.querySelector('.popup__input_link');//инпут во второй форме для ссылки на картинку
export const cardListSelector = document.querySelector(".elements__list");
export const imagePopup = document.querySelector("#popup-openPhoto");//модалка с фото
export const submitButton = popupOpened.querySelector('.popup__submit');
export const popupClosePhoto = imagePopup.querySelector(".popup__button");