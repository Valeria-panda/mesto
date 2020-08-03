
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

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector,activeButtonClass, inactiveButtonClass, 
  inputErrorClass, inputValidClass, errorClass}) => {
   //получаем массив из  форм со страницы
   const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputs = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonSubmit = formElement.querySelector(submitButtonSelector);
     
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

      if(!inputElement.validity.valid){
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(errorClass); 
      }else{
        inputElement.classList.remove(inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(errorClass);
      }
    
      const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);
      
        if(!isFormValid) { 
          buttonSubmit.classList.remove(inactiveButtonClass); 
          buttonSubmit.disabled = false;
        }else{
          buttonSubmit.classList.add(inactiveButtonClass);
          buttonSubmit.disabled = true;
        }
      }) 
    });
  });
};

enableValidation(object);

