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

function showClick() {
  popupOpened.classList.add("popup_opened");
  introTitle.textContent = nameInput.value;
  introSubTitle.textContent = jobInput.value;
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
popupClose.addEventListener("click", closeForm);


/*function toggleclick() {
    popupOpened.classList.toggle('popup_opened');
}
editButton.addEventListener("click", toggleclick);
popupClose.addEventListener("click", toggleclick)*/