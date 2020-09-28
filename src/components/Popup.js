export default class Popup{
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleBackgroundClickClose = this._handleBackgroundClickClose.bind(this);
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape'){
           this.close();
        }
    }
    _handleBackgroundClickClose(evt){
        if (evt.target.classList.contains('popup__background')){
            this.close();
        }
    }
    
    open(){
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }


    setEventListeners(){
        //слушает закрытие по крестику 
        this._popupSelector.querySelector('.popup__button').addEventListener('click', () => {
            this.close();
        });
        this._popupSelector.addEventListener('click', this._handleBackgroundClickClose);
    }

}
