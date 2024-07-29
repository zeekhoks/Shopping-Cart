import ProductItem from "./ProductItem";

interface List {
    list: ProductItem[],
    
}

export default class ProductList implements List {
    static instance: ProductList = new ProductList()
    
    private constructor(private _list: ProductItem[] = []){}

    get list():ProductItem[]{
        return this._list
    }

}