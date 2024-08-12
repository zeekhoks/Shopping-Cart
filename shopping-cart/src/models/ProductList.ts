import ProductItem from "./ProductItem";
import productsData from "../common/product_list.json";

interface List {
    list: ProductItem[],
}

export default class ProductList implements List {
    static instance: ProductList = new ProductList()
    
    private constructor(private _list: ProductItem[] = []){}

    get list():ProductItem[]{
        return this._list
    }

    static load() : void {
        const products:ProductItem[] = productsData.map((product) => new ProductItem(
            product.id,
            product.name,
            product.description,
            product.price,
            product.quantity,
            product.image_url,
            product.cart_quantity,
        ))
        ProductList.instance._list = products;
    }

}