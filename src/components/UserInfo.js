export default class UserInfo{
    constructor({name, about, avatar}){
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo(){
        this._userInfo = {};
        this._userInfo.name = this._name.textContent;
        this._userInfo.about = this._about.textContent;
        return this._userInfo;
    }

    setUserInfo(data){
        this._name.textContent = data.name;
        this._about.textContent = data.about;
        this._avatar.src = data.avatar;
    }
}