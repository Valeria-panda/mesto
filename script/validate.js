
const object = {
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

class FormValidator{
  
  constructor(object, formElement){
    this._formElement = formElement;
    this._object = object;
    /*this._formSelector = object.formSelector;
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._activeButtonClass = object.activeButtonClass;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass= object.inputErrorClass;
    this._inputValidClass= object.inputValidClass;
    this._errorElement = object.errorElement;
    this._errorClass = object.errorClass;*/
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
      this._showInputError(inputElement.validationMessage);
    }else{
      this._hideInputError();
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
      this._isValid();
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


const formEl = document.querySelector("#popup-editForm");
const form = new FormValidator(object, formEl);
const formValidation = form.enableValidation();

/*
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, 
  inputErrorClass, errorClass ) => {
  // Находим все поля внутри формы, сделаем из них массив методом Array.from
const inputs = Array.from(formElement.querySelectorAll(inputSelector));
const buttonSubmit = formElement.querySelector(submitButtonSelector);
toggleButtonState(inputs, buttonSubmit, inactiveButtonClass);
  // Обойдём все элементы полученной коллекции
  inputs.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', (evt) => {
      isValid(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputs, buttonSubmit, inactiveButtonClass);
    });
  });
};

//функция показывающая сообщение ошибки и красное поле
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
inputElement.classList.add(inputErrorClass);
errorElement.textContent = errorMessage;
errorElement.classList.add(errorClass);
};

//функция скрывающая сообщение ошибки и красное поле
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
inputElement.classList.remove(inputErrorClass);
errorElement.textContent = '';
errorElement.classList.remove(errorClass);
};

const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  }else{
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  } 
};

//функция которая проверяет наличие невалидных полей
const hasInvalidInput = (inputs) => {
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//отдельная функция для кнопки сабмита
const toggleButtonState = (inputs, buttonSubmit, inactiveButtonClass) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputs)) {
    buttonSubmit.classList.add(inactiveButtonClass);
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.classList.remove(inactiveButtonClass);
     buttonSubmit.disabled = false;
  }
};

function enableValidation({ formSelector, inputSelector, submitButtonSelector,activeButtonClass, inactiveButtonClass, 
  inputErrorClass, inputValidClass, errorClass}){
   //получаем массив из  форм со страницы
   const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, 
      inputErrorClass, errorClass );   
  });
};
enableValidation(object);

*/