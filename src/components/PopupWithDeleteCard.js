import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector, formSelector) {
    super(popupSelector);
    this._formSelector = document.querySelector(formSelector);
  }

  setFormSubmitHandler(handle) {
    this._handleSubmit = handle;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (e) => {
    e.preventDefault();
    this._handleSubmit();
    });
  }
}