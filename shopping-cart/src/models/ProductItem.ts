export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image_url: string;
    cart_quantity: number;
}

export default class ProductItem implements Item {

    constructor(
        private _id: number = 1,
        private _name: string = 'Italian Shoes',
        private _description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tempora voluptas unde dicta autem ullam. Consectetur, qui, unde sed ducimus corporis delectus suscipit mollitia deserunt ipsa molestias consequuntur labore perferendis.',
        private _price: number = 345.67,
        private _quantity: number = 1,
        private _image_url: string = "src/assets/italian-shoes.jpg",
        private _cart_quantity: number = 0,
    ) { }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get price(): number {
        return this._price;
    }

    set price(price: number) {
        this._price = price;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(quantity: number) {
        this._quantity = quantity;
    }

    get image_url(): string {
        return this._image_url;
    }

    set image_url(image_url: string) {
        this._image_url = image_url;
    }

    get cart_quantity(): number {
        return this._cart_quantity;
    }

    set cart_quantity(cart_quantity: number) {
        this._cart_quantity = cart_quantity;
    }
}