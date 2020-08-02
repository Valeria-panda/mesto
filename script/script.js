const profile = document.querySelector(".profile");

const editButton = profile.querySelector(".profile__edit-button");// кнопка реактировать профиль
const addButton = profile.querySelector(".profile__button");// кнопка добавить карточку с фото

const popupOpened = document.querySelector("#popup-editForm");//модалка редактирования профиля
const popupOpenedCards = document.querySelector("#popup-addCard");//модалка добавления карты
const photoPopup = document.querySelector("#popup-openPhoto");//модалка окрытия фото

const popupClose = popupOpened.querySelector(".popup__button");//кнопки закрытия модалки редактирования профиля
const popupCloseCards = popupOpenedCards.querySelector(".popup__button");//кнопки закрытия модалки добавления карточки с фото
const popupClosePhoto = photoPopup.querySelector(".popup__button");//кнопки закрытия модалки с фото

const formElement = popupOpened.querySelector("#popup-edit-form");//форма редактирования профиля
const formElementAddCard = popupOpenedCards.querySelector("#popup-add-card");//форма для реадктирования данных для создания карты 

const nameInput = formElement.querySelector(".popup__input_name");//инпут для добавления имени в профиле
const jobInput = formElement.querySelector(".popup__input_job");//инпут для добавления профессии в профиле

const intro = document.querySelector(".intro"); //профиль 
const introTitle = intro.querySelector(".intro__title");//имя записанное в профиле(тайтл)
const introSubTitle = intro.querySelector(".intro__subtitle");//профессия записанная в профиле 

const cardsTemplate = document.querySelector('.cards').content.querySelector('.elements__item');// тэмплэйт элемент на странице

const submitButtonCard = popupOpened.querySelector('.popup__submit');//кнопка 'сохранить' в модалке редактирования
const submitButtonCardPhoto = popupOpenedCards.querySelector('.popup__submit');//кнопка 'сохранить' в модалке добавлеия карточки с фото
const submitButtonComments = photoPopup.querySelector('.popup__submit');//кнопка 'сохранить' в модалке открытия фотки

const cardName = popupOpenedCards.querySelector('.popup__input_place');//инпут во второй форме для названия места
const cardLink = popupOpenedCards.querySelector('.popup__input_way');//инпут во второй форме для ссылки на картинку


const photoTitle = photoPopup.querySelector('.popup__title');
const photoImage = photoPopup.querySelector('.popup__image');

const elements = document.querySelector(".elements__list");

/*const initialCards = [
  {
    name: 'Аракульские скалы',
    link: 'https://lh3.googleusercontent.com/pw/ACtC-3d_X_Dhx8a-um97SpAA6pgz_nxcgH0sSKKWMy9fab3gN7J0XOltUrGtMYKcAMrlNsomvSAH0XTy-OLvuF2mGhB_mOSNUEap0Cw24tEIXwVhyvWXsR_BVI0zjkITyXOAgWZDmuSNtfVrXXQr1ZpEYmEq=w418-h625-no?authuser=0'
  },
 {
   name: 'Озеро Аслы-куль',
   link: 'https://lh3.googleusercontent.com/grPx0Cs4z1JTKAvwp5r2dGOwGgkvvEM2onpOc2Q5Bcz5zNzpL1hCKJRIlN56Tz6qS78HDt8HTElXHBrAe2gQHwhJRhynj1KLfCoqWivguawYz-YQtu4ki7dsZ7J0WLJWO6GudTdZdP7dfrZI8N6FS_fcx4rowHVsS8i_Xlyby5Y03qkLDYE18atFqKAWHw0Zl1HTa-KVVKt5xEOr0NefGavKSVBbH386WFsWrbgPA_D3ew_SPpd_8OYnC1vPV6T9-s7VP5O3kcb2cvfwQpfmLqYSdFJgQr6HFPpyRBG00B9vGqCUEyQsX6p8fBWaHOaMvGHg9y2kBbiR-Z3ZRBQ4qUdq1h6m_XP7unsnVt7If1_92vak_Eb64Mz4MAQOt6wdwCIl9SjSfpw5dnDfKMNGUWkDxhvlng8FTQDNECd9fpGQBz25MxO-sWY8GduTfNoTTUgU7GfAcFi9P2xCnxyQzedDpec_Tg0vEv4L-Md2eyZTvDDMF-ONu0WJRRjCbobHYMWqnIP-WqVLLEDcODSGPRCsbziX1jfX03j3mmncSiWHBIzsAZjXCI2HKCUcMAa3IYN3XTfm_9qWkwp2uPZ0W98hfDhIljtlYLU2LSsRONqebnuOQXggLmypZ9qn0ad0aGN8XS6IBjxsLLh7Z-Vc1cc04c9IVdyRxi2_VqOt3fq5TpADIDr32UGAu6FPMg=w937-h625-no?authuser=0'
 },
 {
  name: 'Казахстан. Западный Тянь-шань',
   link: 'https://lh3.googleusercontent.com/HSTldP2_CjFS6CAvVtjfcEVveg6dZntt7HNO7CGoDvfB6PIkX9LazmD6FXD90wj_CH472v8vquLFp7XluMTrLdZM4pZ57PScQkTveW7-LkDrQzh5tYZzu82PGgo8KpeIbQCxeboxjHEx-D3-6LtMpFjOjwxb6Fjx_5LhJbXldHJdGHRoVUBpeam0q55lUPAWJ4kos-4a0u_S72TqVpiXvfhBjSoCZ1zGg8gtrq2FVpwveqqAVH7nc_WWDbEdm0NdcWeLH7Qx2ti84XXaYJlYzSAjsvorVea6Dnl-OE3Sl4fc4CspyOGQji4HRuJsN9wA08xl6K3-p57lu0gWuo5z-hcr3-R3tx3IpuEbd1x4W1SN91g0zbsCOQTv_l2dkYqbChYnmq_frwqh7xto5Lvdl8u1YTJbt-i4qeXirC0oqMkvjs_W5VumpwPAENn26Wx_VLMe27HS5Ciwmz41MkNtisgyOuhl9Z0KwyQbeCDHIYtwP9PI_moLuuCmT2OBmh5fdIugboWQeXH9FAEgKqNFXT7aqZ3bX0HSKknZNvvYy9MFk_10U503Kn6hrczKT60YdWM7AY-af0Z8k1RGnAQmjb9thoMkr9EqthRZD4Iv5iTAZ7rUtKYLrWPhzzHm1Opu6-yiEP8xwg-E4EIGYUDZV3OFUSMpZguwBrNotUwyRoYilD55e66gEO840ZMfog=w990-h576-no?authuser=0'
  },
  {
      name: 'Южный Урал',
      link: 'https://lh3.googleusercontent.com/QF4oEenjFG9TRYICg51vQio2yjYm7_pok3FIwchPuVOtq_exRTrJNOtT2ri-SDsKm7cihjU-KMU9bdVKuwaWZIHsiKFSuDuUKv5l1IiQYyLBtaOZHwX-LRhtRqXlk7OEJWdEjUDpgG5OgM5V0NP1-TAixTMV6X30vwOthHGbM6qLrTX-GvODQvwkLdO-DpdrbiRPqFgb3c116YGYhbVPDDyGdpXug29UQZyTxIGkf9oglfdDO9hsphbhTB8fQxaFDdS_2IWIfe6rQM2P60DWg88JjTbmMqZ6Fvfjaf8qDwNzhwDUg_rzdJXBGZRgyenU-Ca7y03INVEbp7LAJouwpSS3dDxlvZWeYo3LwBJ3iOki47y611pHjbqCXt0-dE4fC8rJ489WWzi0rVc4PVRhvo07kBCqp2C5WSGiXkQOnEQHSNP6s_xivbtB06MZJHOMP-cS7y40DFJyTIqW3281e5Ky6lL-mbtNe2lLobCo6L3R-FTfmIcDVLwciZAQ02Yo7DxfswVaM1L2YEtSlbAyxSvYvNZiGZCtRWFXw93jLKnUq0MKKICMwUiC9KMp3qDvmUNAj7HjyMSECrAgxBZtMBlsdoHtp16s4cWO3UaVwSG5ZE0Xtk0Y4-W7FY4OZGxnyTFrtLwDKclO2hM6NKSEr38wJ03KiZ_HqkB1VKmhuDijp2TR_RG_ogsK_MywBA=w1043-h625-no?authuser=0'
  },
  {
     name: 'Башкортостан',
     link: 'https://lh3.googleusercontent.com/zRdool3_M93E228ZI3A9xwslhrKP72b0mWa15aLo1gJ6zl4wv04CEpu6ZAvOH3KDY_wzXa8hbeDYygXf83gSmBR-kjYKX5P5rIfe791ZE9eDWN2o7udl4mFMdY8r_F9A6KTxUgoPolflY-_qH6To5xe6KkrAJBT26AxNgBb9NCPDuB0EMY3t2ckra-QbVj-_3noUwOOgSw4Oa2NQBZQPmhOSL6q9ag1oSSOUhTzMOMbq5ZMm12w-Uca_Hp9mnVAR3GHCbPf9evcaSZYiSiz5_5ox7V1VrpXfmL6bA4t2FE7CGv3LhrCoh8TqDUWAZh3fL7HPTy82sig1SejGjRpd_IPm5y2WfjjAh04BRY5E797ixM7sMaGuWf0Wyhwljfp05Ut_kaLGR-swUxDc-eHvmjjHndtw87exuRbRzM99kzYMbjsoMuyTsgBCsLaO92c2Sbz2iO9lOHVqDnKDvzMyOtSQUecMRqSAGd5UkKWQjUe59TUbidy-O1wUlwYdoa7r6GXMmpRgMOj2a0VfksR_EOhY3QBjxETZscYtwzx_D-ZnJuDJ_WR8_n6fI8V2Vf4DPomQfk0Modng4jSmXbe4a6kDNzN5iVtwUoEMIQ78l_KjaneTMw5msJjTqF8Ed4c7zg_5ESmzkP-RhI9kfQvbq6IL1G4A6LbXHJSVkHxUR_xuMyJ4CVLXBwtPPUkRag=w937-h625-no?authuser=0'
 },
  {
     name: 'Киргизия. Ледник Ак-сай',
     link: 'https://lh3.googleusercontent.com/hRrLJKWeFULVsUGZCCwM0vdhvKqfZiNFPe7JKMC78JmYpJEgFBuP2EUDYlyX4RXGMlwgKf0rGZ2Ze-RvZHm7cD2M-NrjJ3-37VYSOvmVI1IOLKTTd9o4zxssMLe05CjT8RJFJfqNZKzXDTgVHDm2NnAYEnKFSovcbIugXyZnvvuCv7dSO5GzSANwE3zMrEcnTeMlSAaIrUnH51LpIDR-P9_pSHwr6F2hIEoAQ2V5A8xm2VvSjh-yuiwBxOes72274YcIljMpSjCIrdZ5grGHlF_n89so2JFWJDAAaOu4Whhlaz7y5y-rHQC4K5TZcdJaXW6912oVKODCjsekGW6gWHJKGvUbjkO8IKXzVZjUhr40r-ZEabG06DAEon_ELC5kZ7GDXkVCWFH3BY6HHal3iZVnl2Utk-h60m-nD7YptjACAB934oliWHmQjYT17r3VyxFgYorTxHLr9H3ndLbCPgLmH_K5c0rLH-ka9y0BSKeDmxSQQ7WvAOqV2UvwZ_LAa_OcMBstrZj0QZJkvvRNJdyBw9Tj21A6_RJTuHh_FZQny1hLNOMTfV4MP9MG-zSBvrx4i3I12JCHJG1lITsgTkCBPtU_MSehBlgORyqa8xySzA2EzUnrf8HVflgUfXgpRKlP8D6zl01MB5KuB9vBS75RH1sdibVDF7M7xi8higH5YnLS-6JjqwrAmd6uRw=w1010-h576-no?authuser=0'
  }
] */ 

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//функция открытия первой модалки
function showClick(form) {
  form.classList.add('popup_opened');
  nameInput.value = introTitle.textContent; 
  jobInput.value = introSubTitle.textContent;
}
//функция закрытия попапов нажатием на крестик
function closeForm(form) { 
  form.classList.remove('popup_opened'); 
  formElement.reset();
  formElementAddCard.reset(); 
} 

//слушатели событий
editButton.addEventListener('click', function(){
  showClick(popupOpened); 
});
addButton.addEventListener('click', () => {
  showClick(popupOpenedCards);
});
popupClose.addEventListener('click', function() {
closeForm(popupOpened);
}); 
popupCloseCards.addEventListener('click', function() {
closeForm(popupOpenedCards);
}); 
popupClosePhoto.addEventListener('click', function() {
  closeForm(photoPopup);
  comment.reset();
}); 
formElement.addEventListener("submit",formElementSubmitHandler);
submitButtonCardPhoto.addEventListener('click', addCardSubmitHandler);

function formElementSubmitHandler(evt) { 
 evt.preventDefault();  
  introTitle.textContent = nameInput.value; 
  introSubTitle.textContent = jobInput.value; 
  closeForm(popupOpened); 
} 

function createCard(data) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const titleImage = cardsElement.querySelector('.elements__item-img');
  const titleCard = cardsElement.querySelector('.elements__text-title');
  const buttonLike = cardsElement.querySelector('.elements__text-like');
  const deleteButton = cardsElement.querySelector(".elements__delete");
  //слушатель кнопки лайка и функция лайка дизлайка
  buttonLike.addEventListener('click', function handleLikeClick() {
    buttonLike.classList.toggle('elements__text-like_active');
  });
  //слушатель кнопки удаления карточки с фото
  deleteButton.addEventListener('click', function handledeleteClick() {
    deleteButton.closest('.elements__item').remove();
  });
  titleImage.addEventListener('click', function handledPhotoCards() {
  photoTitle.textContent =  data.name;
  photoImage.src = data.link;
  photoImage.alt = data.name;
  showClickPhoto();
  });

  titleCard.textContent = data.name;
  titleImage.src = data.link;
  titleImage.alt = data.name;

  return cardsElement;
}

function renderCard(data) {
  elements.prepend(createCard(data))
}

initialCards.forEach((data) => {
  renderCard(data);
})

function addCardSubmitHandler(evt) {
  evt.preventDefault();
  renderCard({name: cardName.value, link: cardLink.value});
  closeForm(popupOpenedCards);
}

//функция открытия попапа с фотографией
function showClickPhoto() {
  photoPopup.classList.add('popup_opened');  
} 





