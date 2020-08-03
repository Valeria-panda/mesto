//вариант кода как из тренажера

/*
  const showInputError = (formElement, inputElement, errorMessage) => {
      errorElement = formElement.querySelector('.popup__input-error');
      inputElement.classList.add('popup__input_type_error');
      errorElement.textContent = errorMessage;
      errorElement.classList.add('popup__input-error_visible');
    };
    
    const hideInputError = (formElement, inputElement) => {
      errorElement = formElement.querySelector('.popup__input-error');
      inputElement.classList.remove('popup__input_type_error');
      errorElement.classList.remove('popup__input-error_visible');
      errorElement.textContent="";
    };
    
    const checkInputValidity = (formElement, inputElement) => {
      if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        hideInputError(formElement, inputElement);
      }
    };

  const setEventListeners = (formElement) => {
      const inputList = Array.from(formElement.querySelectorAll(`.popup__input`));
      const buttonElement = formElement.querySelector('.popup__submit');
      toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
        });
      };
      setEventListeners(formElement);

  const enableValidation = (formElement, inputElement, errorElement) => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
  enableValidation(formElement);

  function hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
      })
  };

  function toggleButtonState(inputList, buttonElement) {
      if(hasInvalidInput(inputList)) {
          buttonElement.classList.add('popup__submit_inactive');
      }else{
          buttonElement.classList.remove('popup__submit_inactive');
      }
  };*/



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

const enableValidation = 
({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, 
  inputErrorClass, inputValidClass, errorClass}) => {
   //получаем массив из  форм со страницы
   const forms = Array.from(document.querySelectorAll(formSelector));
   forms.forEach((formElement) => {
     formElement.addEventListener('submit', (evt) => {
     evt.preventDefault();
     });
     const inputs = Array.from(formElement.querySelectorAll(inputSelector));
     const buttonSubmit = Array.from(formElement.querySelectorAll(submitButtonSelector));

    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
      const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
         if(!inputElement.validity.valid){
           inputElement.classList.add(inputErrorClass);
           inputElement.classList.remove(inputValidClass);
           errorElement.textContent = inputElement.validationMessage;
           errorElement.classList.add(errorClass);
         }else{
          inputElement.classList.add(inputValidClass);
          inputElement.classList.remove(inputErrorClass);
          errorElement.textContent = '';
          errorElement.classList.remove(errorClass);
         }

      //кусок кода для кнопки сабмита который не работает 
      const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);
        if(!isFormValid) { 
           buttonSubmit.classList.remove(activeButtonClass);
           buttonSubmit.classList.add(inactiveButtonClass);
           buttonSubmit.disabled = false;
         }else{
          buttonSubmit.classList.remove(inactiveButtonClass);
          buttonSubmit.classList.add(activeButtonClass);
          buttonSubmit.disabled = true;
         }
       });
     });
   });
};
enableValidation(object);