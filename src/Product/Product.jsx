import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {name, price, seller, img, ratings} = props.product;
    return (
        <div>
            <img src= {img} alt="shoe-image" />
        </div>
    );
};

export default Product;