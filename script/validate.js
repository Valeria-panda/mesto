
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


const setEventListeners = (formElement) => {
  // Находим все поля внутри формы, сделаем из них массив методом Array.from
const inputs = Array.from(formElement.querySelectorAll(object.inputSelector));
const buttonSubmit = formElement.querySelector(object.submitButtonSelector);
toggleButtonState(inputs, buttonSubmit);
  // Обойдём все элементы полученной коллекции
  inputs.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', (evt) => {
      isValid(formElement, inputElement);
      toggleButtonState(inputs, buttonSubmit);
    });
  });
};

//функция показывающая сообщение ошибки и красное поле
const showInputError = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
inputElement.classList.add(object.inputErrorClass);
errorElement.textContent = errorMessage;
errorElement.classList.add(object.errorClass);
};

//функция скрывающая сообщение ошибки и красное поле
const hideInputError = (formElement, inputElement) => {
const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
inputElement.classList.remove(object.inputErrorClass);
errorElement.textContent = '';
errorElement.classList.remove(object.errorClass);
};

const isValid = (formElement, inputElement) => {
  if(!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }else{
    hideInputError(formElement, inputElement);
  } 
};

//функция которая проверяет наличие невалидных полей
const hasInvalidInput = (inputs) => {
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//отдельная функция для кнопки сабмита
const toggleButtonState = (inputs, buttonSubmit) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputs)) {
    buttonSubmit.classList.add(object.inactiveButtonClass);
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.classList.remove(object.inactiveButtonClass);
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
    setEventListeners(formElement);   
  });
};
enableValidation(object);

