
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

