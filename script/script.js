const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__button");
const popupOpened = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_name");
const jobInput = formElement.querySelector(".popup__input_job");
const intro = document.querySelector(".intro");
const introTitle = intro.querySelector(".intro__title");
const introSubTitle = intro.querySelector(".intro__subtitle");
const addButton = profile.querySelector(".profile__button");
const popupCardsOpened = document.querySelector(".popup-cards");
const formCardsElement = document.querySelector(".popup-cards__form");
const popupCardsClose = document.querySelector(".popup-cards__button");

//вывод и закрытие попапа при редактирование профиля 
function showClick() {
  popupOpened.classList.add("popup_opened");
  nameInput.value = introTitle.textContent;
  jobInput.value = introSubTitle.textContent;
}
function closeForm() {
  popupOpened.classList.remove("popup_opened");
  formElement.reset();
}
function formElementSubmitHandler(evt) {
  evt.preventDefault(); 
  introTitle.textContent = nameInput.value;
  introSubTitle.textContent = jobInput.value;
  closeForm();
}
popupClose.addEventListener("click", closeForm);
formElement.addEventListener("submit", formElementSubmitHandler);
editButton.addEventListener("click", showClick);
