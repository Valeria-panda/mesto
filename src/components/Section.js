export default class Section{
    constructor({ items, renderer }, containerSelector){
        this._rendererItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
        
    }

    rendererItems(items){
        items.forEach((item) => {
        this._renderer(item);
        });
    } 
    
    addItem(item){
        this._container.prepend(item);
    }

}
