

class FormValidator{
  constructor(object, formElement){
    this._formElement = formElement;
    this._object = object;
  }

  _showInputError (errorMessage) {
    const inputElement = this._formElement.querySelector('.popup__input');
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add(this._object.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._object.errorClass);
  }
  
  _hideInputError () {
    const inputElement = this._formElement.querySelector('.popup__input');
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove(this._object.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._object.errorClass);
  }
  
  _isValid () {
    const inputElement = this._formElement.querySelector('.popup__input');
    if(!inputElement.validity.valid){
      this._showInputError(inputElement.validationMessage, inputElement);
    }else{
      this._hideInputError(inputElement);
    } 
  }
  
  _hasInvalidInput () {
    const inputs = Array.from(this._formElement.querySelectorAll(this._object.inputSelector));
    return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
    })
  }
  
  _toggleButtonState () {
    const inputs = Array.from(this._formElement.querySelectorAll(this._object.inputSelector));
    const buttonSubmit = this._formElement.querySelector(this._object.submitButtonSelector);
    if (this._hasInvalidInput(inputs)) {
      buttonSubmit.classList.add(this._object.inactiveButtonClass);
      buttonSubmit.disabled = true;
    } else {
      buttonSubmit.classList.remove(this._object.inactiveButtonClass);
      buttonSubmit.disabled = false;
    }
  }
  
  _setEventListeners () {
  const inputs = Array.from(this._formElement.querySelectorAll(this._object.inputSelector));
  this._toggleButtonState();
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      this._isValid(evt.target);
      this._toggleButtonState();
    });
  })
}
  
  enableValidation(){
    const forms = Array.from(document.querySelectorAll(this._object.formSelector));
    forms.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    }); 
    
    this._setEventListeners();
    });
  }
  
  
}


export default FormValidator;