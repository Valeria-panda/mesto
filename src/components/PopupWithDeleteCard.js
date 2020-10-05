import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector, formSelector) {
    super(popupSelector);
    this._formSelector = document.querySelector(formSelector);
  }

  setFormSubmitHandler(set) {
    this._handleSubmit = set;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._handleSubmit();
    });
  }
}