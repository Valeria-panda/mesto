import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this.photoTitle = this._popupSelector.querySelector('.popup__title_photo');
        this.imgPhotoModal = this._popupSelector.querySelector('.popup__image');
    }

    open(photoData){
        super.open();
        this.imgPhotoModal.setAttribute('src', photoData.link);
        this.imgPhotoModal.setAttribute('alt', photoData.name);
        this.photoTitle.textContent = photoData.name;
    }

    close(){
        super.close();
    }

    setEventListeners(){
        super.setEventListeners();
    }

}