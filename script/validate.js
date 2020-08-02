//валидация формы без средств js  - done

const object = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    inputValidClass: 'popup__input_type_valid',
    errorClass: 'popup__error_visible'
}

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, inputValidClass, errorClass
}) => {
    
    const formList = Array.from(document.querySelectorAll(formSelector));
    const inputs = formList.querySelectorAll(inputSelector);

    inputs.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });

    const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
    const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}; 
});
}; 

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
    hideInputError(formElement, inputElement);
}

  enableValidation(object);
 

const setEventListeners = (formElement) => {
    const inputs = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputs, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputs, buttonElement);
      });
    });
  };
  setEventListeners();

   function hasInvalidInput(inputs) {
       return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
   function toggleButtonState(inputs, buttonElement) {
     if(hasInvalidInput(inputs)) {
       buttonElement.classList.add(inactiveButtonClass);
     }else{
       buttonElement.classList.remove(inactiveButtonClass);
     }
   }

}
