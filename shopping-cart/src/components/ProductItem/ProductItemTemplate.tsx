import { useState } from 'react';
import ProductItem from '../../models/ProductItem';
import './ProductItem.css';


const ProductItemTemplate = () => {

    const defaultItem: ProductItem = new ProductItem();

    useState<ProductItem>();


    return (
        <div className="card-container">
            <div className="card-image">
            <img className="product-image" src={defaultItem.image_url} alt="Italian Shoes" />
            </div>
            <div className="card-description">
                <h2 className='product-title'>{defaultItem.name}</h2>
                <p className='product-price'>$ {defaultItem.price}</p>
                <p className='product-description'>{defaultItem.description}</p>
                <button className='product-button'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductItemTemplate;