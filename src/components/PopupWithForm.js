import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, formSelector, {submitForms}){
        super(popupSelector);
        this._formSelector = document.querySelector(formSelector);
        this._submitForms = submitForms;
    }

    _getInputValues(){
        //достаем все элементы полей
        this._inputs = this._popupSelector.querySelectorAll('.popup__input');
        //создаем пустой объект
        this._inputValues = {};
        // добавляем в этот объект значения всех полей
        this._inputs.forEach(input => {
            this._inputValues[input.name] = input.value;
        })
        // возвращаем объект значений
        return this._inputValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._formSelector.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            // добавим вызов функции _handleFormSubmit
            // передадим ей объект — результат работы _getInputValues
            this._submitForms(this._getInputValues());  
        })
    }

    close(){
        super.close();
        this._formSelector.reset();
    }
}
