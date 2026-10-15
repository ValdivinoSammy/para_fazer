class Item{

    static ultimoId = 0;

    constructor(text) {
        this.id = Item.ultimoId++
        this.text = text;
        this.feito = false;
    }

    static atualizarID(itens) {
        if(itens.length > 0){
            let ids = itens.map(item=> item.id);
            let maiorID = Math.max(...ids);
            
            Item.ultimoId = maiorID + 1;
        } else {
            Item.ultimoId = 0;
        }
    }

}

export default Item