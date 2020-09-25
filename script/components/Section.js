

export default class Section{
    constructor({ items, renderer }, containerSelector){
        this._renderItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
        
    }

    renderer(){
        this._renderItems.forEach(item => {
        this._renderer(item);
        });
    } 
    
    addItem(element){
        this._container.prepend(element);
    }

}
