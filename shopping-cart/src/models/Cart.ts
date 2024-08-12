import ProductItem from "./ProductItem";

interface List {
    list: ProductItem[];
    load(): void;
    save(): void;
    clearCart(): void;
    addCartItem(product: ProductItem): void;
    removeCartItem(productId: number): void;
    // calculateTotals
}

export default class Cart implements List {

    static instance: Cart = new Cart();
    private constructor(
        private _list: ProductItem[] = [],
    ) { }

    get list(): ProductItem[] {
        return this._list;
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("cartList");

        if (typeof storedList !== "string") return;

        const parsedList: {
            _id: number,
            _name: string,
            _description: string,
            _price: number,
            _quantity: number,
            _image_url: string,
            _cart_quantity: number
        }[] = JSON.parse(storedList);

        parsedList.forEach(productObj => {
            const newProduct = new ProductItem(productObj._id, productObj._name, productObj._description, productObj._price, productObj._quantity, productObj._image_url, productObj._cart_quantity);
            Cart.instance._list.push(newProduct);
        })
    }

    save(): void {
        localStorage.setItem("cartList", JSON.stringify(this._list));
    }

    clearCart(): void {
        this._list = [];
        this.save();
    }

    addCartItem(product: ProductItem): void {
        const existingProduct: ProductItem | undefined = this._list.find(item => item.id === product.id);
        if (existingProduct) {
            // console.log(" In addCartItem method " + existingProduct.cart_quantity);
            existingProduct.cart_quantity = existingProduct.cart_quantity + 1;
            console.log("Existing product quantity increase " + existingProduct.cart_quantity);
        } else {
            console.log("Existing product not found, adding product for the first time instead : " + product.cart_quantity);
            product.cart_quantity = product.cart_quantity + 1;
            this._list.push(product);
            console.log("Adding to list : " + product.cart_quantity);
            // this._list.forEach(element => {
            //     console.log(element);
            // });   
        }

        this.save();
    }

    removeCartItem(productId: number): void {
        this._list = this._list.filter(productItem => productItem.id === productId);
    }
}




