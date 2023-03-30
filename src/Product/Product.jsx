import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, price, seller, img, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'> 
            <img src= {img} alt="shoe-image" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <h6 className='product-price'>Price: ${price}</h6>
                <p>Manufacturer : {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={ () => handleAddToCart(props.product)} className="btn-cart">
                Add to Cart
            </button>
        </div>
    );
};

export default Product;