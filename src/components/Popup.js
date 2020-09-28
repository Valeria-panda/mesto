export default class Popup{
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
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
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }
    close(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
        document.removeEventListener('click', this._handleBackgroundClickClose);
    }


    setEventListeners(){
        //слушает закрытие по крестику 
        this._popupSelector.querySelector('.popup__button').addEventListener('click', () => {
            this.close();
        });
        this._popupSelector.addEventListener('click', (evt) => this._handleBackgroundClickClose(evt));
    }

}
